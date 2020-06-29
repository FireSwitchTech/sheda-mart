import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Sheda from './Categories/Photo Category/Sheda'
import Landing from './landing/landing'
import Category from './category/category'
import Product from './product/product'



class App extends Component {
  state = { 
    cart:[],
    cartNo:0
   }
   update=(data)=>{
     this.setState({
       cart:data,
       cartNo:this.state.cart.length
       
     })
     
   }
  render(){
    const getCartNo = this.state.cart.length
  return (
    <BrowserRouter>
    <Switch>
        <Route exact path="/sheda" component={Sheda} />
        <Route exact path= "/" render={(props) => (
          <Landing {...props} update={this.update} />
        )} />
        <Route  exact path="/categories/:category_name" render={(props) => (
          <Category {...props}  update={this.update}/>
        )}/>
        <Route exact path="/categories/:category_name/:id" component={Product}/>
      </Switch>
    </BrowserRouter>
  );
  }
}
export default App;