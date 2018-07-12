import { h, render, Component } from "preact";
import style from "./products.scss";
import info from "./product-info";
import Scroll from "../../../base/scroll/scroll";

export default class Products extends Component {
  constructor(props) {
    super();
    this.state = {
      currentDataIndex: 0
    };
  }
  _changeData(changeIndex) {
    this.setState({
      currentDataIndex: currentDataIndex + changeIndex
    });
  }
  render({}, { data }) {
    return (
      <app>
        <Scroll
          countPage={this.state.data.length}
          _changeData={changeIndex => this.changeData(changeIndex)}
        >
          {/* <div className = 'test'> */}
          {data[currentDataIndex].map((item, i) => (
            <div className={"test-inner test-inner" + i}>
              <p> {item.intro} </p>
            </div>
          ))}
          {/* </div> */}
        </Scroll>
      </app>
    );
  }
}
