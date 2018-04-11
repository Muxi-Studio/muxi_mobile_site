import { h, render, Component } from 'preact'
import style from './products.scss'
export default class Products extends Component{
    constructor(props){
        super();
    }
    componentDidMount(){
        window.addEventListener('scroll',this.handleTouchStart);
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.handleTouchStart)
    }
    handleTouchStart(){
       console.log(
           "yes"
       )
    }
    
    render({},{}){
        return(
            
 <div id="viewport" class="viewport"   style={{
    transitionDuration: ".8s",
    width: 184 * props.count + "px",
    top:props.current * 100 + "vh"
  }}>
    <div class="pageview" style="background: #3b76c0" >
        <h3 >页面-1</h3>
    </div>
    <div class="pageview" style="background: #58c03b;">
        <h3>页面-2</h3>
    </div>
    <div class="pageview" style="background: #c03b25">
        <h3>页面-3</h3>
    </div>
    <div class="pageview" style="background: #e0a718;">
        <h3>页面-4</h3>
    </div>
    <div class="pageview" style="background: #c03eac;height:100vh">
        <h3>页面-5</h3>
    </div>
</div> 
        )
    }

}