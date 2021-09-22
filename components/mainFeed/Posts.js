import { useCollection } from "react-firebase-hooks/firestore";
import Post from './Post';
import {db} from '../../firebase'

function Posts() {
    const [uploadedPosts, loading, error]= useCollection(
        db.collection('posts').orderBy("timestamp","desc")
    )
    console.log("uploaded posts");
    console.log(uploadedPosts)
    return (
        <div className="">
            {
                uploadedPosts?.docs.map((post,key)=>(
                    <Post
                        key={key}
                        id={post.id}
                        name={post.data().name}
                        message={post.data().message}
                        email = {post.data().email}
                        timestamp = {post.data().timestamp}
                        image={post.data().image}
                        postImage = {post.data().postImage}

                    />
                ))
            }
        </div>
    )
}

export default Posts
