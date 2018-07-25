import {h,render,Component} from "preact";
import style from "./button.scss";


export default class Button extends Component {
    constructor (props) {
        super(props);
        this.state = {
            changeStyle : false
        }
    }
 
    _changeStyle() {
       
        this.setState({
            changeStyle:true
        })
        window.location.href = this.props.href;
    
    }
    render(props,{changeStyle}) {
        return (
            <div style = {style} className = {`btn ${changeStyle ? "btn-hover":""}`} 
            onTouchStart = {this._changeStyle.bind(this)}
            >
                <p>
                    {props.linkWord}
                </p>
            </div>
        )
    }
}