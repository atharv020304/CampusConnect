import { useParams } from "react-router-dom";
import profileImg from "./profile.png";
import Posts from "./Posts.js";

const dummyUser = {
  name: "John Doe",
  email: "johndoe@example.com",
  password: "password1234",
  role: "Student",
  graduationYear: 2026,
  skills: ["JavaScript", "React", "Node.js"],
  connections: ["test", "test2", "test3"],
};

const Profile = () => {
  const params = useParams();
  console.log(params);
  return (
    <div className="profile">
      <div className="profile-top">
        <img src={profileImg} alt="" className="profile-img" />
        <div className="profile-info">
          <h1 className="profile-username">{params.id}</h1>
          <div className="profile-grad">
            <p className="profile-year">
              Graduation Year: {dummyUser.graduationYear}
            </p>
            <span className="profile-role">{dummyUser.role}</span>
          </div>
          <div className="profile-skills">
            {dummyUser.skills.map((skill) => (
              <p>{skill}</p>
            ))}
          </div>
          <div className="profile-connections">
            <p>{dummyUser.connections.length} Connections</p>
            <button>Connect</button>
          </div>
        </div>
      </div>
      <div className="profile-posts">
        <Posts />
      </div>
    </div>
  );
};

export default Profile;






// import { useParams } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { register } from "../store/slices/userSlice";
// import profileImg from "./profile.png";
// import Posts from "./Posts";

// const Profile = () => {
//   const params = useParams();
//   const dispatch = useDispatch();

//   const { user, loading, isAuth, error } = useSelector((state) => state.user);

//   // Optional: Example of triggering a registration on mount (for testing)
//   useEffect(() => {
//     if (!isAuth) {
//       // Example registration (if user isn't authenticated)
//       const sampleData = { name: "John Doe", email: "john@example.com", password: "password123" };
//       dispatch(register(sampleData));
//     }
//   }, [isAuth, dispatch]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;
//   if (!isAuth) return <p>Please log in to view the profile.</p>;

//   return (
//     <div className="profile">
//       <div className="profile-top">
//         <img src={profileImg} alt="Profile" className="profile-img" />
//         <div className="profile-info">
//           <h1 className="profile-username">{user.name}</h1>
//           <div className="profile-grad">
//             <p className="profile-year">
//               Graduation Year: {user.graduationYear || "N/A"}
//             </p>
//             <span className="profile-role">{user.role || "N/A"}</span>
//           </div>
//           <div className="profile-skills">
//             {user.skills && user.skills.length > 0 ? (
//               user.skills.map((skill, index) => <p key={index}>{skill}</p>)
//             ) : (
//               <p>No skills added yet</p>
//             )}
//           </div>
//           <div className="profile-connections">
//             <p>
//               {user.connections ? user.connections.length : 0} Connections
//             </p>
//             <button>Connect</button>
//           </div>
//         </div>
//       </div>
//       <div className="profile-posts">
//         <Posts />
//       </div>
//     </div>
//   );
// };

// export default Profile;
