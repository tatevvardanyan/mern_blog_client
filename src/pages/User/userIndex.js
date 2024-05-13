import { useNavigate } from "react-router-dom";
import style from "./style.module.css";

const UserIndex = ({ _id, fullName, username, v }) => {
    const navigate = useNavigate();
    
    const deleteUser = async () => {
        const response = await fetch(`http://localhost:4000/admin/userdelete/${_id}`, {
            method: 'Delete',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        })
        if (response.ok) {
            navigate("/")
        }
    };

    const editUser = async () => {
        const response = await fetch(`http://localhost:4000/admin/useredit/${_id}`, {
            method: "Put",
            headers: { 'Content-Type': 'application/json' },
            credentials: "include"
        });
        if (response.ok) {
            navigate("/")
        }
    }
    return (
        <div className={style.user_row}>
            <p>{fullName}</p>
            <h6>{username}</h6>
            <div className={style.icon} >
                <div className={style.one} onClick={deleteUser}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>

                {!v && <div className={style.two} onClick={editUser}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>}
            </div>
        </div>
    )
}
export default UserIndex