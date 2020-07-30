import React,{Component} from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Sheda from './Categories/Photo Category/Sheda'
import Landing from './landing/landing'
import Category from './category/category'
import Product from './product/product'
import Navbar from './navbar/navbar'
import Paystack from './Paystack/paystack'




class App extends Component {
  state = { 
    cart:[],
    cartNo:0
   }
   updateParent =(data)=>{
     this.state.cart.push(data)
    this.setState({
      cart:this.state.cart,
      cartNo:this.state.cart.length
    })
   }
  render(){
    
  return (
    <BrowserRouter>
    <Navbar cartNo={this.state.cartNo}/>
    <Switch>
        <Route exact path="/sheda" component={Sheda} />
        <Route exact path= "/" render={(props) => (
          <Landing {...props}/>
        )} />
        <Route  exact path="/categories/:category_name" render={(props) => (
          <Category {...props} updateCart={this.updateParent}  cart={this.state.cart}/>
        )}/>
        <Route exact path="/categories/:category_name/:id" updateCart={this.updateParent} cart={this.state.cart} component={Product}/>
      </Switch>
     
      <Route exact path="/pay" component={Paystack} />
      
    </BrowserRouter>
    
  );
  }
}
export default App;