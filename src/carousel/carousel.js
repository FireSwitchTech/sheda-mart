import React from 'react';



const Carousel = () => {
    return ( 

    <div>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
              <img src="img/P2.jpeg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="img/P3.jpeg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="img/P4.jpeg" class="d-block w-100"  alt="..." />
          </div>
        </div>
      </div>
    </div>
     );
}
 
export default carousel;