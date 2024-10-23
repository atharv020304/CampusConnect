import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from "../store/slices/postSlice.js";
import "./AddPost.css"

const AddPost = () => {
    const dispatch = useDispatch();
    const [newPostContent, setNewPostContent] = useState('');
    const [newPostImage, setNewPostImage] = useState(null); // Store the Base64 image string

    const handleCreatePost = (event) => {
        event.preventDefault();

        const postData = {
            content: newPostContent,
            image: newPostImage, // Include image (Base64 string)
        };

        // Dispatch the post data
        dispatch(createPost(postData));

        setNewPostContent(''); // Clear content after submission
        setNewPostImage(null);  // Clear image after submission
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewPostImage(reader.result); // Store Base64 string in state
            };
            reader.readAsDataURL(file); // Convert image to Base64
        }
    };

    return (
        <div>
            <h2>Create a New Post</h2>
            <form onSubmit={handleCreatePost}>
                <textarea
                    value={newPostContent}
                    onChange={(e) => setNewPostContent(e.target.value)}
                    placeholder="Post content"
                    required
                />
                <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleImageChange} // Handle image selection
                />
                <button type="submit">Create Post</button>
            </form>
        </div>
    );
};

export default AddPost;
