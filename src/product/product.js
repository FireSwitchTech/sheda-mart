import React, { Component } from 'react';
import Items from '../database/items'
import './product.css'
class Product extends Component {
    state = {  }
    render() { 
        const Allproduct = Items.filter(d=>d.id==this.props.match.params.id)
            
        return ( 
            <div class="row enig">
                <div class="col-lg-6 fest">
                    <img src={Allproduct[0].dp} alt="jog" width="100%"/>
                    <div>Share this Product</div>
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                </div>      
                <div class="col-lg-6 try">
                    <h3>{Allproduct[0].name}</h3>
                    <div className='figma' style={{fontSize: "20px"}}><b>₦{Allproduct[0].price}</b></div>
                    <div className='bulma'><del>₦950,000</del></div>
            
                    <button class="ray"><i style={{float: "left"}} class="fas fa-shopping-cart"></i> ADD TO CART</button>
                </div>
            </div>
       
         );
    }
}
 
export default Product;