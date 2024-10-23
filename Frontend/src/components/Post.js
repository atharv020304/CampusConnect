// import { Link } from "react-router-dom";
// import Comment from "./Comment.js";
// import { useState } from "react";
// import "./Post.css";

// const Post = ({ author, content, image, comments, postedOn }) => {
//     const [showComments, setShowComments] = useState(false);
    
//     return (
//         <div className="post">
//             <div className="post-top">
//                 <div className="post-author">
//                     <Link to={`/profile/${author}`}>
//                         <h2>{author}</h2>
//                     </Link>
//                 </div>
//                 <div className="post-postedOn">{postedOn}</div>
//             </div>
//             <img src={image} alt="" className="post-img"></img>
//             <div className="post-content">{content}</div>

//             <div className={"post-bottom " + (showComments && "post-bottom-comm")}>
//                 <button
//                     className="post-comments-btn"
//                     onClick={() => setShowComments(!showComments)}>
//                     Comments
//                 </button>
//             </div>
//             {showComments && (
//                 <div>
//                     {comments.map((comment) => (
//                         <Comment
//                             key={comment._id} // Add a unique key here
//                             content={comment.content}
//                         />
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Post;



// import React, { useEffect, useState } from 'react';
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux"; 
// import Comment from "./Comment.js";
// import { fetchComments, postComment, clearAllPostErrors } from "../store/slices/postSlice.js"; // Ensure these are imported
// import "./Post.css";

// const Post = ({ author, content, image, postedOn, postId }) => {
//     const [showComments, setShowComments] = useState(false); // State to control comment visibility
//     const [newComment, setNewComment] = useState(''); // State to hold new comment input
//     const dispatch = useDispatch();

//     // Select comments, loading status, and error from the Redux store
//     const comments = useSelector((state) => state.posts.comments[postId] || []);
//     const loadingComments = useSelector((state) => state.posts.loading);
//     const errorComments = useSelector((state) => state.posts.error);

//     // Fetch comments when the component mounts or showComments changes
//     useEffect(() => {
//         if (showComments && postId) {
//             dispatch(fetchComments(postId));
//         }
//     }, [dispatch, postId, showComments]);

//     // Handle the submission of a new comment
//     const handleCommentSubmit = () => {
//         if (newComment.trim()) {
//             dispatch(postComment(postId, { content: newComment }));
//             setNewComment(''); // Clear input after submission
//             dispatch(fetchComments(postId)); // Re-fetch comments to include the new one
//         }
//     };

//     return (
//         <div className="post">
//             <div className="post-top">
//                 <div className="post-author">
//                     <Link to={`/profile/${author}`}>
//                         <h2>{author}</h2>
//                     </Link>
//                 </div>
//                 <div className="post-postedOn">{postedOn}</div>
//             </div>
//             {image && <img src={image} alt="Post" className="post-img" />}
//             <div className="post-content">{content}</div>

//             <div className={"post-bottom " + (showComments ? "post-bottom-comm" : "")}>
//                 <button
//                     className="post-comments-btn"
//                     onClick={() => setShowComments((prev) => !prev)} // Toggle comment visibility
//                 >
//                     {showComments ? "Hide Comments" : "Show Comments"}
//                 </button>
//             </div>

//             {showComments && (
//                 <div className="comments-section">
//                     {loadingComments ? (
//                         <div>Loading comments...</div> // Loading state
//                     ) : errorComments ? (
//                         <div>Error: {errorComments}</div> // Error state
//                     ) : comments.length > 0 ? (
//                         comments.map((comment) => (
//                             <Comment
//                                 key={comment._id} // Ensure a unique key for each comment
//                                 content={comment.content}
//                                 user={comment.user.name} // Display the user's name
//                                 postedOn={comment.postedOn} // Display when the comment was posted
//                             />
//                         ))
//                     ) : (
//                         <div>No comments yet.</div> // Message if no comments are present
//                     )}
//                     {/* Comment submission area */}
//                     <div className="comment-input-area">
//                         <textarea
//                             placeholder="Add a comment"
//                             value={newComment}
//                             onChange={(e) => setNewComment(e.target.value)}
//                             className="comment-input"
//                         ></textarea>
//                         <button onClick={handleCommentSubmit} className="comment-submit-btn">
//                             Submit Comment
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Post;



