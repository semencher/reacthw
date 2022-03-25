import React from "react";
import ReactDOM from "react-dom";

import style from "./main.sass";

class Hello extends React.Component {
    render() {
        const ex1 : string = "Hello TypeScript!";
        return <h1 className={style.mainTitle}>{ex1}</h1>;
    }
}

ReactDOM.render(
    <Hello />,
    document.getElementById("app")
)