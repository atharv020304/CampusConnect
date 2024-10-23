// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchUser } from "../store/slices/userSlice.js";
// import { Link } from 'react-router-dom';
// import "./Profile.css"; // You can create this CSS file for styling

// const Profile = () => {
//     const dispatch = useDispatch();
//     const { user, loading, error } = useSelector((state) => state.user);

//     useEffect(() => {
//         dispatch(fetchUser());
//     }, [dispatch]);

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error}</div>;

//     return (
//         <div className="profile-container">
//             <h1>User Profile</h1>
//             {user && (
//                 <div className="profile-info">
//                     <h2>{user.name}</h2>
//                     <p>Email: {user.email}</p>
//                     <p>Username: {user.username}</p>
//                     {/* Add more user fields if available */}
//                 </div>
//             )}
            
//             <div className="profile-links">
//                 <Link to={`/user/${user._id}/posts`} className="profile-link">View My Posts</Link>
//                 <Link to={`/user/${user._id}/questions`} className="profile-link">View My Questions</Link>
//             </div>
//         </div>
//     );
// };

// export default Profile;

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchUser, addConnection, removeConnection, fetchConnections } from "../store/slices/userSlice.js";
// import { Link } from 'react-router-dom';
// import "./Profile.css"; // Assuming you have a CSS file for styling

// const Profile = () => {
//     const dispatch = useDispatch();
    
//     // Use default values to avoid accessing undefined properties
//     const { user = {}, loading, error, connections = [] } = useSelector((state) => state.user || {});
//     const currentUserId = useSelector((state) => state.auth?.user?._id) || null; // Handle undefined auth state

//     useEffect(() => {
//         dispatch(fetchUser());
//         dispatch(fetchConnections());
//     }, [dispatch]);

//     const isConnected = user && currentUserId && user.connections?.includes(currentUserId);

//     const handleConnect = () => {
//         if (user && currentUserId && currentUserId !== user._id) {
//             dispatch(addConnection(user._id));
//         }
//     };

//     const handleDisconnect = () => {
//         if (user && currentUserId && currentUserId !== user._id) {
//             dispatch(removeConnection(user._id));
//         }
//     };

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error}</div>;

//     return (
//         <div className="profile-container">
//             <h1>User Profile</h1>
//             {user ? (
//                 <div className="profile-info">
//                     <h2>{user.name || "N/A"}</h2>
//                     <p>Email: {user.email || "N/A"}</p>
//                     <p>Username: {user.name || "N/A"}</p>
//                     <p>Connections: {user.connections ? user.connections.length : 0}</p>
//                 </div>
//             ) : (
//                 <div>No user data available</div>
//             )}

//             <div className="profile-links">
//                 <Link to={`/user/${user._id}/posts`} className="profile-link">View My Posts</Link>
//                 <Link to={`/user/${user._id}/questions`} className="profile-link">View My Questions</Link>
//                 <Link to={`/user/${user._id}/connections`} className="profile-link">View My Connections</Link>
//             </div>

//             {user && currentUserId !== user._id && (
//                 <>
//                     {!isConnected ? (
//                         <button className="connect-button" onClick={handleConnect}>
//                             Connect
//                         </button>
//                     ) : (
//                         <button className="disconnect-button" onClick={handleDisconnect}>
//                             Disconnect
//                         </button>
//                     )}
//                 </>
//             )}
//         </div>
//     );
// };

// export default Profile;

// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchUser, addConnection, removeConnection, fetchConnections, fetchUserPosts } from "../store/slices/userSlice.js";
// import { Link } from 'react-router-dom';
// import Post from './Post.js'; // Assuming you have a Post component to display each post
// import "./Profile.css"; // Assuming you have a CSS file for styling

// const Profile = () => {
//     const dispatch = useDispatch();
//     const [showPosts, setShowPosts] = useState(false); // State to manage post visibility

//     // Destructure necessary values from Redux store
//     const { user = {}, loading, error, connections = [], userPosts = [] } = useSelector((state) => state.user || {});
//     const currentUserId = useSelector((state) => state.auth?.user?._id) || null; // Handle undefined auth state

//     // Fetch user and connections on component mount
//     useEffect(() => {
//         dispatch(fetchUser());
//         dispatch(fetchConnections());
//     }, [dispatch]);

