import { Link } from "react-router-dom";
import Comment from "./Comment.js";
import { useState } from "react";
import "./Post.css";

const Post = ({ author, content, image, comments, postedOn }) => {
  const [showCommments, setShowComments] = useState(false);
  return (
    <div className="post">
      <div className="post-top">
        <div className="post-author">
          <Link to={`/profile/${author}`}>
            <h2>{author}</h2>
          </Link>
        </div>
        <div className="post-postedOn">{postedOn}</div>
      </div>
      <img src={image} alt="" className="post-img"></img>
      <div className="post-content">{content}</div>

      <div className={"post-bottom " + (showCommments && "post-bottom-comm")}>
        <button
          className="post-comments-btn"
          onClick={() => setShowComments(!showCommments)}>
          Comments
        </button>
      </div>
      {showCommments && (
        <div>
          {comments.map((comment) => (
            <Comment
              user={comment.user}
              postedOn={comment.postedOn}
              image={comment.image}
              content={comment.content}></Comment>
          ))}
        </div>
      )}
    </div>
  );
};

export default Post;
