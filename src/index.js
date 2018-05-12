import { h, render, Component } from 'preact'
// import Header from './components/header/header'
// import Products from './components/products/products'
// import './styles/reset.scss'
// import './styles/base.scss'
// import Router from './router/router'
/** @jsx h */
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'
import Header from './components/header/header';
import Product from './components/products/products';


   
// const getRouter = () => (
    
//    <Router>
//     <Route path="/" component={Header}>
//       <Route path="product" component={Product}/>
//     </Route> 
//   </Router>
// );

// class App extends Component {	
// 	render({}, { text }) {
// 		return (
// 			<app>
// 				<Products />
// 			</app>
// 		);
// 	}
let ele = document.getElementById('root');
render(<Router>
	<Switch>
    <Route exact path="/"/>
    <Route path="/product" />
	</Switch>
  </Router>, ele);
