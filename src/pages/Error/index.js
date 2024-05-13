import style from "./style.module.css";

const Error = () => {
    return (<div className={style.err}>
        <h1>Error 404 Not Found</h1>
        <p>The page that you have requested could not be found.</p>
    </div>)
}
export default Error