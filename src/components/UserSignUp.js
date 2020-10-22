import React, { useState } from 'react'
import { Redirect ,useHistory} from "react-router-dom";


function UserSignUp(props) {
    let history = useHistory();
    const [isLoggedIn, setStatus] = useState(false)

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
    async function formSubmit(e) {
        e.preventDefault();
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
            .then(result => {
                if (result === "posted succesfully") {
                    // setStatus(true)
                    history.push("/")
                }
                
                alert(result);
            })
            .catch(error => console.log(error));




    }


// isLoggedIn ? (<Redirect to="/" />) : 

    return (
        <div className="sign">
            <h1>Sign up</h1>

            <form method = "POST">
                <p style={{ fontSize: 25 }}>Email:</p>

                <input type="Email" name="email" onChange={handleSubmit} />

                <br />
                <p style={{ fontSize: 25 }}>Password:</p>

                <input type="Password" name="password" onChange={handleSubmit} />
                <br />
                <br />

                <button type="submit" className="subBtn" onClick={formSubmit}>Submit</button>


            </form>

        </div>
    )
}


export default UserSignUp

