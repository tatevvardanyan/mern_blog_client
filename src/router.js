import { Route, Routes } from "react-router-dom";
import Layout from "./Layout"
import IndexPage from "./pages/indexPage";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import CreatePost from "./pages/createPost";
import PostPage from "./pages/postPage";
import EditPost from "./pages/editPost";
import Users from "./components/Users";
import About from "./components/About";

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
            <Route path="/about" element={<About/>}/>
        </Route>
    </Routes>
}
export default MyRouter