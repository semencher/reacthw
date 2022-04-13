import { observable, action, makeObservable} from "mobx"

class StoreColors {
    constructor() {
        makeObservable(this);
    }
    @observable leftColor = "red";
    @observable rightColor = "red";
    @action setLeftColor = (color) => {
        this.leftColor = color;
    }
    @action setRightColor = (color) => {
        this.rightColor = color;
    }


}

const Store = new StoreColors();

export default Store;