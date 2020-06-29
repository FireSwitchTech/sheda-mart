import React,{Component} from 'react'
import {Link,withRouter} from 'react-router-dom'
import './Style.css'
import Modal from 'react-bootstrap/Modal'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalBody from 'react-bootstrap/ModalBody'
import Login from '../login/login'


class Signin extends Component {
   state = {
     show:false
   }

     showModal =()=>{
       this.setState({
         show:true
       })
     }
     hideModal=()=>{
       this.SetState({
         show:false
       })
     }
render() {
 return(
  <Modal show={this.props.show} onHide={this.props.hide}>
  <ModalHeader closeButton><h5>CREATE ACCOUNT</h5></ModalHeader>
  <ModalBody>
          <form>
            <div class="form-group">
              
              <input type="text" class="form-control"  placeholder="First name"/>
            </div>
            <div class="form-group">
              
               <input type="text" class="form-control" placeholder="Last name"/>
        </div>
        <div class="form-group">
              
               <input type="email" class="form-control" placeholder="E-mail"/>
        </div>
        <div class="form-group">
              
        <input type="password" class="form-control" placeholder="Password"/>
       </div>
       <div class="form-group">
        <button type="submit" class="button">CREATE ACCOUNT</button>
      
          <p>OR</p>
          <button type="submit" class="btn1">CONNECT WITH FACEBOOK</button>
          <p>Already have an account?</p>
             <Link class="me" onClick={this.props.history.goBack()}>LOG IN</Link>
         </div>
             </form>
             </ModalBody>
</Modal>
  );

}


}
export default withRouter(Signin)