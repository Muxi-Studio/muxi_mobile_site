import { h, render, Component } from "preact";
import style from "./card.scss";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null
    };
  }
  render(props) {
    return (
      <div style={style}>
        <div className="intro_card">
          <div className="intro_card_photo_containner">
            <img className="intro_card_photo" src={props.info.photo} />
          </div>
          <div className="intro_card_name">姓名:{props.info.name}</div>
          <div className="intro_card_introduction">
            座右铭：{props.info.intro}
          </div>
        </div>
      </div>
    );
  }
}