//     const isConnected = user && currentUserId && user.connections?.includes(currentUserId);

//     // Handle connection logic
//     const handleConnect = () => {
//         if (user && currentUserId && currentUserId !== user._id) {
//             dispatch(addConnection(user._id));
//         }
//     };

//     const handleDisconnect = () => {
//         if (user && currentUserId && currentUserId !== user._id) {
//             dispatch(removeConnection(user._id));
//         }
//     };

//     // Fetch posts when clicking "View My Posts"
//     const handleShowPosts = () => {
//         setShowPosts(true); // Set state to show posts
//         if (user && user._id) {
//             dispatch(fetchUserPosts(user._id)); // Fetch user posts when showing posts
//         }
//     };

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error}</div>;

//     return (
//         <div className="profile-container">
//             <h1>User Profile</h1>
//             {user ? (
//                 <div className="profile-info">
//                     <h2>{user.name || "N/A"}</h2>
//                     <p>Email: {user.email || "N/A"}</p>
//                     <p>Username: {user.name || "N/A"}</p>
//                     <p>Connections: {user.connections ? user.connections.length : 0}</p>
//                 </div>
//             ) : (
//                 <div>No user data available</div>
//             )}

//             {/* Links Section */}
//             <div className="profile-links">
//                 <ul>
//                     <li>
//                         <Link to="#" onClick={handleShowPosts} className="profile-link">View My Posts</Link>
//                     </li>
//                     <li>
//                         <Link to={`/user/${user._id}/questions`} className="profile-link">View My Questions</Link>
//                     </li>
//                     <li>
//                         <Link to={`/user/${user._id}/connections`} className="profile-link">View My Connections</Link>
//                     </li>
//                 </ul>
//             </div>

//             {showPosts && (
//                 <div className="posts-section">
//                     <h3>My Posts</h3>
//                     {userPosts.length > 0 ? (
//                         userPosts.map((post) => (
//                             <Post
//                                 key={post._id} // Ensure that `post._id` is a unique identifier for each post
//                                 author={post.author.name} // Change to `post.author.name` if it's an object
//                                 content={post.content}
//                                 image={post.image}
//                                 comments={post.comments}
//                                 postedOn={post.postedOn}
//                             />
//                         ))
//                     ) : (
//                         <p>No posts available.</p>
//                     )}
//                 </div>
//             )}

//             {user && currentUserId !== user._id && (
//                 <>
//                     {!isConnected ? (
//                         <button className="connect-button" onClick={handleConnect}>
//                             Connect
//                         </button>
//                     ) : (
//                         <button className="disconnect-button" onClick={handleDisconnect}>
//                             Disconnect
//                         </button>
//                     )}
//                 </>
//             )}
//         </div>
//     );
// };

// export default Profile;





//--=-=-=-=-=-=-



// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchUser, addConnection, removeConnection, fetchConnections, fetchUserPosts } from "../store/slices/userSlice.js";
// import { Link } from 'react-router-dom';
// import Post from './Post'; // Component to display each post
// import "./Profile.css"; // CSS for styling

// const Profile = () => {
//     const dispatch = useDispatch();
//     const [showPosts, setShowPosts] = useState(false); // Manage visibility of posts

//     // Extract necessary state from Redux store
//     const { user = {}, loading, error, userPosts = [] } = useSelector((state) => state.user || {});
//     const currentUserId = useSelector((state) => state.auth?.user?._id) || null; // Handle undefined auth state

//     // Fetch user and connections on mount
//     useEffect(() => {
//         dispatch(fetchUser());
//         dispatch(fetchConnections());
//     }, [dispatch]);

//     // Determine if current user is connected to the profile user
//     const isConnected = user?.connections?.includes(currentUserId);

//     // Connect or disconnect logic
//     const handleConnect = () => {
//         if (user && currentUserId && currentUserId !== user._id) {
//             dispatch(addConnection(user._id));
//         }
//     };

//     const handleDisconnect = () => {
//         if (user && currentUserId && currentUserId !== user._id) {
//             dispatch(removeConnection(user._id));
//         }
//     };

