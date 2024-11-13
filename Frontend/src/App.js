
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import Home from "./components/Home.js";
import Profile from "./components/Profile.jsx";
import Posts from "./components/Posts.js";
import Questions from "./components/Questions.js";
import Create from "./components/Create.js";
import Navbar from "./components/NavBar.js"; 
import "./App.css";
import AddPost from "./components/AddPost.js";
import UserPosts from "./components/UserPosts.js";
import Chat from "./components/Chat.js";


function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/create" element={<Create />} />
        <Route path="/addpost" element={<AddPost />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/personalposts" element={<UserPosts />} />
        <Route path="/logout" element={<Home />} />
        <Route path="/chat" element={<Chat />} />

      </Routes>
    </Router>
  );
}

export default App;
