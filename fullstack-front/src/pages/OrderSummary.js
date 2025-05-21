

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const OrderSummary = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const userRes = await axios.get('http://localhost:8080/users');
//         const users = userRes.data;

//         const orderData = await Promise.all(
//           users.map(async (user) => {
//             const vehicleRes = await axios.get(`http://localhost:8080/user/${user.id}/vehicles`);
//             const vehicle = vehicleRes.data[0];

//             return {
//               id: user.id,
//               name: user.name,
//               email: user.email,
//               vehicleModel: vehicle?.model || 'N/A',
//               registrationNumber: vehicle?.registrationNumber || 'N/A',
//               price: generateRandomPrice(),
//             };
//           })
//         );

//         setOrders(orderData);
//       } catch (err) {
//         console.error('Error loading order summary:', err);
//       }
//     };

//     fetchData();
//   }, []);

//   const generateRandomPrice = () => {
//     const min = 500000;
//     const max = 900000;
//     return `₹${(Math.floor(Math.random() * (max - min + 1)) + min).toLocaleString()}`;
//   };

//   return (
//     <div className="container py-4">
//       <h1 className="text-center fw-bold display-5 mb-4">Order Summary</h1>

//       <div className="table-responsive shadow-sm rounded">
//         <table className="table table-bordered table-striped text-center align-middle">
//           <thead className="bg-primary text-black">
//             <tr>
//               <th scope="col">#</th>
//               <th scope="col">User</th>
//               <th scope="col">Email</th>
//               <th scope="col">Vehicle Model</th>
//               <th scope="col">Registration No</th>
//               <th scope="col">Price</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order, index) => (
//               <tr key={order.id}>
//                 <td>{index + 1}</td>
//                 <td className="fw-semibold">{order.name}</td>
//                 <td>{order.email}</td>
//                 <td>{order.vehicleModel}</td>
//                 <td>{order.registrationNumber}</td>
//                 <td className="fw-bold text-success">{order.price}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default OrderSummary;



import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrderSummary = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRes = await axios.get('http://localhost:8080/users');
        const users = userRes.data;

        const orderData = await Promise.all(
          users.map(async (user) => {
            const vehicleRes = await axios.get(`http://localhost:8080/user/${user.id}/vehicles`);
            const vehicle = vehicleRes.data[0];

            return {
              id: user.id,
              name: user.name,
              email: user.email,
              vehicleModel: vehicle?.model || 'N/A',
              registrationNumber: vehicle?.registrationNumber || 'N/A',
              price: generateRandomPrice(),
              purchaseDate: generateRandomPurchaseDate(),
            };
          })
        );

        setOrders(orderData);
      } catch (err) {
        console.error('Error loading order summary:', err);
      }
    };

    fetchData();
  }, []);

  // Generate price between ₹5L to ₹9L
  const generateRandomPrice = () => {
    const min = 500000;
    const max = 900000;
    return `₹${(Math.floor(Math.random() * (max - min + 1)) + min).toLocaleString()}`;
  };

  // Generate random date within the last 5 years
  const generateRandomPurchaseDate = () => {
    const now = new Date();
    const past = new Date();
    past.setFullYear(now.getFullYear() - 3);

    const randomTime = past.getTime() + Math.random() * (now.getTime() - past.getTime());
    const date = new Date(randomTime);

    return date.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center fw-bold mb-4">Order Summary</h2>
      <div className="table-responsive shadow-lg ">
        <table className="table table-bordered text-center align-middle">
          <thead className="bg-primary text-light">
            <tr className="border border-dark">
              <th className="border border-dark">S No.</th>
              <th className="border border-dark">User</th>
              <th className="border border-dark">Email</th>
              <th className="border border-dark">Vehicle Model</th>
              <th className="border border-dark">Registration No</th>
              <th className="border border-dark">Price</th>
              <th className="border border-dark">Purchase Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order.id} className={index % 2 === 0 ? 'table-light' : ''}>
                <td className="border border-dark">{index + 1}</td>
                <td className="border border-dark fw-semibold">{order.name}</td>
                <td className="border border-dark">{order.email}</td>
                <td className="border border-dark">{order.vehicleModel}</td>
                <td className="border border-dark">{order.registrationNumber}</td>
                <td className="border border-dark fw-bold text-success">{order.price}</td>
                <td className="border border-dark">{order.purchaseDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderSummary;
