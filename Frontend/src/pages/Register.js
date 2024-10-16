// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Register = () => {
//   const [inputs, setInputs] = useState({
//     username: "",
//     email: "",
//     password: "",
//     name: "",
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     try {
//       //   await axios.post("http://localhost:8800/api/auth/register", inputs);
//       navigate("/login");
//     } catch (err) {}
//   };

//   return (
//     <div>
//       <form>
//         <input
//           type="text"
//           placeholder="Name"
//           name="name"
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           placeholder="Username"
//           name="username"
//           onChange={handleChange}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           name="email"
//           onChange={handleChange}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           name="password"
//           onChange={handleChange}
//         />
//         <button onClick={handleRegister}>Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;



//temop



// import { useState } from "react";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { register } from "./userSlice"; // Import the register action
// import { clearAlluserErrors } from "../store/slices/userSlice";
// import toast from "react-toastify"

// const Register = () => {
//   const [email ,setEmail] = useState("");
//   const [password ,setPassword] = useState("");
//   const [role,setRole] = useState("");
//   const [graduationYear, setGradudationYear] =useState("");
//   const [name,setName] = useState("")
//   const [skills,setSkills] = useState("")
  
//   const {loading, isAuth, error, message} = useSelector(
//     (state) => state.user
//   )
  

//   const dispatch = useDispatch();
//   const navigateTo = useNavigate();

//   const handleRegister= (e)=>{
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("email", email);
//     formData.append("password", password);
//     formData.append("role",role);
//     formData.append("graduationYear",graduationYear);
//     formData.append("name",name);
//     formData.append("skills",skills);

//     dispatch(register(formData))
//   };

//   useEffect(() => {
//     if(error){
//         toast.error(error);
//         dispatch(clearAlluserErrors());
//     }
//     if(isAuth){
//       navigateTo("/");
//     }

//   },[dispatch,error,loading,isAuth,message])

//   return (
//     <div>
//       <form onSubmit={handleRegister}>
//         <input
//           type="email"
//           placeholder="Email"
//           name="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           name="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
        
//         <input
//         type = "text"
//         placeholder = "Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         />

//         <input
//         type = "text"
//         placeholder="garduation year"
//         value={graduationYear}
//         onChange={(e) => setGradudationYear(e.target.value)}
//         />

//         <select
//           name="role"
//           onChange={(e)=> setRole(e.target.value)}
//           value={role}
//           required
//         >
//           <option value="student">Student</option>
//           <option value="alumni">Alumni</option>
        
//         </select>


//         <button type="submit" disabled={loading}>
//           Register
//         </button>
//         {error && <p style={{ color: "red" }}>{error}</p>}
//         {message && <p style={{ color: "green" }}>{message}</p>}
//       </form>
//     </div>
//   );
// };

// export default Register;

















// ----------------------------
//temp2

// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { register, clearAlluserErrors } from "../store/slices/userSlice.js"
// import { toast } from "react-toastify"; // Correct toast import
// import "react-toastify/dist/ReactToastify.css"; // Import toast CSS to enable notifications

// const Register = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState(""); // Set default role to "student"
//   const [graduationYear, setGraduationYear] = useState(""); // Fixed typo in state name
//   const [name, setName] = useState("");
//   const [skills, setSkills] = useState(""); // Store single skill input

//   const { loading, isAuth, error, message } = useSelector((state) => state.user);
//   const dispatch = useDispatch();
//   const navigateTo = useNavigate();

//   const handleRegister = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("email", email);
//     formData.append("password", password);
//     formData.append("role", role);
//     formData.append("graduationYear", graduationYear);
//     formData.append("name", name);
    

//     dispatch(register(formData));
//   };

//   useEffect(() => {
//     if (error) {
//       toast.error(error); // Display error toast
//       dispatch(clearAlluserErrors());
//     }
//     if (isAuth) {
//       navigateTo("/"); // Navigate to home page upon successful registration
//     }
//   }, [dispatch, error, isAuth, navigateTo]);

//   return (
//     <div>
//       <form onSubmit={handleRegister}>
//         <input
//           type="email"
//           placeholder="Email"
//           name="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           name="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Graduation Year"
//           value={graduationYear}
//           onChange={(e) => setGraduationYear(e.target.value)} // Fixed typo
//           required
//         />
//         <select
//           name="role"
//           onChange={(e) => setRole(e.target.value)}
//           value={role}
//           required
//         >
//           <option value="student">Student</option>
//           <option value="alumni">Alumni</option>
//         </select>


//         <button type="submit" disabled={loading}>
//           {loading ? "Registering..." : "Register"}
//         </button>

//         {error && <p style={{ color: "red" }}>{error}</p>}
//         {message && <p style={{ color: "green" }}>{message}</p>}
//       </form>
//     </div>
//   );
// };

// export default Register;




//------

// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { register, clearAlluserErrors } from "../store/slices/userSlice.js";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Register = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState(""); // Initialized as an empty string
//   const [role, setRole] = useState("");
//   const [graduationYear, setGraduationYear] = useState(""); // Initialized as an empty string
//   const [name, setName] = useState("");
//   const [skills, setSkills] = useState("");

//   const { loading, isAuth, error, message } = useSelector((state) => state.user);
//   const dispatch = useDispatch();
//   const navigateTo = useNavigate();

//   const handleRegister = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("email", email);
//     formData.append("password", password);
//     formData.append("role", role);
//     formData.append("graduationYear", graduationYear);
//     formData.append("name", name);

//     const skillsArray = skills.split(',').map(skill => skill.trim());
//     formData.append("skills", JSON.stringify(skillsArray));

//     for (let [key, value] of formData.entries()) {
//       console.log(`${key}: ${value}`);
//   }

//     dispatch(register(formData));
//   };

//   useEffect(() => {
//     if (error) {
//       toast.error(error);
//       dispatch(clearAlluserErrors());
//     }
//     if (isAuth) {
//       navigateTo("/");
//     }
//   }, [dispatch, error, isAuth, navigateTo]);

//   return (
//     <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
//       <form onSubmit={handleRegister}>
//         <input
//           type="email"
//           placeholder="Email"
//           name="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "4px", border: "1px solid #ccc" , color: "black" }}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           name="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "4px", border: "1px solid #ccc",color: "black" }}
//         />
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//           style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
//         />
//         <input
//           type="text"
//           placeholder="Graduation Year"
//           value={graduationYear}
//           onChange={(e) => setGraduationYear(e.target.value)}
//           required
//           style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
//         />
//         <select
//           name="role"
//           onChange={(e) => setRole(e.target.value)}
//           value={role}
//           required
//           style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
//         >
//           <option value="student">Student</option>
//           <option value="alumni">Alumni</option>
//         </select>

//         <input
//           type="text"
//           placeholder="Enter skills separated by commas"
//           value={skills}
//           onChange={(e) => setSkills(e.target.value)}
//           style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
//         />

//         <button
//           type="submit"
//           disabled={loading}
//           style={{
//             width: "100%",
//             padding: "10px",
//             backgroundColor: "#007bff",
//             color: "white",
//             border: "none",
//             borderRadius: "4px",
//             cursor: loading ? "not-allowed" : "pointer",
//           }}
//         >
//           {loading ? "Registering..." : "Register"}
//         </button>

//         {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
//         {message && <p style={{ color: "green", marginTop: "10px" }}>{message}</p>}
//       </form>
//     </div>
//   );
// };

// export default Register;





// ---


import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../store/slices/userSlice.js";
import "react-toastify/dist/ReactToastify.css";
import './Register.css'; // Importing the CSS file

const Register = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        role: "",
        graduationYear: "",
        name: "",
        skills: [],
    });

    const [skillInput, setSkillInput] = useState(""); // Local state for skill input

    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSkillChange = (e) => {
        setSkillInput(e.target.value);
    };

    const addSkill = (e) => {
        e.preventDefault();
        if (skillInput && !formData.skills.includes(skillInput)) {
            setFormData((prevData) => ({
                ...prevData,
                skills: [...prevData.skills, skillInput],
            }));
            setSkillInput(""); // Clear the input after adding
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("FormData being sent from component:", formData);
        dispatch(register(formData));
    };

    const removeSkill = (skillToRemove) => {
        setFormData((prevData) => ({
            ...prevData,
            skills: prevData.skills.filter((skill) => skill !== skillToRemove),
        }));
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit} className="register-form">
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="form-input"
                />
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    required
                    className="form-input"
                />
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    className="form-input"
                />
                <input
                    type="text"
                    name="graduationYear"
                    value={formData.graduationYear}
                    onChange={handleChange}
                    placeholder="Graduation Year"
                    required
                    className="form-input"
                />
                <select name="role" value={formData.role} onChange={handleChange} required className="form-select">
                    <option value="">Select Role</option>
                    <option value="student">Student</option>
                    <option value="alumni">Alumni</option>
                </select>

                <div className="skill-input-container">
                    <input
                        type="text"
                        value={skillInput}
                        onChange={handleSkillChange}
                        placeholder="Add Skill"
                        className="skill-input"
                    />
                    <button onClick={addSkill} className="add-skill-button">Add Skill</button>
                </div>

                <div>
                    <h4>Skills:</h4>
                    <ul className="skills-list">
                        {formData.skills.map((skill, index) => (
                            <li key={index} className="skill-item">
                                {skill}
                                <button type="button" onClick={() => removeSkill(skill)} className="remove-skill-button">
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <button type="submit" className="submit-button">Register</button>
            </form>
        </div>
    );
};

export default Register;
