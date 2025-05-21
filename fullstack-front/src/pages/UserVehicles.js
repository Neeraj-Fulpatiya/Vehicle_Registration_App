import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

export default function UserVehicles() {
  const [vehicles, setVehicles] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    loadVehicles();
  }, []);

  const loadVehicles = async () => {
    const res = await axios.get(`http://localhost:8080/user/${id}/vehicles`);
    setVehicles(res.data);
  };

  return (
    <div className="container mt-4">
      <h2>User's Vehicles</h2>
      <Link to="/" className="btn btn-secondary mb-3">Back to Home</Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Model</th>
            <th>Type</th>
            <th>Registration Number</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((v, i) => (
            <tr key={i}>
              <td>{v.model}</td>
              <td>{v.type}</td>
              <td>{v.registrationNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
