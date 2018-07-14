import { h, render, Component } from "preact";
import style from "./products.scss";
import Scroll from "../../../base/scroll/scroll";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDataIndex: 0,
      // data: props.data
    };
  }
  _changeData(changeIndex) {
    let currentDataIndex = this.state.currentDataIndex + changeIndex
    this.setState({ currentDataIndex });
   
  }
  _changePage(index) {
    this.props.appChangePage(index);
  }
  render({data}, {  }) {
    return (
      <app>
        <Scroll
          countPage = {data.length}
          changeData = {this._changeData.bind(this)}
          changePage = {this._changePage.bind(this)}
        >
          {data.map((p)=>{
          return( <div className = "test-inner">
            {p.product}
           </div>
          )
         })}
        
         
        
            
           
{/*           
          {data[currentDataIndex].map((item, i) => (
            <div className={"test-inner test-inner" + i}>
              <p> {item.intro} </p>
            </div>
          ))} */}
         
        </Scroll>
      </app>
    );
  }
}
