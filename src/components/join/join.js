import { h, render, Component } from "preact";
import "./join.scss";

export default class Join extends Component {
  constructor(props) {
    super();
  }
  componentDidMount() {
    this.img.onmousedown = () => {
      return false;
    };
  }
  handleJoin() {
    alert("请加 QQ 群 763615354 咨询");
  }
  render({}, {}) {
    return (
      <div>
        <div ondragstart="return false" className="join-web">
          <div className="background-img">
            <img
              src={"http://test-sdk.muxixyz.com/mobile_site/join-star.png"}
              className="background-star"
              ref={img => {
                this.img = img;
              }}
            />
          </div>

          <div
            className="background-button"
            onClick={this.handleJoin.bind(this)}
          >
            <p className="join-words">加入我们</p>
          </div>
        </div>
      </div>
    );
  }
}
