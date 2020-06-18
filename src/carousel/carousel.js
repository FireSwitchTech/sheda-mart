import React from 'react';
import firstshow from '../img/Showcase1.jpg'
import secshow from '../img/Showcase2.png'
import thirdshow from '../img/P2.jpeg'



const Carousel = () => {
    return ( 

    <div>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
              <img src={firstshow} class="d-block w-100 h-100" alt="..."  />
          </div>
          <div class="carousel-item">
            <img src={secshow} class="d-block w-100 h-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={thirdshow} class="d-block w-100  h-100"  alt="..." />
          </div>
        </div>
      </div>
    </div>
     );
}
 
export default Carousel;