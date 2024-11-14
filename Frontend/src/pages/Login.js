import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login, clearAlluserErrors } from "../store/slices/userSlice.js";
import "./Login.css"

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: ""
  });

  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  
  const { isAuth, error, loading } = useSelector((state) => state.user);

  useEffect(() => {
    if (error) {
      toast.error(error);  
      dispatch(clearAlluserErrors());  
    }

    if (isAuth) {
      toast.success("Login successful!");  
      navigateTo("/");
    }
  }, [dispatch, error, isAuth, navigateTo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password || !formData.role) {
      toast.error("All fields are required");
      return;
    }
  
    console.log("FormData being sent from component:", formData);
  
    dispatch(login(formData))
      .then((response) => {
        if (response.error) {
          toast.error("Login failed. Please check your credentials.");
        } else {

          toast.success("Login successful!");
          navigateTo("/"); 
        }
      })
      .catch((error) => {

        toast.error("An error occurred while processing your request.");
        console.error("Login error:", error);
      });
  };
  
  return (
    <div className="login-container">
      <ToastContainer />
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Role:</label>
          <select name="role" value={formData.role} onChange={handleChange} required>
            <option value="">Select Role</option>
            <option value="student">Student</option>
            <option value="alumni">Alumni</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;


