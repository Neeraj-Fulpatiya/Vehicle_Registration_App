// import React from 'react'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <div>
// <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="#">Vehicle Registration Application</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//      <Link className='btn btn-outline-light'to="/adduser">Add User</Link>
//   </div>
// </nav>

//     </div>
//   )
// }

// export default Navbar



import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Vehicle Registration Application</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="d-flex">
            <Link className="btn btn-outline-light me-2" to="/adduser">
              Add User
            </Link>
            <Link className="btn btn-outline-light" to="/ordersummary">
              History
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;


