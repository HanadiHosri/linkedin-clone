import React, {useState} from "react";
import "../style.css";

const Signup = () => {
    const [credentials, setCredentials] = useState({email: "", password: "" });

    return(
        <div>
            <div>
                <header className="header">
                    <div><p>logo</p></div>
                    <h1>Make the most of your professional life</h1>
                </header>
                <div>
                    <form className="form flex column center">
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
                        

                        <button>Agree & Join</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup;