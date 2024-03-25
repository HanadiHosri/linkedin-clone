import React, {useState} from "react";

const Signup = () => {
    const [credentials, setCredentials] = useState({email: "", password: "" });

    return(
        <div>
            <div>
                <header>
                    <div><p>logo</p></div>
                    <h1>Make the most of your professional life</h1>
                </header>
                <div>
                    <form>
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
                        <button>Agree & Join</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup;