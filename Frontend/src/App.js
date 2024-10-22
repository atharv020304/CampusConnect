// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Login from "./pages/Login.js";
// import Register from "./pages/Register.js";
// import Home from "./components/Home.js";
// import Profile from "./components/Profile.jsx";
// import Layout from "./components/Layout.js";
// import "./App.css";
// import Posts from "./components/Posts.js";
// import Questions from "./components/Questions.js";
// import Create from "./components/Create.js";

// function App() {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Layout />,
//       children: [
//         {
//           index: true,
//           element: <Home />,
//         },
//         {
//           path: "/profile/:id",
//           element: <Profile />,
//         },
//         {
//           path: "/posts",
//           element: <Posts />,
//         },
//         {
//           path: "/questions",
//           element: <Questions />,
//         },
//         {
//           path: "/create",
//           element: <Create />,
//         },
//       ],
//     },
//     {
//       path: "/login",
//       element: <Login />,
//     },
//     {
//       path: "/register",
//       element: <Register />,
//     },
//   ]);

//   return (
//     <div>
//       <RouterProvider router={router} />
//     </div>
//   );
// }

// export default App;






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
      </Routes>
    </Router>
  );
}

export default App;
