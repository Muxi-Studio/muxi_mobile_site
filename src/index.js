import { h, render, Component } from "preact";
import Header from "./components/header/header";
import Products from "./components/products/products"
import "./styles/reset.scss";
import "./styles/base.scss";
import allInfo from './allInfo';

const DEFAULTPAGE = 0;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage : DEFAULTPAGE,
    }
  }
  _onChangePage(changePage) {
    let newPage = this.state.currentPage + changePage;
    this.setState( {
      currentPage : newPage
    })
  }
  render({}, { currentPage }) {
    return (
      <app>
        <Header />
        <Products  appChangePage = {this._onChangePage.bind(this)}  data = {allInfo[currentPage]}/>
      </app>
    );
  }
}
render(<App />, document.body);
