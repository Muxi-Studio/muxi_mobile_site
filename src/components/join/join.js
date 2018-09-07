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
    window.location = "http://cn.mikecrm.com/uBXlK1v";
  }
  render({}, {}) {
    return (
      <div>
        <div ondragstart="return false" className="join-web">
          <div className="background-img">
            <img
              src={"http://peo10a3do.bkt.clouddn.com/mobile_site/join-star.png"}
              className="background-star"
              ref={img => {
                this.img = img;
              }}
            />
          </div>

          <div className="background-button">
            {/* <img
              src="https://occc3ev3l.qnssl.com/index_site/join_button.png"
              className="background-button-inner"
              onClick={this.handleJoin.bind(this)}
            /> */}
            <p className="join-words">加入我们</p>
          </div>
        </div>
      </div>
    );
  }
}
