import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState();
  const [createType, setCreateType] = useState("Post");

  const handleTitleChange = (e) => {
    e.preventDefault();

    setTitle(e.target.value);
  };

  const handleImageChange = (e) => {
    e.preventDefault();

    try {
      setImage(URL.createObjectURL(e.target.files[0]));
    } catch (e) {
      console.log("error on image upload");
    }
  };

  const handleCreateType = (e) => {
    e.preventDefault();

    setCreateType(e.target.textContent);
  };

  const handleRemoveImage = (e) => {
    e.preventDefault();

    setImage();
  };

  const navigate = useNavigate();

  const handlePost = async (e) => {
    e.preventDefault();
    // try {
    //   await login(inputs);
    navigate("/home");
    // } catch (err) {
    //   setErr(err.response.data);
    // }
  };

  return (
    <div>
      <form className="create">
        <div className="create-type">
          <button className="create-post-btn" onClick={handleCreateType}>
            Post
          </button>
          <button onClick={handleCreateType}>Question</button>
        </div>
        <textarea
          className="create-content"
          rows="2"
          cols="1000"
          placeholder={createType === "Post" ? "Content" : "Question"}
          name="title"
          onChange={handleTitleChange}
        />
        <div className="create-image">
          <div className="create-image-btns">
            <label for="create-image-upload">
              {image ? "Change Image" : "Add Image"}
            </label>
            {image && <button onClick={handleRemoveImage}>Remove Image</button>}
          </div>
          <input
            id="create-image-upload"
            name="image"
            type="file"
            onChange={handleImageChange}
            inputProps={{ accept: "image/*" }}
          />
          {image && <img src={image} alt="" />}
        </div>
        <button onClick={handlePost} className="create-submit">
          {createType === "Post" ? "Create Post" : "Create Question"}
        </button>
      </form>
    </div>
  );
};

export default Create;
