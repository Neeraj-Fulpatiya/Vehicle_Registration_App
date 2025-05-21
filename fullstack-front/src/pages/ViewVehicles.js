import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const ViewVehicles = () => {
  const { userId } = useParams();
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/user/${userId}/vehicles`);
        setVehicles(res.data);
      } catch (error) {
        console.error("Error fetching vehicles:", error);
      }
    };

    fetchVehicles();
  }, [userId]);

  return (
    <div className="container">
      <h2 className="my-4">Registered Vehicles</h2>
      {vehicles.length === 0 ? (
        <p>No vehicles found for this user.</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Model</th>
              <th>Type</th>
              <th>Registration Number</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((vehicle, index) => (
              <tr key={index}>
                <td>{vehicle.model}</td>
                <td>{vehicle.type}</td>
                <td>{vehicle.registrationNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <Link className="btn btn-secondary mt-3" to="/">Back to Home</Link>
    </div>
  );
};

export default ViewVehicles;