//     // Fetch posts when clicking "View My Posts"
//     const handleShowPosts = () => {
//         setShowPosts(true); // Show posts section
//         if (user && user._id) {
//             dispatch(fetchUserPosts(user._id)); // Fetch user's posts
//         }
//     };

//     // Loading and error handling
//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error}</div>;

//     return (
//         <div className="profile-container">
//             <h1>User Profile</h1>
//             {user ? (
//                 <div className="profile-info">
//                     <h2>{user.name || "N/A"}</h2>
//                     <p>Email: {user.email || "N/A"}</p>
//                     <p>Username: {user.username || "N/A"}</p>
//                     <p>Connections: {user.connections ? user.connections.length : 0}</p>
//                 </div>
//             ) : (
//                 <div>No user data available</div>
//             )}

//             {/* Links Section */}
//             <div className="profile-links">
//                 <ul>
//                     <li>
//                         <Link to="#" onClick={handleShowPosts} className="profile-link">View My Posts</Link>
//                     </li>
//                     <li>
//                         <Link to={`/user/${user._id}/questions`} className="profile-link">View My Questions</Link>
//                     </li>
//                     <li>
//                         <Link to={`/user/${user._id}/connections`} className="profile-link">View My Connections</Link>
//                     </li>
//                 </ul>
//             </div>

//             {/* Posts Section */}
//             {showPosts && (
//                 <div className="posts-section">
//                     <h3>My Posts</h3>
//                     {userPosts.length > 0 ? (
//                         userPosts.map((post) => (
//                             <Post
//                                 key={post._id} // Unique identifier for each post
//                                 author={post.author.name} // Author's name
//                                 content={post.content}
//                                 image={post.image}
//                                 comments={post.comments} // Pass comments to Post component
//                                 postedOn={post.postedOn}
//                             />
//                         ))
//                     ) : (
//                         <p>No posts available.</p>
//                     )}
//                 </div>
//             )}

//             {/* Connection buttons */}
//             {/* {user && currentUserId !== user._id && (
//                 <>
//                     {!isConnected ? (
//                         <button className="connect-button" onClick={handleConnect}>
//                             Connect
//                         </button>
//                     ) : (
//                         <button className="disconnect-button" onClick={handleDisconnect}>
//                             Disconnect
//                         </button>
//                     )}
//                 </>
//             )} */}
//         </div>
//     );
// };

// export default Profile;


//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchUser, addConnection, removeConnection, fetchConnections, fetchUserPosts } from "../store/slices/userSlice.js";
// import { fetchComments } from '../store/slices/postSlice.js'; // Importing fetchComments
// import { Link } from 'react-router-dom';
// import "./Profile.css"; // CSS for styling

// const Profile = () => {
//     const dispatch = useDispatch();
//     const [showPosts, setShowPosts] = useState(false); // Manage visibility of posts

//     // Extract necessary state from Redux store
//     const { user = {}, loading, error, userPosts = [] } = useSelector((state) => state.user || {});
//     const { comments } = useSelector((state) => state.posts); // Extract comments from posts slice
//     const currentUserId = useSelector((state) => state.auth?.user?._id) || null; // Handle undefined auth state

//     // Fetch user and connections on mount
//     useEffect(() => {
//         dispatch(fetchUser());
//         dispatch(fetchConnections());
//     }, [dispatch]);

//     // Determine if current user is connected to the profile user
//     const isConnected = user?.connections?.includes(currentUserId);

//     // Connect or disconnect logic
//     const handleConnect = () => {
//         if (user && currentUserId && currentUserId !== user._id) {
//             dispatch(addConnection(user._id));
//         }
//     };

//     const handleDisconnect = () => {
//         if (user && currentUserId && currentUserId !== user._id) {
//             dispatch(removeConnection(user._id));
//         }
//     };

//     // Fetch posts when clicking "View My Posts"
//     const handleShowPosts = () => {
//         setShowPosts(true); // Show posts section
//         if (user && user._id) {
//             dispatch(fetchUserPosts(user._id)); // Fetch user's posts
//         }
//     };

//     // Fetch comments for a specific post
//     const handleFetchComments = (postId) => {
//         dispatch(fetchComments(postId)); // Fetch comments for the post
//     };

//     // Loading and error handling
//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error}</div>;

