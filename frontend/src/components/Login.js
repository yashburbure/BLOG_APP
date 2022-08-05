import React,{useState} from 'react';
import {Box,Typography,TextField,Button} from "@mui/material";

function Login() {
  const [state,setState]=useState(false);
  console.log(state);
  return (
    <form>
      <Box 
        display="flex" 
        flexDirection="column" 
        justifyContent='center' 
        alignItems="center"
        boxShadow="10px 10px 30px #ccc"
        maxWidth={400}
        margin="auto"
        marginTop={5}
        borderRadius={5}
        >
        <Typography variant='h4' padding={3}>
          {!state?"Login":"SignUp"}
        </Typography>
        {
          state && <TextField size='small' label="Username" margin='normal'/>
        }
        <TextField type="email" size="small" label="Email" margin="normal"/>
        <TextField type="password" size="small" label="Password" margin='normal'/>
        <Button color="warning" size="small" variant="contained" sx={{margin:"10px",marginTop:"20px "}}>Submit</Button>
        <Button size="small" sx={{margin:"10px"}}
          onClick={()=>{
              if(state) setState(false);
              else setState(true); 
          }}
        >Change to {state?"Login":"SignUp"}</Button>
      </Box>
    </form>
  )
}

export default Login;