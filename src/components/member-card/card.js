import {h, render,Component} from "preact";
import style from "./card.scss";

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : null
        }
    }

}