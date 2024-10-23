

// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//     fetchPosts,
//     createPost,
//     postComment,
//     fetchComments,
//     clearAllPostErrors,
// } from "../store/slices/postSlice.js";
// import "./Posts.css"

// const Posts = () => {
//     const dispatch = useDispatch();
//     const { posts, loading, error, message, comments } = useSelector((state) => state.posts);
//     const [newPostContent, setNewPostContent] = useState('');
//     const [newPostImage, setNewPostImage] = useState(null);

//     useEffect(() => {
//         dispatch(fetchPosts());
//         dispatch(clearAllPostErrors()); // Clear errors on component mount
//     }, [dispatch]);

//     const handleCommentSubmit = (postId, comment) => {
//         if (comment.trim()) {
//             dispatch(postComment(postId, { content: comment }));
//             dispatch(fetchComments(postId)); // Fetch comments after posting a new comment
//         }
//     };

//     const handleCreatePost = (event) => {
//         event.preventDefault();

//         const postData = {
//             content: newPostContent,
//             image: newPostImage,
//         };

//         dispatch(createPost(postData));
//         setNewPostContent(''); // Clear content after submission
//         setNewPostImage(null); // Clear image after submission
//     };

//     const handleFetchComments = (postId) => {
//         dispatch(fetchComments(postId));
//     };

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>{error}</div>;
//     if (message) return <div>{message}</div>; // Show success messages

//     return (
//         <div>
//             <h1>Posts</h1>
//             <form onSubmit={handleCreatePost}>
//                 <textarea 
//                     value={newPostContent}
//                     onChange={(e) => setNewPostContent(e.target.value)}
//                     placeholder="Post content"
//                     required 
//                 />
//                 <input 
//                     type="file" 
//                     accept="image/*" 
//                     onChange={(e) => setNewPostImage(e.target.files[0])} 
//                 />
//                 <button type="submit">Create Post</button>
//             </form>
//             {posts.map((post) => (
//                 <div key={post._id}>
//                     <h2>{post.title}</h2>
//                     <p>{post.content}</p>
//                     {post.image && <img src={post.image} alt={post.title} width={200} />}
//                     <button onClick={() => handleFetchComments(post._id)}>Load Comments</button>
//                     <h3>Comments:</h3>
//                     <ul>
//                         {comments[post._id]?.map((comment) => (
//                             <li key={comment._id}>
//                                 {comment.content}
//                             </li>
//                         ))}
//                     </ul>
//                     <textarea placeholder="Add a comment" id={`comment-${post._id}`}></textarea>
//                     <button onClick={() => {
//                         const commentInput = document.getElementById(`comment-${post._id}`);
//                         handleCommentSubmit(post._id, commentInput.value);
//                         commentInput.value = ''; // Clear the textarea after submission
//                     }}>
//                         Submit Comment
//                     </button>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Posts;




import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchPosts,
    postComment,
    fetchComments,
    clearAllPostErrors,
} from "../store/slices/postSlice.js";
import "./Posts.css";

const Posts = () => {
    const dispatch = useDispatch();
    const { posts, loading, error, message, comments } = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch(fetchPosts());
        dispatch(clearAllPostErrors()); // Clear errors on component mount
    }, [dispatch]);

    const handleCommentSubmit = (postId, comment) => {
        if (comment.trim()) {
            dispatch(postComment(postId, { content: comment }));
            dispatch(fetchComments(postId)); // Fetch comments after posting a new comment
        }
    };

    const handleFetchComments = (postId) => {
        dispatch(fetchComments(postId));
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (message) return <div>{message}</div>; // Show success messages

    return (
        <div className="posts-container">
            <h1>Posts</h1>
            {posts.map((post) => (
                <div key={post._id} className="post">
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    {post.image && <img src={post.image} alt={post.title} className="post-image" />}
                    <button onClick={() => handleFetchComments(post._id)}>Load Comments</button>
                    <h3>Comments:</h3>
                    <ul>
                        {comments[post._id]?.map((comment) => (
                            <li key={comment._id} className="comment">
                                {comment.content}
                            </li>
                        ))}
                    </ul>
                    <textarea placeholder="Add a comment" id={`comment-${post._id}`} className="comment-input"></textarea>
                    <button onClick={() => {
                        const commentInput = document.getElementById(`comment-${post._id}`);
                        handleCommentSubmit(post._id, commentInput.value);
                        commentInput.value = ''; // Clear the textarea after submission
                    }} className="comment-submit-btn">
                        Submit Comment
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Posts;
