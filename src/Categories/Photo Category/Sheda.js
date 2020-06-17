import React from 'react'
import './photo.css'
import camcoder from './img/cam5.jpg'
import Nikon from './img/cam6.jpg'
import Sony from './img/cam7.jpg'
import Drone from './img/drone1.jpg'
import Tripod from './img/cam stand.jpg'
import Reflector from './img/reflector.jpg'
import Rebel from './img/cam8.jpg'
import Lens from './img/lens1.jpg'
import Light from './img/light.jpg'
<<<<<<< HEAD
function Sheda() {
    return(
=======
import Navbar from '../../navbar/navbar.js'
function Sheda() {
    return(
      <div>
      <Navbar/>
>>>>>>> 7c1d59bd27ff48a4d272dd592f4f6e767ff62185
        <div>
     <h1 id="headcat">Photo<span id="graphy">graphy</span></h1>
    <div class="container-fluid">
    {/* First Row */}

    <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-4">
            <img src={camcoder} alt="image" height="150" width="150" />
            <p>Digital Video Camera Video Camcorder HD 1080P... 
               <h5>₦ 11,990</h5> </p>
               <button type="button" class="btn btn-primary btn-sm" id="orange">Add to cart</button>
                <button type="button" class="btn btn-secondary btn-sm">Buy now</button>
          </div>

          <div class="col-sm-12 col-md-4">
            <img src={Nikon} alt="image" height="150" width="150" />
            <p>Nikon Nikon D850 DSLR Camera (Body Only)
                <h5>₦ 1,000,000</h5> </p>
                <button type="button" class="btn btn-primary btn-sm" id="orange">Add to cart</button>
                <button type="button" class="btn btn-secondary btn-sm">Buy now</button>
          </div>

          <div class="col-sm-12 col-md-4">
            <img src={Sony} alt="image" height="150" width="150" />
            <p>Nikon D850 DSLR Camera (Body Only)
                <h5>₦ 1,300,000</h5> </p>
                <button type="button" class="btn btn-primary btn-sm" id="orange">Add to cart</button>
                <button type="button" class="btn btn-secondary btn-sm">Buy now</button>
          </div>

          <div class="col-sm-12 col-md-4">
            <img src={Drone} alt="image" height="150" width="150" />
            <p>Dji Mavic 2 Zoom Drone Quadcopter
                <h5>₦ 550,000</h5> </p>
                <button type="button" class="btn btn-primary btn-sm" id="orange">Add to cart</button>
                <button type="button" class="btn btn-secondary btn-sm">Buy now</button>
          </div>


          <div class="col-sm-12 col-md-4">
            <img src={Tripod} alt="image" height="150" width="150" />
            <p>MobFest Tripod-3120 Portable stand
               <h5>₦ 11,990</h5> </p>
               <button type="button" class="btn btn-primary btn-sm" id="orange">Add to cart</button>
                <button type="button" class="btn btn-secondary btn-sm">Buy now</button>
          </div>

          <div class= "col-sm-12 col-md-4">
            <img src={Reflector} alt="image" height="150" width="160" />
            <p> Round Reflector: Various colours Gold, Silver
                <h5>₦ 7,000</h5> </p>
                <button type="button" class="btn btn-primary btn-sm" id="orange">Add to cart</button>
                <button type="button" class="btn btn-secondary btn-sm">Buy now</button>
          </div>

          <div class="col-sm-12 col-md-4">
            <img src={Rebel} alt="image" height="150" width="150" />
            <p>Canon EOS 1300D/Rebel T6 DSLR Camera Premium Kit 
                <h5>₦ 220,000</h5> </p>
                <button type="button" class="btn btn-primary btn-sm" id="orange">Add to cart</button>
                <button type="button" class="btn btn-secondary btn-sm">Buy now</button>
          </div>

          <div class="col-sm-12 col-md-4">
            <img src={Lens} alt="image" height="150" width="150" />
            <p>Canon Canon EF 100-400mm F/4.5-5.6L IS USM Telephoto Zoom 
                <h5>₦ 320,000</h5> </p>
                <button type="button" class="btn btn-primary btn-sm" id="orange">Add to cart</button>
                <button type="button" class="btn btn-secondary btn-sm">Buy now</button>
          </div>

          <div class="col-sm-12 col-md-4">
            <img src={Light} alt="image" height="150" width="150" />
            <p>Andoer Andoer Mini Portable Dimmable Studio Video Photography LED 
                <h5>₦ 16,970</h5> </p>
                <button type="button" class="btn btn-primary btn-sm" id="orange">Add to cart</button>
                <button type="button" class="btn btn-secondary btn-sm">Buy now</button>
          </div>

        </div>
      </div>

    </div>

            
        </div>
<<<<<<< HEAD
=======
        </div>
>>>>>>> 7c1d59bd27ff48a4d272dd592f4f6e767ff62185
    )
}
export default Sheda