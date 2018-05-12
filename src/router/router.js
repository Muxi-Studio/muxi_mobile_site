// import { h, render, Component } from 'preact'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
import Header from '../components/header/header';
import Product from '../components/products/products';


   
const getRouter = () => (
    
      <Router>
        <Route path="/" component={Header} />
        <Route path="product" component={Product}/>
      </Router>
);

export default getRouter;