import { h, render, Component } from 'preact'
import style from './products.scss'
import info from './product-info'
import Scroll from '../../../base/scroll/scroll'


export default class Products extends Component{
    constructor(props){
        super();
        this.state = {
          data: info
        }
    }
    render({},{data}){
        console.log('into')
        return(    
        <app> 
        <Scroll countPage = {this.state.data.length}>
        {/* <div className = 'test'> */}
            {data.map((item,i)=>(
            <div className ={'test-inner test-inner'+i} >
                <p> {item.intro} </p>
            </div>
            ))}    
      {/* </div> */}
      </Scroll>
      </app>
        )
    }

}