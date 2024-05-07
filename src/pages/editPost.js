import { useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Editor from '../Editor';
const EditPost = () => {
    const { id } = useParams()
    const [title, setTitle] = useState('');
    const [summery, setSummery] = useState('');
    const [content, setContent] = useState('');
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:4000/posts/${id}`)
            .then(respone => {
                respone.json().then(postInfo => {
                    setTitle(postInfo.title);
                    setContent(postInfo.content);
                    setSummery(postInfo.summery)
                })
            })
    }, [])

    const handleUpdate = async (event) => {
        event.preventDefault();
        const requestdata = {
            id: id,
            title: title,
            summery: summery,
            content: content
        };
        const response = await fetch('http://localhost:4000/user/post', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestdata),
            credentials: 'include'
        });
        if (response.ok) {
            setRedirect(!redirect)
        } else {
            alert("failed to edit post")
        }

    }
    if (redirect) {
        return <Navigate to={`/post/${id}`} />
    }
    return (
        <form onSubmit={handleUpdate}>
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
            <Editor onChange={setContent} value={content} />
            <button style={{ 'marginTop': '5px' }}>Update</button>
        </form>
    )
}
export default EditPost