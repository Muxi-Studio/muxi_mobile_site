import { h, render, Component } from "preact";
import Header from "./components/header/header";
import Products from "./components/products/products"
import Groups from "./components/group/group";
import Members from "./components/member/member-all/member"
import "./styles/reset.scss";
import "./styles/base.scss";
import allInfo from './allInfo';


let allPageComponents = [Products,Groups,Members];
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
        
        {/* <TempComponent  appChangePage = {this._onChangePage.bind(this)}  data = {allInfo[currentPage]}/> */}
        <Members data = {allInfo[2]} />

      </app>
    );
  }
}
render(<App />, document.body);
