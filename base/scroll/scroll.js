import { h, render, Component } from 'preact'
export default class Scroll extends Component{
    constructor(props){
        super();
        this.state = {
            countPage : props.countPage,
            currentPage: 0,
        }
    }
    _chooseProduct = index => {
        this.setState({
            currentPage:index
        })
    }
    handleTouchStart(e){
        e.preventDefault();
        this.setState({touchStart:e.touches[0].clientY});
    }
    handleTouchMove(e){
        let event = e.touches[0];
        let  percentage = (this.state.touchStart - event.clientY) / window.screen.height;
        if(percentage > 0) {
        let page = this.state.currentPage + 1;
            this.setState({
                currentPage:page
            })
        } else if(percentage < 0) {
            let page = this.state.currentPage - 1;
            this.setState({
                currentPage:page
            })
        }
    }
    
    render({},{}){
        let height = this.state.countPage * 100 + '%';
        let indexArray = Array.from(
            new Array(this.state.countPage),
            (val,index) => index
        )
        // 输出[0,1,2..,n-1]

        return(
                    
        <div id="viewport" class="viewport"
            ref = {this.setViewPortRef}
            onTouchStart = {this.handleTouchStart.bind(this)}
            onTouchMove = {this.handleTouchMove.bind(this)}
            style = {{
                height: height,
                width: 100+"vw",
                transitionDuration: ".8s",
                top: -100 * this.state.currentPage + "%"
            }}
        >
        
        </div> 
        )
    }

}