// import React, { useEffect, useState } from 'react';
// import './Post.css'; // Optional: Add your own styles for the Post component
// import { useSelector } from 'react-redux'; // Import useSelector to access user data
// import { fetchComments } from '../store/slices/postSlice.js';

// const Post = ({ author, content, image, comments, postedOn }) => {
//     const [commentDetails, setCommentDetails] = useState([]); // State to store fetched comment details

//     // Fetch comment details (like username) if necessary
//     const users = useSelector((state) => state.user.users || []); // Assuming you have a users list in your Redux state

//     useEffect(() => {
//         // Map through comments to find user details
//         const fetchCommentDetails = () => {
//             if (comments) {
//                 const details = comments.map(comment => {
//                     const user = users.find(u => u._id === comment.user); // Find user by ID
//                     return {
//                         content: comment.content,
//                         username: user ? user.name : "Unknown User" // Default to "Unknown User" if user is not found
//                     };
//                 });
//                 setCommentDetails(details);
//             }
//             fetchComments();
//         };

//         fetchCommentDetails();
//     }, [comments, users]);

//     return (
//         <div className="post">
//             <h2>{author}</h2> {/* Display the author's name */}
//             <p>{content}</p> {/* Display the post content */}
//             {image && <img src={image} alt={content} className="post-image" />} {/* Conditionally render the image */}
//             <p>Posted on: {new Date(postedOn).toLocaleDateString()}</p> {/* Display the date of posting */}

//             <h3>Comments:</h3>
//             {commentDetails.length > 0 ? (
//                 <ul>
//                     {commentDetails.map((comment, index) => (
//                         <li key={index}>{comment.name}: {comment.content}</li> // Display each comment with username
//                     ))}
//                 </ul>
//             ) : (
//                 <p>No comments yet.</p>
//             )}
//         </div>
//     );
// };

// export default Post;



import React, { useEffect, useState } from 'react';
import './Post.css'; // Optional: Add your own styles for the Post component
import { useSelector, useDispatch } from 'react-redux'; // Import useSelector and useDispatch
import { fetchComments } from '../store/slices/postSlice.js';

const Post = ({ postId, author, content, image, comments, postedOn }) => {
    const [commentDetails, setCommentDetails] = useState([]); // State to store fetched comment details
    const dispatch = useDispatch(); // Initialize dispatch to fetch comments

    // Access the users list from Redux state
    const users = useSelector((state) => state.user.users || []); // Assuming you have a users list in your Redux state

    useEffect(() => {
        // Fetch comments for the post if needed
        if (postId) {
            dispatch(fetchComments(postId));
        }
    }, [postId, dispatch]); // Run this effect when postId changes

    useEffect(() => {
        // Fetch comment details and associate with users
        const fetchCommentDetails = () => {
            if (comments) {
                const details = comments.map(comment => {
                    const user = users.find(u => u._id === comment.user); // Find user by ID
                    return {
                        _id: comment._id, // Keep the comment ID
                        content: comment.content,
                        username: user ? user.name : "Unknown User" // Default to "Unknown User" if user is not found
                    };
                });
                setCommentDetails(details);
            }
        };

        fetchCommentDetails();
    }, [comments, users]); // This runs when comments or users change

    return (
        <div className="post">
            <h2>{author}</h2> {/* Display the author's name */}
            <p>{content}</p> {/* Display the post content */}
            {image && <img src={image} alt={content} className="post-image" />} {/* Conditionally render the image */}
            <p>Posted on: {new Date(postedOn).toLocaleDateString()}</p> {/* Display the date of posting */}

            <h3>Comments:</h3>
            {commentDetails.length > 0 ? (
                <ul>
                    {commentDetails.map((comment) => (
                        <li key={comment._id}>{comment.name}: {comment.content}</li> // Display each comment with username
                    ))}
                </ul>
            ) : (
                <p>No comments yet.</p>
            )}
        </div>
    );
};

export default Post;
