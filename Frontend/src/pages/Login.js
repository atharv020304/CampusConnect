import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // try {
    //   await login(inputs);
    navigate("/");
    // } catch (err) {
    //   setErr(err.response.data);
    // }
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleLogin}>Login</button>
      </form>

      <p>Don't have an account?</p>
      <Link to="/register">
        <button>Register</button>
      </Link>
    </div>
  );
};

export default Login;
