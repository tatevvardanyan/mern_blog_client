import { useEffect, useState } from "react";
import style from "./style.module.css";
import UserIndex from "../../pages/userIndex";

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUser()
    }, [])
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
    }
    if (users.length === 0) return 'users not found'
    return (
        <div className={style.row}>
            {users.length > 0 && users.map((elm, index) => {
                return <UserIndex key={index} {...elm} />
            })}
        </div >
    )
}
export default Users