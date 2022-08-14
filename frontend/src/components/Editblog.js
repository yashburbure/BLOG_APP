import { Box,Typography,TextField,Button } from '@mui/material';

import React,{useState} from 'react'

function Editblog({id}) {
    console.log(id);
    const [value,setValue]=useState({
        // titleVal:title,imageVal:imageUrl,desVal:description
    });
    const handleChange=(e)=>{
        setValue((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    };
    return (

        <form>
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
            <Typography variant="h5" textAlign="center" marginBottom={2}>Edit Your Blog</Typography>
            <TextField onChange={handleChange} name="title" value={value.titleVal} label="Title" margin='normal' sx={{width:"50%"}} spellCheck={false}/>
            <TextField onChange={handleChange} name="imageUrl" value={value.imageVal} multiline  maxRows={Infinity} label="ImageURL" margin='normal' sx={{width:"50%"}} spellCheck={false}/>
            <TextField onChange={handleChange} name="description" value={value.desVal} multiline   maxRows={Infinity} label="Description" margin='normal' sx={{width:"50%"}} spellCheck={false}/>
            <Button type="submit" color="warning" size="small" variant="contained" sx={{margin:"10px",marginTop:"20px "}} >Submit</Button>
            </Box>
        </form>
  )
}

export default Editblog