import React from "react";

import style from "./main.sass";
import Consumer from "./index";

export default class Tree extends React.Component {
    constructor(props) {
        super(props);
    }

    selectColor = (e) => {
        this.props.refColor.current.style.background = e.target.getAttribute("color");
    }

    render() {
        return  (
                    <Consumer>
                        {context => (
                            <div className={style.list}>
                                <ul>
                                    {
                                        this.props.struct.children?.map((item, index) => (
                                            <li key={item.name + index}>
                                                {item.name}
                                                <Tree struct={item} refColor={this.props.refColor} val={this.props.val}></Tree>
                                            </li>
                                        ))
                                    }
                                    {
                                        this.props.struct.colors?.map((val) => (
                                            <li key={this.props.val + val}>
                                                <button style={{background: val}} 
                                                        color={val}
                                                        onClick={(e) => { context.setColor({[this.props.val]: val}); this.selectColor(e)}}>
                                                    {val}
                                                </button>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        )}
                    </Consumer>
                );
    }
}
