import { Link } from "react-router-dom";
import "./_components.css";

export default function Comment({ image, user, content, postedOn }) {
  return (
    <div className="comment">
      <div className="comment-top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="comment-user">
            <div>{image && <img src={image} alt=""></img>}</div>
            <h2>{user}</h2>
          </div>
        </Link>
        <p className="comment-postedOn">{postedOn}</p>
      </div>
      <p className="comment-content">{content}</p>
    </div>
  );
}
