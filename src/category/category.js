import React from 'react';
import './category.css';
import Navbar from '../navbar/navbar'
import products from '../database/items'
import {Link} from 'react-router-dom'

const Category = ({match}) => {
    const groupProduct = products.filter(item=>
         (item.category_name) == match.params.category_name
         
    );
    const individaulItem =groupProduct.map(c=>{
        return(
          
            <div className="col-xs-6 col-md-4">
            <img src={c.dp} alt="image" height="150" width="150" />
            <Link to=""><p>{c.name}</p></Link>
            <h5 class= "description">₦{c.price}</h5> 
            <button type="button" class="btn btn-primary btn-sm" id="orange">Add to cart</button>
            <button type="button" class="btn btn-secondary btn-sm" >Buy now</button>
          </div>
         
        )
    })

    const getfirsthalf = () => {
         var first=  match.params.category_name.slice(0,4)
         return first
    }

 const  getsecondthalf = () => {
        var second=  match.params.category_name.slice(4)
        return second
   }


    
    return ( 
        <div>
            <Navbar/>            
    <h1 id="headcat">{getfirsthalf()}<span id="graphy">{getsecondthalf()}</span></h1>
        <div className="container">
            <div className="row">
            {individaulItem}
            </div>
            </div>
            
        </div>
     );
}
 
export default Category;