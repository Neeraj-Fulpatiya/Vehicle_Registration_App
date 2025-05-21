// // import logo from './logo.svg';
// import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Navbar from './layout/Navbar';

// import { BrowserRouter as Router ,Routes,Route } from   'react-router-dom';

// import Home from './pages/Home';
// import AddUser from './users/AddUser';
// function App() {
//   return (
//     <div className="App">
// <Router>
//        <Navbar/>
//   <Routes>
// <Route exact path='/'element={<Home/>}/>
// <Route exact path='/adduser' element={<AddUser/>}/>
// </Routes>
//        {/* <Home/> */}
//        </Router>
//     </div>
//   );
// }

// export default App;


import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
// import UserDetailsWithVehicles from "./pages/UserDetailsWithVehicles";
import UserVehicles from "./pages/UserVehicles";
// import ViewVehicles from "./pages/ViewVehicles";
import ViewVehicles from "./pages/ViewVehicles";
import OrderSummary from "./pages/OrderSummary";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} />
          <Route path="/uservehicles/:id" element={<UserVehicles />} />
         {/* <Route path="/user/:userId" element={<UserDetailsWithVehicles/>} /> */}
        <Route path="/vehicles/:userId" element={<ViewVehicles />} />
<Route path="/ordersummary" element={<OrderSummary />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;