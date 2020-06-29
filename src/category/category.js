import React from 'react';
import './category.css';
import Navbar from '../navbar/navbar'
import products from '../database/items'

const Category = ({match}) => {
    const groupProduct = products.filter(item=>
         (item.category_name) == match.params.category_name
         
    );
    const individaulItem =groupProduct.map(c=>{
        return(

          <div class="col-sm-12 col-md-4">
            <img src={c.dp} alt="image" height="150" width="150" />
            <p>{c.name}
                <h5>₦{c.price}</h5> </p>
               <button type="button" class="btn btn-primary btn-sm" id="orange">Add to cart</button>
                <button type="button" class="btn btn-secondary btn-sm" >Buy now</button>
          </div>
    
        )
        
    })
    const getfirst =()=>{
         var first = match.params.category_name.slice(0,5)
         return first
    }
    const getLast =()=>{
        var last = match.params.category_name.slice(5)
        return last
   }
   

    return ( 
        <div>
            <Navbar/>
    <h1 id="headcat">{getfirst()}<span id="graphy">{getLast()}</span></h1>
            <div class="container-fluid">
                <div className="container">
                    <div className="row">
                    {individaulItem}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Category;