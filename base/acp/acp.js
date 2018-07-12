import { h, render, Component } from "preact";
import Scroll from "../scroll/scroll";
export default (WrappedComponent, data) => {
  class NewComponent extends Component {
    constructor() {
      this.state = {
        data: data
      };
    }
    render({}, {}) {
      return (
        <Scroll data={this.state.data}>
          <WrappedComponent data={this.state.data} />
        </Scroll>
      );
    }
  }
};
