// import { h, render, Component } from 'preact'
// import style from './products.scss'
// import info from './product-info'
// import Scroll from '../../../base/scroll/scroll'
// export default class Products extends Component{
//     constructor(props){
//         super();
//         this.state = {
//           data: info
//         }
//     }
//     render({},{}){
//         // 输出[0,1,2..,n-1]

//         return(     
//         <Scroll countPage = {this.state.data.length}>
//             {this.state.data.map((item)=>{
//                 return  
//               (<div className = 'products-item'>
//                 <h1>{item.product}</h1>
//                 <h2>{item.type}</h2>
//                 <p>{item.intro}</p>
//                 </div>)
//             })}    
      
//         </Scroll>
//         )
//     }

// }