import React, { useEffect } from "react";

import { useKeyDownEffect } from "./useKeyDownEffect";

const SimpleComponent = React.memo(({ number, componentRerenderedTimes }) => {
  componentRerenderedTimes.current++;

  const onPress = () => alert(number);

  return <div onClick={() => onPress()}>Number: {number}</div>;
});

export default function App() {
  const componentRerenderedTimes = React.useRef(0);
  const divOfRenderTimes = React.createRef();
  const [data, setData] = React.useState(
    new Array(1000)
      .fill({ number: 0 })
      .map((item, index) => ({ number: item.number, id: String(index + 1) }))
  );

  useKeyDownEffect((e) => {
    if (e.key === "a") {
      random();
    }
  })

  const random = () =>
    setData(
      data.map(({ id }) => ({ number: Math.floor(1 + Math.random() * 10), id }))
    );

  useEffect(() => {
    divOfRenderTimes.current.innerHTML = "Was rendered: " + componentRerenderedTimes.current;
  });

  return (
    <div>
      <div ref={divOfRenderTimes}></div>
      <button onClick={() => random()}>random</button>
      <button
        onClick={() =>
          setData(data => [{ number: 0, id: Math.random() }, ...data])
        }
      >
        add to top
      </button>
      {data.map(item => (
        <SimpleComponent
          key={"sc-" + item.id}
          number={item.number}
          componentRerenderedTimes={componentRerenderedTimes}
        />
      ))}
    </div>
  );
}