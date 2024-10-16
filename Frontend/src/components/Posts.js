import Post from "./Post.js";
import "./_components.css";

const posts = [
  {
    id: 1,
    author: "Alice",
    content: "This is my first post! Excited to share my thoughts.",
    image: "https://via.placeholder.com/300x150",
    postedOn: "2024-10-15 10:30 AM",
    comments: [
      {
        user: "Bob",
        content: "Welcome to the platform!",
        image: "https://via.placeholder.com/50",
        postedOn: "2024-10-15 11:00 AM",
      },
      {
        user: "Charlie",
        content: "Looking forward to your future posts!",
        image: "https://via.placeholder.com/50",
        postedOn: "2024-10-15 11:30 AM",
      },
    ],
  },
  {
    id: 2,
    author: "David",
    content: "Just finished reading a great book on React.",
    image: "https://via.placeholder.com/300x150",
    postedOn: "2024-10-14 2:15 PM",
    comments: [
      {
        user: "Eve",
        content: "Which book did you read?",
        image: "https://via.placeholder.com/50",
        postedOn: "2024-10-14 3:00 PM",
      },
      {
        user: "Frank",
        content: "React is awesome! Any recommendations?",
        image: "https://via.placeholder.com/50",
        postedOn: "2024-10-14 3:30 PM",
      },
    ],
  },
  {
    id: 3,
    author: "Grace",
    content: "I love coding! It’s so much fun.",
    image: "https://via.placeholder.com/300x150",
    postedOn: "2024-10-13 1:45 PM",
    comments: [
      {
        user: "Hank",
        content: "What are you working on right now?",
        image: "https://via.placeholder.com/50",
        postedOn: "2024-10-13 2:00 PM",
      },
      {
        user: "Ivy",
        content: "Keep it up! You're doing great!",
        image: "https://via.placeholder.com/50",
        postedOn: "2024-10-13 2:30 PM",
      },
    ],
  },
];

const Posts = () => {
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post
          key={post.id}
          author={post.author}
          content={post.content}
          image={post.image}
          postedOn={post.postedOn}
          comments={post.comments}
        />
      ))}
    </div>
  );
};

export default Posts;
