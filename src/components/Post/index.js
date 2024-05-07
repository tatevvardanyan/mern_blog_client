import style from "./style.module.css";
import { formatISO9075 } from 'date-fns';
import { Link } from "react-router-dom";

const Post = ({ _id, title, summery, cover, createdAt, author }) => {
    return (
        <div className={style.post}>
            <div className={style.image}>
                <Link to={`/post/${_id}`}>
                    <img src={'http://localhost:4000/uploads/' + cover} alt="news" />
                </Link>
            </div>
            <div className={style.texts}>
                <Link to={'/post/id'}>
                    <h2>{title}</h2>
                </Link>
                <p className={style.info}>
                    <a className={style.author}>{author.username}</a>
                    <time>{formatISO9075(new Date(createdAt), 'MMM d, yyyy HH:mm')}</time>
                </p>
                <p className={style.summary}>{summery}</p>
            </div>
        </div>
    )
}
export default Post