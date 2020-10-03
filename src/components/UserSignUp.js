import React from 'react'
import { Link } from "react-router-dom";


function UserSignUp(props) {

     
    return (
        <div className = "sign">
            <h1>Sign up</h1>
            
            <form onSubmit = {null}>
              <p style={{fontSize:25}}>Email:</p>
              
              <input type="Email" name = "email"/>  
              
              <br/>
              <p style={{fontSize:25}}>Password:</p>
              
              <input type="Password" name = "password"/>
              <br/>
              <br/>
              <Link to="/" style={{ textDecoration: "none" }}> 
              <button type="Submit" className="subBtn">Submit</button>
              </Link>
             
            </form>

        </div>
    )
}


export default UserSignUp

