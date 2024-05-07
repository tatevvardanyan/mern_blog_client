import { Link, useNavigate } from "react-router-dom"
import style from "./style.module.css"
import { useContext, useEffect } from "react"
import { UserContext } from "../../UserContext"

const Header = () => {
    const { userInfo, setUserInfo } = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(() => {
        fetchProfile()
    }, []);

    const fetchProfile = () => {
        fetch('http://localhost:4000/profile', {
            credentials: 'include'
        })
            .then(response => {
                response.json().then(userInfo => {
                    setUserInfo(userInfo)

                })
            })
    }

    const logOut = () => {
        fetch('http://localhost:4000/logout', {
            method: 'Post',
            credentials: 'include'
        });
        setUserInfo(null);
        navigate("/")
    }
    const username = userInfo?.username;
    const auth = userInfo?.isAuth;
    const user = userInfo?.role === 0 ? true : false;
    const admin = userInfo?.role === 1 ? true : false
    return (
        <header>
            <Link to="/" className={style.logo}>Paraqar News</Link>
            <nav>
                {username && auth && user && (
                    <>
                        <Link to="/create">Add Post</Link>
                        <Link to="/about">About</Link>
                        <a onClick={logOut}>Logout</a>
                    </>
                )
                }
                {
                    username && auth && admin && (
                        <>
                            <Link to="/users">Users</Link>
                            <Link to="/about">About</Link>
                            <a onClick={logOut}>Logout</a>

                        </>
                    )
                }
                {!username && !auth && (
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