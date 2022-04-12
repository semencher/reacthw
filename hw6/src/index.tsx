import React from "react";
import ReactDOM from "react-dom";
import Color from "color";

import ColorItem from "./colorItem"
import style from "./main.sass";

const { Provider, Consumer } = React.createContext({});

class Hello extends React.Component {
    constructor(props) {
        super(props);

        this.color = React.createRef();

        this.state = {
            leftColor: "red",
            rightColor: "red"
        }
    }

    
    setColor = ({ leftColor, rightColor }) => {
        if (leftColor) {
            this.setState({leftColor});
        } else {
            this.setState({rightColor});
        }

        const l = Color(leftColor || this.state.leftColor).rgb().array();
        const r = Color(rightColor || this.state.rightColor).rgb().array();
        
        this.color.current.style.background = Color([(l[0] + r[0]) / 2, (l[1] + r[1]) / 2, (l[2] + r[2]) / 2 ]).rgb();
    }

    render() {
        const ex1 : string = "Комбинация цветов";
        return  (<Provider
                    value={{ leftColor: this.state.leftColor, rightColor: this.state.rightColor, setColor: this.setColor}}
                    >
                    <h1 className={style.mainTitle}>{ex1}</h1>
                    <div className={style.blockResult} ref={this.color}></div>
                    <div className={style.center}>
                        <ColorItem val="leftColor"></ColorItem>
                        <ColorItem val="rightColor"></ColorItem>
                    </div>
                </Provider>);
    }
}

export default Consumer;

ReactDOM.render(
    <Hello />,
    document.getElementById("app")
)