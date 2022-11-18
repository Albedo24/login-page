import { Button } from "@mui/material";
import { useState } from "react";
import LoginPage from "./pages/Login";

function App() {

  const dummy =  {
    email: "admin@gmail.com",
    password: "admin123"
  }

  const [user, setUser] = useState({name:"", email:""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
    if (details.email == dummy.email && details.password == dummy.password){
      console.log("Logged In");
      setUser({
        name: details.name,
        email: details.email
      });
    } else {
      // console.log("Details do not match!")
      setError("Details do not match!")
    }
  }

  const Logout = () => {
    console.log("Logout");
    setUser({
      name:"", 
        email:""
    })
  }

  return (
    <div className="App" >
    {(user.email != "") ? (
      <div className="welcome">
        <h2>Welcome, <span>{user.name}</span></h2>
        <Button onClick={Logout}>Logout</Button>
      </div>
    ) : (
      <LoginPage Login={Login} error={error}/>
    )}    
    </div>
  );
}

export default App;
