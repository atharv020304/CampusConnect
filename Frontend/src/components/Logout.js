import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../store/slices/userSlice.js";


const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    
    dispatch(logoutUser());

    
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    
    return () => clearTimeout(timer);
  }, [dispatch, navigate]);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>User logged out successfully</h2>
      <p>Redirecting to home page...</p>
    </div>
  );
};

export default Logout;
