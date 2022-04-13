import React from "react";
import {observer, inject} from "mobx-react";

import Tree from "./tree"
import style from "./main.sass";

@inject("Store")
@observer
export default class ColorItem extends React.Component {
    constructor(props) {
        super(props);

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

    render() {
        return  (
                <div className={style.blockSource}>
                    <div className={style.blockSourceColor} style={{background: this.props.Store[this.props.target[0].toLowerCase() + this.props.target.slice(1)]}}></div>
                        <Tree struct={this.structColor} target={this.props.target}></Tree>
                </div>
                );
    }
}
