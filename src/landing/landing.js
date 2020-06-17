import React from 'react';
import {Link } from 'react-router-dom'
import categoriesList from '../database/categoriesList'
import Navbar from '../navbar/navbar'
// import Carousel from '../carousel/carousel'
import './landing.css'
const Landing = () => {
    const mystyle={
        color:"red",
    }
    const category = categoriesList.map(c=>{
        return(
        <div className="col-sm-12 col-md-6 col-lg-3">
            <img key={c.id} src={c.img_url}  alt="" />
            <Link to={c.url}><h5 style={mystyle}>{c.category_name}</h5></Link>
        </div>)
    })
    return ( 
        <div>
            <Navbar/>
            {/* <Carousel/> */}
            <div className="container">
                <div className="row">
                    
                        {category}
                </div>
            </div>
        </div>
     );
}
 
export default Landing;