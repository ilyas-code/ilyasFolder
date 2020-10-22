import React  from 'react'
import { Link } from "react-router-dom";


function UserSignUp(props) {
    
    
    const userInfo = {
        email: null,
        password: null,

    }
   
    // on change form handling function
    function handleSubmit(e) {

        const value = e.target.value;
        const type = e.target.type;

        if (type === "email") {
            userInfo.email = value;
        } else {
            userInfo.password = value;
        }

    }
    // Posting User data to the database server
    function formSubmit() {

        console.log(userInfo);
        // posting data to database server
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(userInfo);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };


        fetch("http://localhost:4000/PostUser", requestOptions)
            .then(response => response.text())
            .then(result => alert(result))
            .catch(error => alert('error', error));
    }

    


    return (
        <div className="sign">
            <h1>Sign up</h1>

            <form>
                <p style={{ fontSize: 25 }}>Email:</p>

                <input type="Email" name="email" onChange={handleSubmit} />

                <br />
                <p style={{ fontSize: 25 }}>Password:</p>

                <input type="Password" name="password" onChange={handleSubmit} />
                <br />
                <br />
                <Link to="/" style={{ textDecoration: "none" }} replace >
                    <button type="submit" className="subBtn" onClick={formSubmit}>Submit</button>
                </Link>

            </form>

        </div>
    )
}


export default UserSignUp

