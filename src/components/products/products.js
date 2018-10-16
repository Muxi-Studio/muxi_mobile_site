import { h, render, Component } from "preact";
import style from "./products.scss";
import Btn from "../common/button/button";
import Scroll from "../../../base/scroll/scroll";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDataIndex: 0
      // data: props.data
    };
  }
  _changeData(changeIndex) {
    let currentDataIndex = this.state.currentDataIndex + changeIndex;
    this.setState({ currentDataIndex });
  }
  _changePage(index) {
    this.props.appChangePage(index);
  }
  render({ data }, {}) {
    return (
      <app style={style}>
        <Scroll
          countPage={data.length}
          changeData={this._changeData.bind(this)}
          changePage={this._changePage.bind(this)}
        >
          {data.map(p => {
            let linkWord = p.type === "Web应用" ? "进入链接" : "下载应用";

            return (
              <div className="products-innercontainer">
                <div className="product-img-containner">
                  <img className="product-img" src={p.img} />
                </div>
                <div className="product-center-intro">
                  <div className="product-name">{p.product}</div>
                  <div className="product-type-containner">
                    <img
                      className="product-type-logo"
                      src={
                        "http://test-sdk.muxixyz.com/mobile_site/product-type.png"
                      }
                    />
                    <div className="product-type">{p.type}</div>
                  </div>
                  <div className="product-intro">{p.intro}</div>
                </div>
                {/* <div className = "product-href"> */}
                <Btn linkWord={linkWord} href={p.href} />
              </div>
            );
          })}
        </Scroll>
      </app>
    );
  }
}
