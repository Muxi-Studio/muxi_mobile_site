import {h, render,Component} from "preact";
import style from "./group.scss";
import Scroll from "../../../base/scroll/scroll";

export default class Group extends Component {
    constructor (props) {
        super(props);
        this.state = {
            currentGroupIndex:0
        }
    }
   _changeGroup(groupIndex) {
    let currentGroupIndex = this.state.currentGroupIndex + groupIndex;
    this.setState({currentGroupIndex});
   }
   _changePage(index) {
       this.props.appChangePage(index);
       
   }
  
    render({data},{}) {
        return (
            <app style = {style}
            >
             <Scroll
                countPage = {data.length}
                changeData = {this. _changeGroup.bind(this)}
                changePage = {this._changePage.bind(this)}
             >
             {data.map((g) => {
                 return (   
                    <div className = "groups-innercontainer">             
                    <div className = "group">{g.name}</div>
                    </div>
                 )
             })}
            </Scroll>

            </app>
        )
    }
}