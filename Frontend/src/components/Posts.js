
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchPosts,
    postComment,
    fetchComments,
    clearAllPostErrors,
} from "../store/slices/postSlice.js";
import { getUserPosts } from '../store/slices/userSlice.js';
import "./Posts.css";


const Posts = () => {
    const dispatch = useDispatch();
    const { posts, loading, error, message, comments } = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch(fetchPosts());
        dispatch(clearAllPostErrors()); 
    }, [dispatch]);

    const handleCommentSubmit = (postId, comment) => {
        if (comment.trim()) {
            dispatch(postComment(postId, { content: comment }));
            dispatch(fetchComments(postId)); 
        }
    };

    const handleFetchComments = (postId) => {
        dispatch(fetchComments(postId));
        console.log(comments);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (message) return <div>{message}</div>; 

    return (
        <div className="posts-container">
            <h1 className='posts-header'>Posts</h1>
            {posts.map((post) => (
                <div key={post._id} className="post">
                    <p>Posted by: <strong>{post.author.name}</strong></p>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    {post.image && <img src={post.image} alt={post.title} className="post-image" />}
                    <button onClick={() => handleFetchComments(post._id)}>Load Comments</button>
                    <h3>Comments:</h3>
                    <ul className='comment-list'>
                        {comments[post._id]?.map((comment) => (
                            <li key={comment._id} className="comment">
                                <strong>{comment.user.name}</strong>: {comment.content}
                            </li>
                        ))}
                    </ul>
                    <textarea placeholder="Add a comment" id={`comment-${post._id}`} className="comment-input"></textarea>
                    <button onClick={() => {
                        const commentInput = document.getElementById(`comment-${post._id}`);
                        handleCommentSubmit(post._id, commentInput.value);
                        commentInput.value = ''; 
                    }} className="comment-submit-btn">
                        Submit Comment
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Posts;
