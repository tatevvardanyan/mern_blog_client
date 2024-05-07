import { useState } from "react";
import { Navigate } from "react-router-dom";

const RegisterPage = () => {
    const [fullName, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect,setRedirect]=useState(false);

    const handelSubmit = async (event) => {
        event.preventDefault();
        const respones = await fetch('http://localhost:4000/register', {
            method: 'Post',
            body: JSON.stringify({ fullName, username, password }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (respones.status !== 200) {
            alert("registration faild.Try again 😔");
            setFullname("");
            setPassword("");
            setUsername("")
        } else{
            setRedirect(!redirect)
        }
    }
    if(redirect){
        return <Navigate to={"/login"}/>
    }
    return (
        <form className="register" onSubmit={handelSubmit}>
            <h1>Register</h1>
            <input
                type="text"
                placeholder="fullname"
                value={fullName}
                onChange={(e) => setFullname(e.target.value)} />
            <input
                type="text"
                placeholder="@username"
                value={username}
                onChange={(e) => setUsername(e.target.value)} />
            <input
                type="password"
                placeholder="password(5+ more)"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
            <button>Register</button>
        </form>
    )
}
export default RegisterPage