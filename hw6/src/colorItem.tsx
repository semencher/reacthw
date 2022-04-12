import React from "react";

import style from "./main.sass";
import Consumer from "./index";

export default class ColorItem extends React.Component {
    constructor(props) {
        super(props);
        this.color = React.createRef();
    }

    selectColor = (e) => {
        this.color.current.style.background = e.target.getAttribute("color");
    }

    render() {
        return  (
                    <Consumer>
                        {context => (
                            <div className={style.blockSource}>
                                <div className={style.blockSourceColor} ref={this.color}></div>
                                <div className={style.list}>
                                    <ul>
                                        <li>
                                            <button color="Red" onClick={(e) => { context.setColor({[this.props.val]: "red"}); this.selectColor(e)}}>
                                                Red
                                            </button>
                                        </li>
                                        <li>
                                            <button color="Yellow" onClick={(e) => { context.setColor({[this.props.val]: "yellow"}); this.selectColor(e)}}>
                                                Yellow
                                            </button>
                                        </li>
                                        <li>
                                            <button color="Blue" onClick={(e) => { context.setColor({[this.props.val]: "blue"}); this.selectColor(e)}}>
                                                Blue
                                            </button>
                                        </li>
                                        <li>
                                            <button color="Orange" onClick={(e) => { context.setColor({[this.props.val]: "orange"}); this.selectColor(e)}}>
                                                Orange
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </Consumer>
                );
    }
}
