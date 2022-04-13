import React from "react";

import Tree from "./tree"
import style from "./main.sass";

export default class ColorItem extends React.Component {
    constructor(props) {
        super(props);
        this.color = React.createRef();

        this.structColor = {
            "children": [
                {
                    "colors": ["Red", "Green", "Yellow"],
                    "name": "Теплые"
                },
                {
                    "colors": ["Blue", "Turquoise", "Violet"],
                    "name": "Холодные"
                }
            ],
            "colors": ["Black", "White"],
            "name": "Цвета"
        }
    }

    selectColor = (e) => {
        this.color.current.style.background = e.target.getAttribute("color");
    }

    render() {
        return  (
                <div className={style.blockSource}>
                    <div className={style.blockSourceColor} ref={this.color}></div>
                        <Tree struct={this.structColor} refColor={this.color} val={this.props.val}></Tree>
                </div>
                );
    }
}
