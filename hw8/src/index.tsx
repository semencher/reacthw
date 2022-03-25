import React from "react";
import ReactDOM from "react-dom";

class Hello extends React.Component {
    render() {
        const ex1 : string = "Hello TypeScript!";
        return <h1>{ex1}</h1>;
    }
}

ReactDOM.render(
    <Hello />,
    document.getElementById("app")
)