import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './Style.css'
import Modal from 'react-bootstrap/Modal'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalBody from 'react-bootstrap/ModalBody'
import SignIn from '../signin/signin'

class Login extends Component {
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
                     <Modal show={this.props.show} onHide={this.props.hide}>
       <ModalHeader closeButton><h5>Login</h5></ModalHeader>
       <ModalBody>
       <form>
            
            
            <div class="form-group">
                  
                   <input type="email" class="form-control" placeholder="E-mail" required/>
            </div>
            <div class="form-group">
                  
            <input type="password" class="form-control" placeholder="Password" required/>
             </div>
             <div class="yu">
           <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
              <label class="form-check-label" for="exampleCheck1">Remember me</label>
              <p>Forgot your Password?</p>
                 </div>
            <button type="submit" class="button">SUBMIT</button>
              <p>New to Sheda Mart?</p>
              <Link class="me" onClick={this.showModal}>CREATE AN ACCOUNT</Link>
              <SignIn show={this.state.show} hide={this.hideModal}/>
                      </div>
              </form>
       </ModalBody>
</Modal>
               );
       }
}
 
export default Login;