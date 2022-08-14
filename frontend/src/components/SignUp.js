import React,{useState} from 'react';
import {Box,Typography,TextField,Button} from "@mui/material";
import axios from 'axios';
import {useDispatch} from "react-redux";
import { Authactions } from '../store';
import { useNavigate } from 'react-router-dom';

function SignUp() { 
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const [inputs,setInputs]=useState({
        name:"",
        email:"",
        password:""
    }); 
    const handleChange=(e)=>{
        setInputs(prevState=>({
        ...prevState,
        [e.target.name]:e.target.value
        }));
    };
    const sendRequest=async()=>{
        const res=await axios.post("http://localhost/api/user/SignUp",{
            name:inputs.name,
            email:inputs.email,
            password:inputs.password
        }).catch(err=>console.log(err));
        const data=await res.data;
        return data;
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(inputs);
        sendRequest()
        .then((data)=>{
          console.log(data);
          localStorage.setItem("userId",data.id);
        })
        .then((data)=>{
          dispatch(Authactions.login());
          navigate("/blogs");
        })
      };
    
  return (
    <form onSubmit={handleSubmit}>
      <Box 
        display="flex" 
        flexDirection="column" 
        justifyContent='center' 
        alignItems="center"
        boxShadow="10px 10px 30px #ccc"
        width={"60%"}
        margin="auto"
        marginTop={5}
        borderRadius={5}
        >
        <Typography variant='h4' padding={3}>
            SignUp
        </Typography>
        <TextField name="name" onChange={handleChange} value={inputs.name} size='small' label="Username" margin='normal' required/>
        <TextField name="email" onChange={handleChange} value={inputs.email} type="email" size="small" label="Email" margin="normal" required/>
        <TextField name="password" onChange={handleChange} value={inputs.password} type="password" size="small" label="Password" margin='normal' required/>
        <Button type="submit" color="warning" size="small" variant="contained" sx={{margin:"10px",marginTop:"20px "}}>Submit</Button>
        <Button size="small" sx={{margin:"10px"}}
          onClick={()=>{
            navigate("/Login");
          }}
        >Change to Login</Button>
      </Box>
    </form>
  )
}

export default SignUp