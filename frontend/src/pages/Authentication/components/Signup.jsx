import React, {useState} from "react";
import "../style.css";
import axios from "axios";

const Signup = () => {
    const [credentials, setCredentials] = useState({email: "", password: "" });

    return(
        <div className="page">
            <div>
                <header className="header">
                    <div><p>logo</p></div>
                    <h1>Make the most of your professional life</h1>
                </header>
                <div className="form-container flex column center">
                    <form className="form">
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
                        <div className="flex column">
                            <label htmlFor="type">Type</label>
                            <select
                            name="type"
                            onChange={(e) => {
                                setCredentials({
                                    ...credentials,
                                    type: e.target.value,
                                });
                            }}
                            >
                                <option value="user">User</option>
                                <option value="company">Company</option>
                            </select>
                        </div>
                        

                        <button
                            onClick={async () => {
                                try {
                                    const {email, password, type} = credentials;
                                    const formData = new FormData();
                                    formData.append('email', email);
                                    formData.append('password', password);
                                    formData.append('type', type);

                                    const response = await axios.post (
                                        "http://localhost/linkedin-clone/backend/authentication/signup.php",
                                        formData,
                                    );
                                    console.log(response.data);
                                } catch (error){
                                    console.error(error)
                                    }
                                }}
                        >Agree & Join</button>

                        <p>Already on LinkedIn <span>Sign in</span></p>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup;