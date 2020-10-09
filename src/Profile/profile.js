import React, { Component } from 'react';
class Profile extends Component {
    render() {
        return (
 <form encType="multipart/form-data" onSubmit={this.handleSubmit}>
     <div class ="form-group">
         <label>First Name</label>
         <input type="text" class="form-control" />
     </div>
     <div class ="form-group">
         <label>Last Name</label>
         <input type="text" class="form-control" />
     </div>
  <div class="form-group">
    <label>Email address</label>
    <input type="email" class="form-control" />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label>Password</label>
    <input type="password" class="form-control" />
  </div>
  <div class="form-group">
      <label>Upload Image</label>
      <input type="file" class="form-control" />
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        )
    }
    
} 
export default Profile;