//     return (
//         <div className="profile-container">
//             <h1>User Profile</h1>
//             {user ? (
//                 <div className="profile-info">
//                     <h2>{user.name || "N/A"}</h2>
//                     <p>Email: {user.email || "N/A"}</p>
//                     <p>Username: {user.name || "N/A"}</p>
//                     <p>Connections: {user.connections ? user.connections.length : 0}</p>
//                 </div>
//             ) : (
//                 <div>No user data available</div>
//             )}

//             {/* Links Section */}
//             <div className="profile-links">
//                 <ul>
//                     <li>
//                         <Link to="#" onClick={handleShowPosts} className="profile-link">View My Posts</Link>
//                     </li>
//                     <li>
//                         <Link to={`/user/${user._id}/questions`} className="profile-link">View My Questions</Link>
//                     </li>
//                     <li>
//                         <Link to={`/user/${user._id}/connections`} className="profile-link">View My Connections</Link>
//                     </li>
//                 </ul>
//             </div>

//             {/* Posts Section */}
//             {showPosts && (
//                 <div className="posts-section">
//                     <h3>My Posts</h3>
//                     {userPosts.length > 0 ? (
//                         userPosts.map((post) => (
//                             <div key={post._id} className="post">
//                                 <h2>{post.title}</h2>
//                                 <p>{post.content}</p>
//                                 {post.image && <img src={post.image} alt={post.title} className="post-image" />}
//                                 <button onClick={() => handleFetchComments(post._id)}>Load Comments</button>
//                                 <h3>Comments:</h3>
//                                 <ul>
//                                     {comments[post._id]?.map((comment) => (
//                                         <li key={comment._id} className="comment">
//                                             {comment.content}
//                                         </li>
//                                     ))}
//                                 </ul>
//                                 <textarea placeholder="Add a comment" id={`comment-${post._id}`} className="comment-input"></textarea>
//                                 <button onClick={() => {
//                                     const commentInput = document.getElementById(`comment-${post._id}`);
//                                     if (commentInput.value.trim()) {
//                                         // Dispatch a postComment action if you have this implemented
//                                         // dispatch(postComment(post._id, { content: commentInput.value }));
//                                         commentInput.value = ''; // Clear the textarea after submission
//                                     }
//                                 }} className="comment-submit-btn">
//                                     Submit Comment
//                                 </button>
//                             </div>
//                         ))
//                     ) : (
//                         <p>No posts available.</p>
//                     )}
//                 </div>
//             )}

//             {/* Connection buttons */}
//             {/* Uncomment if you want to allow connection/disconnection */}
//             {user && currentUserId !== user._id && (
//                 <>
//                     {!isConnected ? (
//                         <button className="connect-button" onClick={handleConnect}>
//                             Connect
//                         </button>
//                     ) : (
//                         <button className="disconnect-button" onClick={handleDisconnect}>
//                             Disconnect
//                         </button>
//                     )}
//                 </>
//             )}
//         </div>
//     );
// };

// export default Profile;


///^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, addConnection, removeConnection, fetchConnections, fetchUserPosts } from "../store/slices/userSlice.js";
import { fetchComments, deletePost, updatePost } from '../store/slices/postSlice.js'; // Importing deletePost and updatePost
import { Link } from 'react-router-dom';
import "./Profile.css"; // CSS for styling

