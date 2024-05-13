import { useContext, useEffect, useState } from "react";
import UserIndex from "../../pages/User/userIndex";
import { UserContext } from "../../UserContext";
import { Navigate } from "react-router-dom";
import style from "./style.module.css";

const Users = () => {
    const [users, setUsers] = useState([]);
    const { userInfo } = useContext(UserContext);

    useEffect(() => {
        getUser()
    }, []);

    const getUser = () => {
        fetch('http://localhost:4000/admin/user', {
            credentials: 'include'
        }).then(response => {
            response.json().then(user => {
                if (user.length === 0) {
                    setUsers([])
                } else {
                    setUsers(user)
                }
            })
        })
    };

    if (users.length === 0) return 'Ուպս այստեղ դեռ օգտատերեր չկան🙂։'
    if (!userInfo?.isAuth) return <Navigate to={"/"} />
    return (
        <div className={style.row}>
            {users.length > 0 && users.map((elm, index) => {
                return <UserIndex key={index} {...elm} />
            })}
        </div >
    )
}
export default Users