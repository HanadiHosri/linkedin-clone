import "./style.css";
import { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Signup from "./components/Signup";
import Signin from "./components/Signin";

const Authentication = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(false);
    const [credentials, setCredentials] = useState({email: "", password: ""});
    const [error, setError] = useState("");

    return (
        <Signin />
    )
}

export default Authentication;