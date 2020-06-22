import React from 'react'
import './product.css'
import Joe from '../img/joe.jpg'

function product(){
    
    return(
    <div>
        <div class="row enig">
        <div class="col-lg-6 fest">
            <img src={Joe} alt="jog" width="80%"/>
            <br/>
            <p>Share this Product</p>
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-twitter"></i>
            </div>      
      <div class="col-lg-6 try">
        <h3>CANON CanonE0S 90D With EF-S 18-55mm</h3>
        <h4>Brand: Canon </h4>
        <p class="ay" ><b>₦894,000</b></p>
        <p><del>₦950,000</del></p>

        <button class="ray"><i class="fas fa-shopping-cart"></i> ADD TO CART</button>
      </div>
    </div>
    </div>
    )
}

export default product