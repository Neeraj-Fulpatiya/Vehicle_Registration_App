// import React, { useState } from 'react'
// import { Link, Navigate, useNavigate } from "react-router-dom";

// import axios from 'axios';


// const AddUser = () => {
// //   const [user,setUser]=useState([
// //     name="",
// //     username="",
// //     email=""
// //   ])
// let navigate=useNavigate();
// const [user, setUser] = useState({
//     name: "",
//     username: "",
//     email: "",
//   });

//   const {name , username,email}=user;
//   const onInputChange=(e)=>{
//     setUser({...user,[e.target.name]:e.target.value})
//   }
//   const onSubmit = async (e) => {
//     e.preventDefault();
//     await axios.post("http://localhost:8080/user", user);
//     navigate("/");
//   };
//     return (
//         <div className="container">
//           <div className="row">
//             <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
//               <h2 className="text-center m-4">Register User</h2>
    
//               <form onSubmit={(e) => onSubmit(e)}>
//               {/* <form > */}
//                 <div className="mb-3">
//                   <label htmlFor="Name" className="form-label">
//                     Name
//                   </label>
//                   <input
//                     type={"text"}
//                     className="form-control"
//                     placeholder="Enter your name"
//                     name="name"
//                     value={name}
//                     onChange={(e) => onInputChange(e)}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="Username" className="form-label">
//                     Username
//                   </label>
//                   <input
//                     type={"text"}
//                     className="form-control"
//                     placeholder="Enter your username"
//                     name="username"
//                     value={username}
//                     onChange={(e) => onInputChange(e)}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="Email" className="form-label">
//                     E-mail
//                   </label>
//                   <input
//                     type={"text"}
//                     className="form-control"
//                     placeholder="Enter your e-mail address"
//                     name="email"
//                     value={email}
//                     onChange={(e) => onInputChange(e)}
//                   />
//                 </div>
//                 <button type="submit" className="btn btn-outline-primary">
//                   Submit
//                 </button>
//                 <Link className="btn btn-outline-danger mx-2" to="/">
//                   Cancel
//                 </Link>
//               </form>
//             </div>
//           </div>
//         </div>
//       );
// }

// export default AddUser



import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const AddUser = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: ""
  });

  const [vehicle, setVehicle] = useState({
    model: "",
    type: "",
    registrationNumber: ""
  });

  const onUserChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onVehicleChange = (e) => {
    setVehicle({ ...vehicle, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      // Step 1: Create the user
      const userRes = await axios.post("http://localhost:8080/user", user);
      const userId = userRes.data.id;

      // Step 2: Attach vehicle to user
      if (userId && vehicle.model && vehicle.type && vehicle.registrationNumber) {
        await axios.post(`http://localhost:8080/vehicle/user/${userId}`, vehicle);
      }

      navigate("/");
    } catch (err) {
      console.error("Error creating user or vehicle", err);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User & Vehicle</h2>

          <form onSubmit={onSubmit}>
            <h5>User Details</h5>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter name"
                name="name"
                value={user.name}
                onChange={onUserChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter username"
                name="username"
                value={user.username}
                onChange={onUserChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">E-mail</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter e-mail"
                name="email"
                value={user.email}
                onChange={onUserChange}
              />
            </div>

            <h5 className="mt-4">Vehicle Details</h5>
            <div className="mb-3">
              <label className="form-label">Model</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter model"
                name="model"
                value={vehicle.model}
                onChange={onVehicleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Type</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter type"
                name="type"
                value={vehicle.type}
                onChange={onVehicleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Registration Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter registration number"
                name="registrationNumber"
                value={vehicle.registrationNumber}
                onChange={onVehicleChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-primary">Submit</button>
            <Link className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
