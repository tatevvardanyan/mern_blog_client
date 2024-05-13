import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout"
import IndexPage from "./pages/PagePost/indexPage";
import LoginPage from "./pages/Account/loginPage";
import RegisterPage from "./pages/Account/registerPage";
import CreatePost from "./pages/Post/createPost";
import PostPage from "./pages/PagePost/postPage";
import EditPost from "./pages/Post/editPost";
import Users from "./components/Users";
import About from "./components/About";
import Error from "./pages/Error";

const MyRouter = () => {
    return <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<IndexPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="create" element={<CreatePost />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/edit/:id" element={<EditPost />} />
            <Route path="/users" element={<Users />} />
            <Route path="/about" element={<About />} />
        </Route>
        <Route path="/404" element={<Error/>} />
        <Route path="/*" element={<Navigate to={"/404"} />} />
    </Routes>
}
export default MyRouter