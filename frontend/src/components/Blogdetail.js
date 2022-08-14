import { Box,Typography,TextField,Button } from '@mui/material';
import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';

function Blogdetail() {
    const isLoggedIn=useSelector(state=>state.isLoggedIn);
    const blogId=useParams().id;
    const [value,setValue]=useState({
        title:"",
        image:"",
        description:""
    })
    const handleChange=(e)=>{
        setValue((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    };
    const sendRequest=async()=>{
        const data=await axios.put(`http://localhost/api/blog/Update/${blogId}`,{
            title:value.title,
            description:value.description,
            image:value.image,
        });
        return data.blog;
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        sendRequest().then(data=>console.log(data))
        .then(()=>window.alert("Data Updated"))
        .catch(err=>window.alert("Internal Server Error data not Updated"));
    }
    const ReceiveBlog=async()=>{
        const res=await axios.get(`http://localhost/api/blog/${blogId}`);
        const data=await res.data;
        return data.blog;
    };
    useEffect(()=>{
        ReceiveBlog().then(data=>{
            console.log(data);
            setValue({
                title:data.title,
                description:data.description,
                image:data.image
            })
        })
    },[]);
  

    return (
        <React.Fragment>
            {
                isLoggedIn &&
                <form onSubmit={handleSubmit}>
                    <Box 
                        display="flex" 
                        flexDirection="column" 
                        justifyContent='center' 
                        alignItems="center"
                        boxShadow="10px 10px 30px #ccc"
                        width="80%"
                        margin="auto"
                        marginTop={5}
                        borderRadius={5}
                    >
                        <Typography variant="h5" textAlign="center" margin={2} >Edit Your Blog</Typography>
                        <TextField onChange={handleChange} name="title" value={value.title} label="Title" margin='normal' sx={{width:"70%"}} spellCheck={false}/>
                        <TextField onChange={handleChange} name="imageUrl" value={value.image} multiline  maxRows={Infinity} label="ImageURL" margin='normal' sx={{width:"70%"}} spellCheck={false}/>
                        <TextField onChange={handleChange} name="description" value={value.description} multiline   maxRows={Infinity} label="Description" margin='normal' sx={{width:"70%"}} spellCheck={false}/>
                        <Button type="submit" color="warning" size="small" variant="contained" sx={{margin:"10px",marginTop:"20px "}} >Submit</Button>
                    </Box>
                </form>
            }
            {
                !isLoggedIn && 
                <h2 style={{display:"flex",justifyContent:"center"}}>404 Not found</h2>
            }
      </React.Fragment>
  )
}

export default Blogdetail;