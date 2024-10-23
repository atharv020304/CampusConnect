import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserPosts } from "../store/slices/userSlice.js"; // Adjust the path according to your project structure

const UserPosts = ({ userId }) => {
    const dispatch = useDispatch();
    const { loading, posts, error } = useSelector((state) => state.posts); // Adjust the selector according to your state structure

    useEffect(() => {
        if (userId) {
            dispatch(fetchUserPosts(userId));
        }
    }, [dispatch, userId]);

    return (
        <div>
            <h2>User Posts</h2>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {posts && posts.length > 0 ? (
                <ul>
                    {posts.map((post) => (
                        <li key={post._id}>
                            <h3>{post.title}</h3>
                            <p>{post.content}</p>
                            <small>By: {post.author.name}</small>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No posts available for this user.</p>
            )}
        </div>
    );
};

export default UserPosts;
