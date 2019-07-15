import React, { Component } from'react';
import logo from './App.css';
import './App.css';

class App extends Component {
  render() {
    return ( 
    <div className="wrapper">
      <div className="form-wrapper">
       <h1>Create Account</h1>
       <form onSubmit={this.handleSubmit} novalidate>
         <div className="firstName">
           <label  htmlFor="firstName">First Name</label>
           <input
            type="text"
            className="" 
            placeholder="First Name" 
            type="text"
            name="firstName"
            noValidate
            onChange={this.handleChange}
            />
         </div>
         <div className="lastName">
           <label  htmlFor="lastName">Last Name</label>
           <input
            type="text"
            className="" 
            placeholder="Last Name" 
            type="text"
            name="firstName"
            noValidate
            onChange={this.handleChange}
            />
          </div>
         
         <div className="Age">
           <label  htmlFor="Age">Age</label>
           <input
            type="text"
            className="" 
            placeholder="Age" 
            type="text"
            name="Age"
            noValidate
            onChange={this.handleChange}
            />
          </div>
          
         <div className="address">
           <label  htmlFor="address">Address</label>
           <input
            type="text"
            className="" 
            placeholder="Address" 
            type="text"
            name="adress"
            noValidate
            onChange={this.handleChange}
            />
            </div>

            <div className="gender">
           <label  htmlFor="gender">Gender</label>
           <input
            type="text"
            className="" 
            placeholder="Gender" 
            type="text"
            name="gender"
            noValidate
            onChange={this.handleChange}
            />
            </div>

            <div className="DOB">
           <label  htmlFor="DOB">DOB</label>
           <input
            type="text"
            className="" 
            placeholder="DOB" 
            type="text"
            name="DOB"
            noValidate
            onChange={this.handleChange}
            />
            </div>
            <div className="createAccount">
               <button type="submit">Create Account</button>
            </div>
       </form>
      </div>
     </div>
    ); 
}
}

export default App;
