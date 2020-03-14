import { h, render, Component } from "preact";
import style from "./card.scss";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null
    };
  }
  handleImgError() {
    this.img.src =
      "https://wx4.sinaimg.cn/mw690/006P0MECly1fouzomp40lj31hc0u011e.jpg";
  }
  render(props) {
    return (
      <div style={style}>
        <div className="intro_card">
          <div className="intro_card_photo_containner">
            <img
              className="intro_card_photo"
              src={props.info.photo}
              onError={this.handleImgError.bind(this)}
              ref={img => (this.img = img)}
            />
          </div>
          <div className="intro_card_name">姓名:{props.info.name}</div>
          <div className="intro_card_introduction">{props.info.intro}</div>
        </div>
      </div>
    );
  }
}
