import React from "react";
import ReactDOM from "react-dom";

import Blender from "./components/blender";
import Ingredient from "./components/ingredient";

class App extends React.Component {
    render() {
        return  <>
                    <h1>Blender!</h1>
                    <Blender></Blender>
                    <Ingredient></Ingredient>
                    <Ingredient></Ingredient>
                </>;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
)