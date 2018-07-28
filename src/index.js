import { h, render, Component } from "preact";
import Header from "./components/header/header";
import Products from "./components/products/products"
import Groups from "./components/group/group"
import "./styles/reset.scss";
import "./styles/base.scss";
import allInfo from './allInfo';

let allPageComponents = [Products,Groups];
const DEFAULTPAGE = 0;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage : DEFAULTPAGE,
    }
  }
  _onChangePage(changePage) {
    console.log(changePage)
    let newPage = this.state.currentPage + changePage;
    this.setState( {
      currentPage : newPage
    })
  }
  render({}, { currentPage }) {
    let TempComponent = allPageComponents[currentPage];
    return (
      <app>
        <Header />
        {/* {changeComponent(allPageComponents[this.state.currentPage],allInfo[this.state.currentPage])} */}
        {/* <Products  appChangePage = {this._onChangePage.bind(this)}  data = {allInfo[currentPage]}/>}*/}
        <TempComponent  appChangePage = {this._onChangePage.bind(this)}  data = {allInfo[currentPage]}/>


      </app>
    );
  }
}
render(<App />, document.body);
