

import React, { useEffect, useState } from 'react';
import './Post.css'; 
import { useSelector, useDispatch } from 'react-redux'; 
import { fetchComments } from '../store/slices/postSlice.js';

const Post = ({ postId, author, content, image, comments, postedOn }) => {
    const [commentDetails, setCommentDetails] = useState([]); 
    const dispatch = useDispatch(); 

    
    const users = useSelector((state) => state.user.users || []); 

    useEffect(() => {
        
        if (postId) {
            dispatch(fetchComments(postId));
        }
    }, [postId, dispatch]); 

    useEffect(() => {
        
        const fetchCommentDetails = () => {
            if (comments) {
                const details = comments.map(comment => {
                    const user = users.find(u => u._id === comment.user); 
                    return {
                        _id: comment._id, 
                        content: comment.content,
                        username: user ? user.name : "Unknown User" 
                    };
                });
                setCommentDetails(details);
            }
        };

        fetchCommentDetails();
    }, [comments, users]); 

    return (
        <div className="post">
            <h2>{author}</h2> 
            <p>{content}</p> 
            {image && <img src={image} alt={content} className="post-image" />} 
            <p>Posted on: {new Date(postedOn).toLocaleDateString()}</p> 

            <h3>Comments:</h3>
            {commentDetails.length > 0 ? (
                <ul>
                    {commentDetails.map((comment) => (
                        <li key={comment._id}>{comment.name}: {comment.content}</li> 
                    ))}
                </ul>
            ) : (
                <p>No comments yet.</p>
            )}
        </div>
    );
};

export default Post;