const Profile = () => {
    const dispatch = useDispatch();
    const [showPosts, setShowPosts] = useState(false); // Manage visibility of posts
    const [editingPostId, setEditingPostId] = useState(null); // Track the post being edited
    const [editContent, setEditContent] = useState(''); // Track the new content for editing

    // Extract necessary state from Redux store
    const { user = {}, loading, error, userPosts = [] } = useSelector((state) => state.user || {});
    const { comments } = useSelector((state) => state.posts); // Extract comments from posts slice
    const currentUserId = useSelector((state) => state.auth?.user?._id) || null; // Handle undefined auth state

    // Fetch user and connections on mount
    useEffect(() => {
        dispatch(fetchUser());
        dispatch(fetchConnections());
    }, [dispatch]);


    useEffect(() => {
    
        if (userPosts.length) {
           
        }
    }, [userPosts]); 
    
    
    // Determine if current user is connected to the profile user
    const isConnected = user?.connections?.includes(currentUserId);

    // Connect or disconnect logic
    const handleConnect = () => {
        if (user && currentUserId && currentUserId !== user._id) {
            dispatch(addConnection(user._id));
        }
    };

    const handleDisconnect = () => {
        if (user && currentUserId && currentUserId !== user._id) {
            dispatch(removeConnection(user._id));
        }
    };

    // Fetch posts when clicking "View My Posts"
    const handleShowPosts = () => {
        setShowPosts(true); // Show posts section
        if (user && user._id) {
            dispatch(fetchUserPosts(user._id)); // Fetch user's posts
        }
    };

    // Fetch comments for a specific post
    const handleFetchComments = (postId) => {
        dispatch(fetchComments(postId)); // Fetch comments for the post
    };

    // Handle deleting a post
    const handleDeletePost = (postId) => {
        dispatch(deletePost(postId)); // Dispatch deletePost action
    };

    // Start editing a post
    const handleEditPost = (post) => {
        setEditingPostId(post._id); // Set the ID of the post being edited
        setEditContent(post.content); // Set the current content for editing
    };

    // Submit the edited post
    const handleUpdatePost = () => {
        if (editingPostId && editContent.trim()) {
            dispatch(updatePost(editingPostId, { content: editContent }));
            setEditingPostId(null); // Clear editing state after update
            setEditContent(''); // Clear input
        }
    };

    // Loading and error handling
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="profile-container">
            <h1>User Profile</h1>
            {user ? (
                <div className="profile-info">
                    <h2>{user.name || "N/A"}</h2>
                    <p>Email: {user.email || "N/A"}</p>
                    <p>Username: {user.name || "N/A"}</p>
                    <p>Connections: {user.connections ? user.connections.length : 0}</p>
                </div>
            ) : (
                <div>No user data available</div>
            )}

            {/* Links Section */}
            <div className="profile-links">
                <ul>
                    <li>
                        <Link to="#" onClick={handleShowPosts} className="profile-link">View My Posts</Link>
                    </li>
                    <li>
                        <Link to={`/user/${user._id}/questions`} className="profile-link">View My Questions</Link>
                    </li>
                    <li>
                        <Link to={`/user/${user._id}/connections`} className="profile-link">View My Connections</Link>
                    </li>
                </ul>
            </div>

            {/* Posts Section */}
            {showPosts && (
                <div className="posts-section">
                    <h3>My Posts</h3>
                    {userPosts.length > 0 ? (
                        userPosts.map((post) => (
                            <div key={post._id} className="post">
                                {editingPostId === post._id ? (
                                    <>
                                        <textarea 
                                            value={editContent} 
                                            onChange={(e) => setEditContent(e.target.value)} 
                                            className="edit-input"
                                        />
                                        <button onClick={handleUpdatePost} className="update-btn">Update Post</button>
                                        <button onClick={() => setEditingPostId(null)} className="cancel-btn">Cancel</button>
                                    </>
                                ) : (
                                    <>
                                        <h2>{post.title}</h2>
                                        <p>{post.content}</p>
                                        {post.image && <img src={post.image} alt={post.title} className="post-image" />}
                                        <button onClick={() => handleFetchComments(post._id)}>Load Comments</button>
                                        <button onClick={() => handleEditPost(post)} className="edit-btn">Edit Post</button>
                                        <button onClick={() => handleDeletePost(post._id)} className="delete-btn">Delete Post</button>
                                    </>
                                )}
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
                                    if (commentInput.value.trim()) {
                                        // Dispatch a postComment action if you have this implemented
                                        // dispatch(postComment(post._id, { content: commentInput.value }));
                                        commentInput.value = ''; // Clear the textarea after submission
                                    }
                                }} className="comment-submit-btn">
                                    Submit Comment
                                </button>
                            </div>
                        ))
                    ) : (
                        <p>No posts available.</p>
                    )}
                </div>
            )}

            {/* Connection buttons */}
            {user && currentUserId !== user._id && (
                <>
                    {!isConnected ? (
                        <button className="connect-button" onClick={handleConnect}>
                            Connect
                        </button>
                    ) : (
                        <button className="disconnect-button" onClick={handleDisconnect}>
                            Disconnect
                        </button>
                    )}
                </>
            )}
        </div>
    );
};

export default Profile;
