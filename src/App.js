import { Button } from "@mui/material";
import { useState } from "react";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/Login";
import Public from "./pages/Public";
import Login from "./New/Login";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';

function App() {

  // const dummy =  {
  //   email: "admin@gmail.com",
  //   password: "admin123"
  // }

  // const [user, setUser] = useState({name:"", email:""});
  // const [error, setError] = useState("");

  // const Login = details => {
  //   console.log(details);
  //   if (details.email == dummy.email && details.password == dummy.password){
  //     console.log("Logged In");
  //     setUser({
  //       name: details.name,
  //       email: details.email
  //     });
  //   } else {
  //     // console.log("Details do not match!")
  //     setError("Details do not match!")
  //   }
  // }

  // const Logout = () => {
  //   console.log("Logout");
  //   setUser({
  //     name:"", 
  //       email:""
  //   })
  // };

  return (
    <>
    {/* {(user.email != "") ? (
      <div className="welcome">
        <h2>Welcome, <span>{user.name}</span></h2>
        <Button onClick={Logout}>Logout</Button>
      </div>
    ) : (
      <LoginPage Login={Login} error={error}/>
    )}     */}
    {/* <Router>
      <Navbar role="admin"/>
    </Router> */}
      
      {/* <Public/> */}
      <LoginPage/>
    </>
  );
}

export default App;
