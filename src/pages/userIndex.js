import { useNavigate } from "react-router-dom";

const UserIndex = ({ _id, fullName, username }) => {
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
    }
    return (
        <div className={"user_row"}>
            <div className={"texts"}>
                <p>{fullName}</p>
                <h4>{username}</h4>
            </div>
            <div className={"icon"} onClick={deleteUser}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </div>
        </div>
    )
}
export default UserIndex