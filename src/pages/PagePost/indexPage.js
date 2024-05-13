import { useEffect, useState } from "react";
import Post from "../../components/Post";

const IndexPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPost()
    }, []);

    const getPost = async () => {
        await fetch('http://localhost:4000/posts').then(response => {
            response.json().then(post => {
                if (post.length === 0) {
                    setPosts([])
                } else {
                    setPosts(post)
                }
            })
        })
    };

    if (posts.length === 0) return 'Ուպս այստեղ դեռ նորություններ չկան։Նորություններ ավելացնելու համար նախ պետք է գրանցվել🙂։'
    return (
        <div>
            {posts.length > 0 && posts?.map((post, index) => {
                return <Post {...post} key={index} />
            })}
        </div>
    )
}
export default IndexPage