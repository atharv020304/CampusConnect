import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";  // Import toast
import "react-toastify/dist/ReactToastify.css";
import { register, clearAlluserErrors } from "../store/slices/userSlice.js";
import './Register.css';

const Register = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        role: "",
        graduationYear: "",
        name: "",
        skills: [],
    });

    const [skillInput, setSkillInput] = useState(""); 
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isAuth, error, loading, message } = useSelector((state) => state.user);

    useEffect(() => {
        if (error) {
            toast.error(error);  
            dispatch(clearAlluserErrors());  
        }

        if (isAuth) {
            navigate("/");  
        }
    }, [dispatch, error, isAuth, navigate]);

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
            setSkillInput(""); 
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

                <button type="submit" className="submit-button" disabled={loading}>
                    {loading ? "Registering..." : "Register"}
                </button>
            </form>
        </div>
    );
};

export default Register;
