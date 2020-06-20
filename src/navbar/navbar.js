import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import Login from '../login/login'
import "./navbar.css"
class Navbar extends Component {
  state = { 
    show:false
   }
   showModal =()=>{
     this.setState({
       show:true
     })
   }
   hideModal=()=>{
     this.setState({
       show:false
     })
   }
  render() { 
    return ( 
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">SHEDA MART</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Account <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <Link class="nav-link" onClick={this.showModal}>Log In</Link>
              <Login show={this.state.show} hide={this.hideModal}/>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">Cart</a>
            </li>
            
              </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>   
     );
  }
}
 
export default Navbar;
