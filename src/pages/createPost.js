import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Editor from '../Editor';
import 'react-quill/dist/quill.snow.css';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [summery, setSummery] = useState('');
    const [files, setFiles] = useState();;
    const [content, setContent] = useState('');
    const [redirect, setRedirect] = useState(false);

    const handleCreate = async (event) => {
        event.preventDefault();
        if (!title || !summery || !files || !content) {
            alert("please complate all fields")
            return
        }
        else {
            const data = new FormData();
            data.set('title', title);
            data.set('summery', summery);
            data.set('file', files[0]);
            data.set('content', content);
            const response = await fetch('http://localhost:4000/user/post', {
                method: "Post",
                body: data,
                credentials: 'include'
            });
            if (response.ok) {
                setRedirect(!redirect)
            } else {
                alert("failed to create post")
            }

        }

    }
    if (redirect) {
        return <Navigate to={'/'} />
    }
    return (
        <form onSubmit={handleCreate}>
            <input
                type="title"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)} />
            <input
                type="summary"
                placeholder="Summary"
                value={summery}
                onChange={(e) => setSummery(e.target.value)} />
            <input
                type="file"
                onChange={(e) => setFiles(e.target.files)} />
            <Editor value={content} onChange={setContent} />
            <button style={{ 'marginTop': '5px' }}>Create Post</button>
        </form>
    )
}
export default CreatePost