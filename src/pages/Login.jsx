import { Button, Card, Grid, TextField } from '@mui/material';
import React, { useState } from 'react'
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

function LoginForm({ Login, error}) {
    const [details, setDetails] = useState({name:"", email:"", password:"" });

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

  // const classes = useStyles();

  return (
    <Grid 
      container 
      columnSpacing={{ xs: 5}} 
      className= "main-Grid" 
      sx = {{ 
        marginTop: "10px",
        display: "flex", 
        height: "100vh", 
        justifyContent: "center", 
        alignItems:"center",
        fontFamily: "montserrat, sans-serif",
        // backgroundImage: "linear-gradient(to bottom right, #FFCE00, #FE4880)"
        backgroundImage: "linear-gradient(to bottom right, #ff0066, #36cee7)"

      }}>
    <Card 
      raised 
      sx={{
        width: 300, 
        height:350, 
        display:"flex", 
        justifyContent:"space-around",
        zIndex: 1,
        // backgroundImage: "linear-gradient(to bottom right, #FFCE00, #FE4880)", 
        backgroundImage: "linear-gradient(150deg, #0090ff 0%, #36dae9 100%)", 
        }}>
            <Grid 
              item 
              className='grid-inner' 
              sx={{
                flexDirection:"column", 
                display:"flex",
                backgroundColor: "#FFF",
                // justifyContent:"space-around",
                paddingInline: "30px",
                zIndex: 2,
                }}>
                <h2 style={{alignSelf: "center", color: "#888", fontSize: "28px", fontWeight: 500}}>LOGIN</h2>
                {(error != "") ? ( <Grid item className="error">{error}</Grid>) : ""}
                <Grid item style={{margin:"4px"}}>
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
                </Grid>
                <Grid item style={{margin:"4px"}}>
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
                      }}
                      type="email" 
                      label="Email" 
                      onChange={e => setDetails({...details, email: e.target.value})} 
                      value={details.email} 
                      required 
                      />
                </Grid>
                <Grid item style={{margin:"4px"}}>
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
                      }} 
                  type="password" 
                  label="Password" 
                  onChange={e => setDetails({...details, password: e.target.value})} 
                  value={details.password} 
                  required  
                  />
                </Grid>

                <Button 
                  onClick={submitHandler} 
                  sx = {{
                    display: "inline-block",
                    marginBottom: "20px", 
                    marginTop: "20px", 
                    color: "#0e0d0e", 
                    backgroundImage: "linear-gradient(to right, #0090ff 50%, #36dae9 50%)",
                    backgroundSize: "200%",
                    backgroundPosition: "0%", 
                    minWidth: "120px", 
                    alignSelf:"center", 
                    fontFamily: "montserrat, sans-serif",
                    border: "1px solid #008eff",
                    borderRadius: "8px",
                    transition: "0.4s",
                    cursor: "pointer",
                    "&:hover":{
                      backgroundPosition: "100% 0%",
                      border: "1px solid #36dae9",
                    }
                    }}>
                    Login
                  </Button>
            </Grid>
    </Card>
    </Grid>
  )
}

export default LoginForm;