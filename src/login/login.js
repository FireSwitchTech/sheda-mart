import React from 'react'
import './Style.css'

function login(){
 return(
     <div>
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap">LOG IN</button>
     
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">LOG  IN</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
            
            
		  <div class="form-group">
            
             <input type="text" class="form-control" placeholder="E-mail"/>
		  </div>
		  <div class="form-group">
            
		  <input type="text" class="form-control" placeholder="Password"/>
       </div>
       <div class="yu">
	   <div class="form-group form-check">
		<input type="checkbox" class="form-check-input" id="exampleCheck1"/>
        <label class="form-check-label" for="exampleCheck1">Remember me</label>
        <p>Forgot your Password?</p>
           </div>
			<button type="submit" class="button">CREATE ACCOUNT</button>
	  
				<p>OR</p>
				<button type="submit" class="btn1">CONNECT WITH FACEBOOK</button>
				<p>New to Sheda Mart?</p>
				<p class=
                </div>
        </form>
      </div>
    </div>
  </div>
</div>
</div>

)
}

export default login