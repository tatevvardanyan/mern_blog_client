import { useContext, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { UserContext } from "../../UserContext";
import style from "./style.module.css"

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);
    const { setUserInfo } = useContext(UserContext);

    const handelLogin = async (event) => {
        event.preventDefault();
        const response = await fetch('http://localhost:4000/login', {
            method: 'Post',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        });
        if (response.ok) {
            response.json().then(userInfo => {
                setUserInfo(userInfo)
                setRedirect(!redirect);
            })
        } else {
            alert("something went wrong 😔");
            setPassword("");
            setUsername("")
        }
    }
    if (redirect) {
        return <Navigate to={"/"} />
    }
    return (
        <form className={style.login} onSubmit={handelLogin}>
            <h1>Login</h1>
            <input
                required
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)} />
            <input
                required
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
            <button>Login</button>
            <Link to='/register' className={style.toreg}>Register</Link>
        </form>
    )
}
export default LoginPage