import { h, render, Component } from "preact";
import Header from "./components/header/header";
import Products from "./components/products/products"
import Groups from "./components/group/group";
import Members from "./components/member/member-all/member"
import "./styles/reset.scss";
import "./styles/base.scss";
import allInfo from './allInfo';
import Join from "./components/join/join";
import First from "./components/first/first";

let allTitles =  ["首页","产品","组别","成员","加入我们"];
let allPageComponents = [First,Products,Groups,Members,Join];
const DEFAULTPAGE = 0;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage : DEFAULTPAGE,
    }
  }
  changeComponent(title) {
    let index = allTitles.indexOf(title);
    if(index>=0) {
      this.setState({currentPage:index})
    }
  }
  _onChangePage(changePage) {
    
    let newPage = this.state.currentPage + changePage;
    this.setState( {
      currentPage : newPage
    })
  }
  render({}, { currentPage }) {
    let TempComponent = allPageComponents[currentPage];
    return (
      <app>
         {this.state. currentPage !== 0 ? <Header />:""}
        
        <TempComponent  appChangePage = {this._onChangePage.bind(this)}  data = {allInfo[currentPage]}/>
        {/* <Members data = {allInfo[2]} /> */}
        {/* <Join />
        <First /> */}
      </app>
    );
  }
}
render(<App />, document.body);
