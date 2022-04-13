import React from "react";
import {observer, inject} from "mobx-react";

import style from "./main.sass";

@inject("Store")
@observer
export default class Tree extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return  (
                    <div className={style.list}>
                        <ul>
                            {
                                this.props.struct.children?.map((item, index) => (
                                    <li key={item.name + index}>
                                        {item.name}
                                        <Tree struct={item} target={this.props.target} Store={this.props.Store}></Tree>
                                    </li>
                                ))
                            }
                            {
                                this.props.struct.colors?.map((val) => (
                                    <li key={this.props.target + val}>
                                        <button style={{background: val}} 
                                                onClick={(e) => { this.props.Store["set" + this.props.target](val.toLowerCase());}}>
                                            {val}
                                        </button>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                );
    }
}
