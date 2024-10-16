import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import Home from "./components/Home.js";
import Profile from "./components/Profile.jsx";
import Layout from "./components/Layout.js";
import "./App.css";
import Posts from "./components/Posts.js";
import Questions from "./components/Questions.js";
import Create from "./components/Create.js";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
        {
          path: "/posts",
          element: <Posts />,
        },
        {
          path: "/questions",
          element: <Questions />,
        },
        {
          path: "/create",
          element: <Create />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
