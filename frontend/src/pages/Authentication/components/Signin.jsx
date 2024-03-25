import React, {useState} from "react";
import "../style.css";
import axios from "axios";

const Signin = () => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });

    return (
        <div className="page">
            <div>
                <header>
                    <div><p>logo</p></div>
                </header>
                <div className="form-container flex column center">
                    <form className="form">
                        <div>
                            <h1>Sign in</h1>
                            <p>Stay updated in your professional world</p>
                        </div>
                        <div className="flex column">
                            <label htmlFor="email">Email</label>
                            <input 
                            type="text" 
                            placeholder="Email" 
                            onChange={(e) => {
                                setCredentials({
                                    ...credentials,
                                    email: e.target.value,
                                });
                            }}
                            />
                        </div>
                        <div className="flex column">
                            <label htmlFor="password">Password</label>
                            <input 
                            type="password"
                            placeholder="**********"
                            onChange={(e) => {
                                setCredentials({
                                    ...credentials,
                                    password: e.target.value,
                                });
                            }}
                            />
                        </div>
                        <div>
                            <p>Forgot password?</p>
                        </div>
                        
                        <button
                            onClick={async () => {
                                try {
                                    const {email, password, type} = credentials;
                                    const formData = new FormData();
                                    formData.append('email', email);
                                    formData.append('password', password);

                                    const response = await axios.post (
                                        "http://localhost/linkedin-clone/backend/authentication/signin.php",
                                        formData,
                                    );
                                    console.log(response.data);
                                } catch (error){
                                    console.error(error)
                                    }
                                }}
                        >Sign in</button>

                        <p>New to LinkedIn? <span>Join now</span></p>

                    </form>
                </div>
            </div>

        </div>
    );
} 

export default Signin;