import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import './category.css';
import products from '../database/items'

class Category extends Component {
    state = { 
        cart:this.props.cart,
        cartNo:this.props.cartNo
     }
     clickhandler(id){
        const getIndividualprod = products.filter(d=>d.id==id)
        console.log(getIndividualprod[0])
         this.props.updateCart(getIndividualprod[0])
          console.log(this.state.cart)
     }
     
    render() { 
        const groupProduct = products.filter(item=>
            (item.category_name) == this.props.match.params.category_name
            
       );
   
       const individaulItem =groupProduct.map(c=>{
           return(
             
               <div className="col-xs-6 col-md-4">
             <Link to={`${c.category_name}/${c.id}`}><img key={c.id} src={c.dp} alt="image" height="150" width="150" /></Link>
              <Link to={`${c.category_name}/${c.id}`}><p>{c.name}</p></Link>
               <h5 class= "description">₦{c.price}</h5> 
               <button class="btn btn-primary btn-sm" id="orange" key={c.id} onClick={()=> this.clickhandler(c.id)}>Add to cart</button>
               <button type="button" class="btn btn-secondary btn-sm" >Buy now</button>
             </div>
           )
          
       })
   
       const getfirsthalf = () => {
            var first=  this.props.match.params.category_name.slice(0,4)
            return first
       }
   
    const  getsecondthalf = () => {
           var second=  this.props.match.params.category_name.slice(4)
           return second
      }

   
        return ( 
            <div>          
    <h1 id="headcat">{getfirsthalf()}<span id="graphy">{getsecondthalf()}</span></h1>
        <div className="container">
            <div className="row">
            {individaulItem}
            </div>
            </div>
            
        </div>
         );
    }
}
 
export default Category;
