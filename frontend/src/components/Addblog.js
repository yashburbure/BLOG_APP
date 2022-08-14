import React,{useState} from 'react';
import { TextField,Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import axios from 'axios';
import { rootShouldForwardProp } from '@mui/material/styles/styled';


function Addblog() {
  const [value,setValue]=useState({
    title:"",imageUrl:"",description:""
  });
  const handleChange=(e)=>{
    setValue((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value
    }))
  };
  const sendRequest=async()=>{
    const res=await axios.post("http://localhost/api/blog/add",{
      title:value.title,
      image:value.imageUrl,
      description:value.description,
      user:localStorage.getItem("userId")
    })
    .catch(err=>console.log(err));
    return res.data;
  }
  const handleSubmit=(e)=>{ 
    console.log(localStorage.getItem("userId"));
    e.preventDefault();;
    sendRequest().then(data=>{
      alert("Blog added successfully");
      setValue({title:"",imageUrl:"",description:""});
    })
      .catch(err=>{
        console.log(err);
        alert("Internal Server Error 500");
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
          maxWidth={"60%"}
          margin="auto"
          marginTop={5}
          borderRadius={5}
        >
          <Typography variant="h5" textAlign="center" marginBottom={2}>Post Your Blog</Typography>
          <TextField onChange={handleChange} name="title" value={value.title} label="Title" margin='normal' sx={{width:"50%"}} spellCheck={false}/>
          <TextField onChange={handleChange} name="imageUrl" value={value.imageUrl} multiline  maxRows={Infinity} label="ImageURL" margin='normal' sx={{width:"50%"}} spellCheck={false}/>
          <TextField onChange={handleChange} name="description" value={value.description} multiline   maxRows={Infinity} label="Description" margin='normal' sx={{width:"50%"}} spellCheck={false}/>
          <Button type="submit" color="warning" size="small" variant="contained" sx={{margin:"10px",marginTop:"20px "}} >Submit</Button>
        </Box>
      </form>
  )
}

export default Addblog;