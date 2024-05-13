import { useState } from "react";
import { Navigate } from "react-router-dom";
import style from "./style.module.css"


const RegisterPage = () => {
    const [fullName, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

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
        } else {
            setRedirect(!redirect)
        }
    };
    if (redirect) {
        return <Navigate to={"/login"} />
    }
    return (
        <form className={style.register} onSubmit={handelSubmit}>
            <h1>Register</h1>
            <input
                required
                type="text"
                placeholder="ամբողջական անուն"
                value={fullName}
                onChange={(e) => setFullname(e.target.value)} />
            <input
                required
                type="text"
                placeholder="@օգտանուն"
                value={username}
                pattern="^@.*$"//start with @
                onChange={(e) => setUsername(e.target.value)} />
            <p className={style.topass}>Օգտանունը պետք է սկսվի @ սիմվոլով</p>
            <input
                required
                type="password"
                placeholder="գաղտնաբառ"//don't repeat anything
                value={password}
                pattern="^(?=.*[a-z])(?=.*[0-9]).{5,8}$"
                onChange={(e) => setPassword(e.target.value)} />
            <p className={style.topass}>Գաղտնաբառը պետք է պարունակի փոքրատառ, թիվ,
                և բաղկացած լինի 5~8 սիմվոլ</p>
            <button>Register</button>
        </form>
    )
}
export default RegisterPage