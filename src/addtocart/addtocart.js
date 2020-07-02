import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import Login from '../login/login'

import logo from '../img/originallogo.png'


  function addToCart() {
    return(
      <div>
      renderProductsList(){
       this.state.getIndividualprod.map((product)=>{
        return (
            <div key={product.id}>
                <h4>{product.name}</h4>
                <p>{product.itemDesc}</p>
                <img src={product.dp}/>
                <p>{product.price}</p>
            </div>
        );
    })
}

</div>
 )
 
}
export default addToCart;