
// Before

/*
import React from "react";

const SimpleComponent = ({ number, componentRerenderedTimes }) => {
  componentRerenderedTimes.current++;

  const onPress = () => alert(number);

  return <div onClick={() => onPress()}>Number: {number}</div>;
};

export default function App() {
  const componentRerenderedTimes = React.useRef(0);
  const [data, setData] = React.useState(
    new Array(1000)
      .fill({ number: 0 })
      .map((item, index) => ({ number: item.number, id: String(index + 1) }))
  );

  const random = () =>
    setData(
      data.map(({ id }) => ({ number: Math.floor(1 + Math.random() * 10), id }))
    );

  return (
    <div>
      <div>Was rendered: {componentRerenderedTimes.current}</div>
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
          number={item.number}
          componentRerenderedTimes={componentRerenderedTimes}
        />
      ))}
    </div>
  );
}
*/

// After

import React from "react";

const SimpleComponent = ({ number, componentRerenderedTimes }) => {
  componentRerenderedTimes.current++;

  const onPress = () => alert(number);

  return <div onClick={() => onPress()}>Number: {number}</div>;
};

export default function App() {
  const componentRerenderedTimes = React.useRef(0);
  const [data, setData] = React.useState(
    new Array(1000)
      .fill({ number: 0 })
      .map((item, index) => ({ number: item.number, id: String(index + 1) }))
  );

  const random = () =>
    setData(
      data.map(({ id }) => ({ number: Math.floor(1 + Math.random() * 10), id }))
    );

  return (
    <div>
      <div>Was rendered: {componentRerenderedTimes.current}</div>
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
          number={item.number}
          componentRerenderedTimes={componentRerenderedTimes}
        />
      ))}
    </div>
  );
}