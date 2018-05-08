import { h, render, Component } from 'preact'
import style from './products.scss'
export default class Products extends Component{
    constructor(props){
        super();
        this.state = {
          
        }
    }
   
    // componentDidMount(){
    //    // window.addEventListener('scroll',this.handleTouchStart);
    //    window.addEventListener('touchstart',this.handleTouchStart)
    // }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.handleTouchStart)
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
        //    // console.log('down'+percentage)
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
        // 输出[0,1,2..,n-1]

        return(         
        <div className = 'products-item'>

        </div> 
        )
    }

}