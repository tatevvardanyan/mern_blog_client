import { useCallback, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import style from "./style.module.css";
import paraqar from "../../icon/paraqar.png";

const Header = () => {
    const { userInfo, setUserInfo } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        fetchProfile()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchProfile = useCallback(async () => {
        await fetch('http://localhost:4000/profile', {
            credentials: 'include'
        })
            .then(response => {
                response.json().then(userInfo => {
                    setUserInfo(userInfo)
                })
            })
    }, [setUserInfo]);

    const logOut = () => {
        alert("հաջող ելք 🙂")
        fetch('http://localhost:4000/logout', {
            method: 'Post',
            credentials: 'include'
        });
        setUserInfo(null);
        navigate("/")
    };

    const username = userInfo?.username;
    const auth = userInfo?.isAuth;
    const user = userInfo?.role === 0 ? true : false;
    const admin = userInfo?.role === 1 ? true : false;
    const verify = userInfo?.v === 1 ? true : false;
    
    return (
        <header>
            <Link to="/" >
                <div className={style.logo}>
                    <img src={paraqar} alt="news" />
                </div>
            </Link>
            <nav>
                {username && auth && user && verify && (
                    <>
                        <Link to={auth ? "/create" : "/"}>Add</Link>
                        <Link to="/about">About </Link>
                        <button onClick={logOut}>Logout</button>
                    </>
                )
                }
                {
                    username && auth && admin && verify && (
                        <>
                            <Link to={auth ? "/users" : "/"}>Users</Link>
                            <Link to="/about">About </Link>
                            <button onClick={logOut}>Logout</button>

                        </>
                    )
                }
                {!username && !auth && !verify && (
                    <>
                        <Link to='/login'>Login</Link>
                        <Link to="/about">About</Link>
                    </>
                )
                }
            </nav>
        </header >
    )
}
export default Header