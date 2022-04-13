import React from "react";
import ReactDOM from "react-dom";
import Color from "color";
import {Provider} from "mobx-react";
import {observer, inject} from "mobx-react";

import ColorItem from "./colorItem"
import Store from "./Store"
import style from "./main.sass";

@inject("Store")
@observer
class Hello extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const ex1 : string = "Комбинация цветов";
        const l = Color(this.props.Store.leftColor).rgb().array();
        const r = Color(this.props.Store.rightColor).rgb().array();
        let color = Color([(l[0] + r[0]) / 2, (l[1] + r[1]) / 2, (l[2] + r[2]) / 2 ]).rgb();

        return  (
                    <>
                        <h1 className={style.mainTitle}>{ex1}</h1>
                        <div className={style.blockResult} style={{background: color}}></div>
                        <div className={style.center}>
                            <ColorItem target="LeftColor"></ColorItem>
                            <ColorItem target="RightColor"></ColorItem>
                        </div>
                    </>
                );
    }
}


ReactDOM.render(
    <Provider {...{ Store }}>
        <Hello />
    </Provider>,
    document.getElementById("app")
)