import { Button, Card, Grid, TextField } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import AuthContext from "../context/AuthProvider";
import HomePage from "../pages/HomePage";
// import {makeStyles} from '@mui/styles';

// const useStyles = makeStyles({
//   root: {

//   },

//   button: {
//     marginBottom: "20px",
//     marginTop: "20px",
//     color: "#f3e8e8",
//     backgroundColor: "#008eff",
//     minWidth: "120px",
//     alignSelf:"center",
//     fontFamily: "montserrat, sans-serif"
//   },
// })

function LoginForm({ Login }) {
  const userRef = useRef();
  const errRef = useRef();

  // const details = { username: "aditimusunur", password: "Aditi@1234" };

  const [user, setUser] = useState({ username: "", password: "" });
  console.log("checking user state:\n", user);
  const [checker, setChecker] = useState(false);
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState("");
  const { setAuth } = useContext(AuthContext);

  // AXIOS DUMMY
  // let result = {
  //   mesaage: "User signin Successfully",
  //   checker: true,
  //   user: {
  //     id: 1,
  //     name: "Aditi Musunur",
  //     username: "aditimusunur",
  //     password: "Aditi@1234",
  //     email: "aditi02@gmail.com",
  //     role: "admin",
  //     options: [
  //       "Add New Page",
  //       "Add Content",
  //       "Edit Content",
  //       "Publish Content",
  //       "Edit Site Design",
  //       "Admin Settings",
  //       "Settings",
  //       "LogOut",
  //     ],
  //   },
  // };

  let [apiUser, setApiUser] = useState({});

  // useEffect(() => {
  // 	userRef.current.focus();
  // }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);
  // const [details, setDetails] = useState({email:"", password:"" });

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("BUTTON CLICK", user);
    await axios
      .post("http://localhost:4000/login", user, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((result) => {
        console.log(result);
        setApiUser(result.data);
        setChecker(true);
      })
      .catch((err) => {
        console.log(err + "CHINU SLEEP");
        // setChecker(true); // delete in prod
      });
    // <Navbar role={result.user.role} />;
    // Login(details);
  };

  // const classes = useStyles();

  return (
    <>
      {console.log(apiUser)}
      {checker ? (
        <HomePage role={apiUser.user.role} options={apiUser.user.options} />
      ) : (
        <Grid
          container
          columnSpacing={{ xs: 5 }}
          className="main-Grid"
          sx={{
            marginTop: "10px",
            display: "flex",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "montserrat, sans-serif",
            fontWeight: "bold",
            // backgroundImage: "linear-gradient(to bottom right, #FFCE00, #FE4880)"
            backgroundImage:
              "linear-gradient(to bottom right, #ff0066, #36cee7)",
          }}
        >
          <Card
            raised
            sx={{
              width: 300,
              height: 400,
              display: "flex",
              justifyContent: "space-around",
              zIndex: 1,
              // backgroundImage: "linear-gradient(to bottom right, #FFCE00, #FE4880)",
              backgroundImage:
                "linear-gradient(150deg, #0090ff 0%, #36dae9 100%)",
            }}
          >
            <Grid
              item
              className="grid-inner"
              sx={{
                flexDirection: "column",
                display: "flex",
                backgroundColor: "#FFF",
                justifyContent: "space-around",
                paddingInline: "30px",
                zIndex: 2,
              }}
            >
              <h2
                style={{
                  alignSelf: "center",
                  color: "#888",
                  fontSize: "28px",
                  fontWeight: 550,
                }}
              >
                LOGIN
              </h2>
              <p
                ref={errRef}
                className={errMsg ? "errmsg" : "offscreen"}
                aria-live="assertive"
              >
                {errMsg}
              </p>
              {/* {(error != "") ? ( <Grid item className="error">{error}</Grid>) : ""} */}
              {/* <Grid item style={{margin:"4px"}}>
                <TextField 
                  sx={{
                      borderRadius: "8px", 
                      transition: "0.4s",
                      borderColor: "#36dae9",
                      "& .MuiOutlinedInput-root": {
                        "& > fieldset": { 
                          borderColor: "#0090ff"
                           }
                          },
                      "& .MuiOutlinedInput-root.Mui-focused": {
                        "& > fieldset": {
                              borderColor: "#36dae9"
                            }
                           },
                      "& .MuiOutlinedInput-root:hover" : {
                            "& > fieldset": {
                              borderColor: "#36dae9"
                            }
                      }
                      // "&. MuiInputBase-input": { "&. MuiOutlinedInput-input:focus" : {
                      //     boxShadow: "10px 10px 10px rgba(0, 0, 0 /90%)"
                      //   }}
                      }}
                  type="text" 
                  label="Name" 
                  onChange={e => setDetails({...details, name: e.target.value})} 
                  value={details.name} 
                  required   
                  />
                </Grid> */}
              <Grid item style={{ margin: "4px" }}>
                <TextField
                  sx={{
                    borderRadius: "8px",
                    transition: "0.4s",
                    borderColor: "#36dae9",
                    "& .MuiOutlinedInput-root": {
                      "& > fieldset": {
                        borderColor: "#0090ff",
                      },
                    },
                    "& .MuiOutlinedInput-root.Mui-focused": {
                      "& > fieldset": {
                        borderColor: "#36dae9",
                      },
                    },
                    "& .MuiOutlinedInput-root:hover": {
                      "& > fieldset": {
                        borderColor: "#36dae9",
                      },
                    },
                  }}
                  type="text"
                  label="Username"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) =>
                    setUser({ ...user, username: e.target.value })
                  }
                  value={user.username}
                  required
                />
              </Grid>
              <Grid item style={{ margin: "4px" }}>
                <TextField
                  sx={{
                    borderRadius: "8px",
                    transition: "0.4s",
                    borderColor: "#36dae9",
                    "& .MuiOutlinedInput-root": {
                      "& > fieldset": {
                        borderColor: "#0090ff",
                      },
                    },
                    "& .MuiOutlinedInput-root.Mui-focused": {
                      "& > fieldset": {
                        borderColor: "#36dae9",
                      },
                    },
                    "& .MuiOutlinedInput-root:hover": {
                      "& > fieldset": {
                        borderColor: "#36dae9",
                      },
                    },
                  }}
                  type="password"
                  label="Password"
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  value={user.password}
                  required
                />
              </Grid>

              <Button
                onClick={submitHandler}
                sx={{
                  display: "inline-block",
                  marginBottom: "20px",
                  marginTop: "20px",
                  color: "#0e0d0e",
                  backgroundImage:
                    "linear-gradient(to right, #0090ff 50%, #36dae9 50%)",
                  backgroundSize: "200%",
                  backgroundPosition: "0%",
                  minWidth: "120px",
                  alignSelf: "center",
                  fontFamily: "montserrat, sans-serif",
                  border: "1px solid #008eff",
                  borderRadius: "8px",
                  transition: "0.4s",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundPosition: "100% 0%",
                    border: "1px solid #36dae9",
                  },
                }}
              >
                Login
              </Button>
              <Grid item>
                <p style={{ fontWeight: 100, color: "rgb(13 183 199)" }}>
                  Need an Account?
                  <br />
                  <span>
                    {/*Router link here*/}
                    <a href="#" style={{ color: "rgb(13 183 199)" }}>
                      Sign Up
                    </a>
                  </span>
                </p>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      )}
    </>
  );
}

export default LoginForm;
