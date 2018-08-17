import { h, render, Component } from "preact";
import style from "./drop-down-menu.scss";
import info from "./drop-down-menu-info";
import PropTypes from "prop-types";

export default class DropDownMenu extends Component {
  constructor(props) {
    super();
    this.state = {
      baseInfo: info,
      open: false,
      current: 0
    };
  }
  componentWillMount() {
    let i =  this.state.baseInfo.findIndex((item)=>{
      return item.name === this.props.title;
    })
    this.setState({current: i});
  }
  componentWillReceiveProps(props) {
   let i =  this.state.baseInfo.findIndex((item)=>{
      return item.name === props.title;
    })
    this.setState({current: i});
  }
  _handleClickItem(index) {
    this.setState({
      current: index
    });
  
    this.props.onChoose(this.state.baseInfo[index].name);
  }
  render({ }, { baseInfo, current }) {
    return (
      <div style={style}>
      
          <div className="drop-down-menu-container">
            <ul className="drop-down-menu-ul">
              {baseInfo.map((item, index) => {
                return (
                  <a>
                    {/* {" "} */}
                    <li
                      className={`drop-down-menu-li ${
                        index === current ? "clicked" : ""
                        }`}
                      onClick={this._handleClickItem.bind(this, index)}
                    >
                      {item.name}
                    </li>
                  </a>
                );
              })}
            </ul>
          </div>
     </div>
    )}
}

DropDownMenu.propTypes = {
  onChoose: PropTypes.func
};
