import { h, render, Component } from "preact";
import Header from "./components/header/header";
import Products from "./components/products/products";
import Groups from "./components/group/group";
import Members from "./components/member/member-all/member";
import "./styles/reset.scss";
import "./styles/base.scss";
import allInfo from "./allInfo";
import Join from "./components/join/join";
import First from "./components/first/first";
import ifPC from "../base/ifPC";
import GoPC from "./components/pc/pc";

let allTitles = ["首页", "产品介绍", "组别介绍", "成员介绍", "加入我们"];
let allPageComponents = [First, Products, Groups, Members, Join];
const DEFAULTPAGE = 0;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: DEFAULTPAGE,
      isPC: ifPC.isPc
    };
  }

  _onChangeComponent(title) {
    let index = allTitles.indexOf(title);
    if (index >= 0) {
      this.setState({ currentPage: index });
    }
  }
  _onChangePage(changePage) {
    //console.log("into"+changePage)
    let newPage = this.state.currentPage + changePage;
    this.setState({
      currentPage: newPage
    });
  }
  render({}, { currentPage, isPC }) {
    let TempComponent = allPageComponents[currentPage];

    return (
      <div>
        {isPC ? (
          <GoPC />
        ) : (
          <app>
            {this.state.currentPage !== 0 ? (
              <Header
                changeComponent={this._onChangeComponent.bind(this)}
                title={allTitles[currentPage]}
              />
            ) : (
              ""
            )}
            <TempComponent
              appChangePage={this._onChangePage.bind(this)}
              data={allInfo[currentPage]}
            />
          </app>
        )}
      </div>
    );
  }
}
render(<App />, document.body);
