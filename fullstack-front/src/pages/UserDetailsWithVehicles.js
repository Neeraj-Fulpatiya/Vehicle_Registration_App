import React, { useEffect, useState } from "react";
import axios from "axios";

const UserDetailsWithVehicles = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    // Fetch user details
    axios.get(`http://localhost:8080/user/${userId}`)
      .then(res => setUser(res.data))
      .catch(err => console.error("User fetch error:", err));

    // Fetch user's vehicles
    axios.get(`http://localhost:8080/user/${userId}/vehicles`)
      .then(res => setVehicles(res.data))
      .catch(err => console.error("Vehicle fetch error:", err));
  }, [userId]);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h2>User Details</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>

      <h3>Vehicles</h3>
      {vehicles.length > 0 ? (
        <ul>
          {vehicles.map(vehicle => (
            <li key={vehicle.id}>
              {vehicle.model} - {vehicle.type} - {vehicle.registrationNumber}
            </li>
          ))}
        </ul>
      ) : (
        <p>No vehicles found for this user.</p>
      )}
    </div>
  );
};

export default UserDetailsWithVehicles;
