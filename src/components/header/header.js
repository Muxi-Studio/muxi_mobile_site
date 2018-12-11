import { h, render, Component } from "preact";
import DropDownMenu from "../drop-down-menu/drop-down-menu";
import style from "./header.scss";

// "lint": "./node_modules/.bin/eslint .js ./src --fix",
// "precommit": "npm run lint && pretty-quick --staged"
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "首页",
      open: false
    };
  }
  componentWillMount() {
    this.setState({ title: this.props.title });
  }
  componentWillReceiveProps(props) {
    this.setState({ title: props.title });
  }
  _handleChildChoose(title) {
    let openStatus = !this.state.open;
    this.setState({ open: openStatus });
    this.props.changeComponent(title);
    this.setState({
      title
    });
  }
  _handleClickMenu() {
    let openStatus = !this.state.open;
    this.setState({
      open: openStatus
    });
  }
  render({}, { title }) {
    return (
      <div>
        <div
          style={style}
          className="header-container"
          // onChoose={this._handleChildChoose.bind(this, title)}
        >
          <div className="header-logo">
            <img
              className="header-logo-pic"
              src={"http://test-sdk.muxixyz.com/mobile_site/logo.png"}
            />
          </div>
          <div className="header-title"> {title} </div>
          <div className="header-menu">
            <div
              className="triangle"
              onClick={this._handleClickMenu.bind(this)}
            />
          </div>
        </div>
        {this.state.open && (
          <DropDownMenu
            onChoose={this._handleChildChoose.bind(this)}
            title={title}
          />
        )}
      </div>
    );
  }
}
