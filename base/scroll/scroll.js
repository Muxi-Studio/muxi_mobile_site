import { h, render, Component } from "preact";
export default class Scroll extends Component {
  constructor(props) {
    super();
    this.state = {
      countPage: props.countPage,
      currentPage: 0,
      transform: 0,
      touchStart: null,
      dragThreshold: 0.1,
      percentage: 0
    };
  }

  handleTouchStart(e) {
    e.preventDefault();
    if (this.state.touchStart !== null) return;
    this.setState({ touchStart: e.touches[0].clientY });
  }
  handleTouchMove(e) {
    if (this.state.touchStart === null) return;
    let event = e.touches[0];
    let percentage =
      (this.state.touchStart - event.clientY) / window.screen.height;
    this.setState({ percentage });
    if (percentage > 0) {
      let page = this.state.currentPage + 1;
      if (page > this.state.countPage) {
        page = this.state.currentPage;
      } else {
        let transform = (1 - 0.4 * percentage) * -100;
        this.setState({
          transform
        });
      }
    } else if (percentage < 0) {
      let page = this.state.currentPage - 1;
      if (page < 0) {
        page = 0;
      } else {
        let transform = (1 - 0.4 * percentage) * 100;
        this.setState({
          transform
        });
      }
    }
  }
  handleTouchEnd() {
    this.setState({ touchStart: null, transform: 0 });
    if (this.state.percentage >= this.state.dragThreshold) {
      let page = this.state.currentPage + 1;

      // if (page > this.state.countPage) {

      //   this.props.changeData(1);
      // }

      if (page < this.state.countPage) {
        this.props.changeData(1);
      } else {
        this.props.changePage(1);
      }
      this.setState({
        currentPage: page
      });
    } else if (Math.abs(this.state.percentage) >= this.state.dragThreshold) {
      let page = this.state.currentPage - 1;
      if (page > 0) {
        this.props.changeData(-1);
      } else {
        this.props.changePage(-1);
      }
      this.setState({
        currentPage: page,
        percentage: 0
      });
    }
  }
  render({}, {}) {
    let height = this.state.countPage * 100 + "%";
    let indexArray = Array.from(
      new Array(this.state.countPage),
      (val, index) => index
    );
    // 输出[0,1,2..,n-1]

    return (
      <div
        id="viewport"
        class="viewport"
        ref={this.setViewPortRef}
        onTouchStart={this.handleTouchStart.bind(this)}
        onTouchMove={this.handleTouchMove.bind(this)}
        onTouchEnd={this.handleTouchEnd.bind(this)}
        style={{
          transform: "translateY(" + this.state.transform + "px)",
          position: "relative",
          height: height,
          width: 100 + "vw",
          transitionDuration: ".8s",
          top: -100 * this.state.currentPage + "vh"
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
