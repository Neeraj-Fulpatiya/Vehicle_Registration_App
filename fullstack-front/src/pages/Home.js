


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// export default function Home() {
//   const [users, setUsers] = useState([]);
//   const [vehicles, setVehicles] = useState({});
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     loadUsers();
//   }, []);

//   const loadUsers = async () => {
//     const usersRes = await axios.get("http://localhost:8080/users");
//     setUsers(usersRes.data);

//     // Fetch vehicle list for each user
//     const vehicleData = {};
//     await Promise.all(
//       usersRes.data.map(async (user) => {
//         const vehicleRes = await axios.get(
//           `http://localhost:8080/user/${user.id}/vehicles`
//         );
//         vehicleData[user.id] = vehicleRes.data;
//       })
//     );
//     setVehicles(vehicleData);
//   };

//   const deleteUser = async (id) => {
//     await axios.delete(`http://localhost:8080/user/${id}`);
//     loadUsers();
//   };

//   // Filter users based on registration number
//   const filteredUsers = users.filter((user) =>
//     vehicles[user.id]?.some((v) =>
//       v.registrationNumber.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//   );

//   return (
//     <div className="container">
//       <div className="py-4">
//         <div className="mb-3">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Search by registration number"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>

//         <table className="table border shadow">
//           <thead>
//             <tr>
//               <th>S.N</th>
//               <th>Name</th>
//               <th>Username</th>
//               <th>Email</th>
//               <th>Vehicle Reg. Numbers</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {(searchTerm ? filteredUsers : users).map((user, index) => (
//               <tr key={user.id}>
//                 <th scope="row">{index + 1}</th>
//                 <td>{user.name}</td>
//                 <td>{user.username}</td>
//                 <td>{user.email}</td>
//                 <td>
//                   {vehicles[user.id]?.map((v) => v.registrationNumber).join(", ") ||
//                     "No Vehicles"}
//                 </td>
//                 <td>
//                   <Link className="btn btn-primary mx-2" to={`/viewuser/${user.id}`}>
//                     View
//                   </Link>
//                   <Link
//                     className="btn btn-outline-primary mx-2"
//                     to={`/edituser/${user.id}`}
//                   >
//                     Edit
//                   </Link>
//                   <button
//                     className="btn btn-danger mx-2"
//                     onClick={() => deleteUser(user.id)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }





// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link, useParams } from "react-router-dom";

// export default function Home() {
//   const [users, setUsers] = useState([]);
//   const [vehicles, setVehicles] = useState({});

//   const { id } = useParams();

//   useEffect(() => {
//     loadUsers();
//   }, []);

//   const loadUsers = async () => {
//     const result = await axios.get("http://localhost:8080/users");
//     setUsers(result.data);

//     // Fetch vehicles for all users
//     const vehicleData = {};
//     for (let user of result.data) {
//       try {
//         const res = await axios.get(`http://localhost:8080/user/${user.id}/vehicles`);
//         vehicleData[user.id] = res.data;
//       } catch (err) {
//         vehicleData[user.id] = [];
//       }
//     }
//     setVehicles(vehicleData);
//   };

//   const deleteUser = async (id) => {
//     await axios.delete(`http://localhost:8080/user/${id}`);
//     loadUsers();
//   };

//   return (
//     <div className="container">
//       <div className="py-4">
//         <h2 className="text-center mb-4">User List</h2>
//         <table className="table border shadow">
//           <thead>
//             <tr>
//               <th scope="col">S.N</th>
//               <th scope="col">Name</th>
//               <th scope="col">Username</th>
//               <th scope="col">Email</th>
//               <th scope="col">Reg. No.</th>
//               <th scope="col">Vehicles</th>
//               <th scope="col">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user, index) => {
//               const userVehicles = vehicles[user.id] || [];
//               const firstRegNo = userVehicles.length > 0 ? userVehicles[0].registrationNumber : "N/A";

//               return (
//                 <tr key={user.id}>
//                   <th scope="row">{index + 1}</th>
//                   <td>{user.name}</td>
//                   <td>{user.username}</td>
//                   <td>{user.email}</td>
//                   <td>{firstRegNo}</td>
//                   <td>
//                     <Link to={`/vehicles/${user.id}`} className="btn btn-info btn-sm">
//                       View Vehicles
//                     </Link>
//                   </td>
//                   <td>
//                     <Link className="btn btn-primary mx-1" to={`/viewuser/${user.id}`}>
//                       View
//                     </Link>
//                     <Link className="btn btn-outline-primary mx-1" to={`/edituser/${user.id}`}>
//                       Edit
//                     </Link>
//                     <button className="btn btn-danger mx-1" onClick={() => deleteUser(user.id)}>
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }







import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    loadUsers();
  };

  // Filter users based on vehicle registration number
  const filteredUsers = users.filter((user) =>
    user.vehicles?.some((vehicle) =>
      vehicle.registrationNumber
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="container">
      <div className="py-4">
        <h2 className="mb-4">Users List</h2>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by registration number"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Vehicle Reg No.</th>
              <th scope="col">Action</th>
              <th scope="col">View Vehicle</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={user.id}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  {user.vehicles && user.vehicles.length > 0
                    ? user.vehicles.map((vehicle, idx) => (
                        <div key={idx}>{vehicle.registrationNumber}</div>
                      ))
                    : "N/A"}
                </td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewuser/${user.id}`}
                  >
                    View User
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/edituser/${user.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <Link
                    className="btn btn-secondary"
                    to={`/vehicles/${user.id}`}
                  >
                    View Vehicle
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
