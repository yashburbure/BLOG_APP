import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { CardActionArea, CardHeader } from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './Blog_css.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Blog=({title,description,imageUrl,userName,blogId,flag})=> {
    console.log(flag);
    const navigate=useNavigate();
    const handleEdit=(e)=>{
        navigate(`/myblogs/${blogId}`);
    }
    const handleDelete=async(e)=>{
        if(window.confirm("Are you sure")){
            axios.delete(`http://localhost/api/blog/${blogId}`).then(()=>window.alert("Deleted Successfully"))
        }
    }
    return (
        <div className="Blog">
            <Card sx={{ maxWidth:"60vw",marginTop:2,padding:2,boxShadow:"5px 5px 10px grey", margin:"auto"}}>
                {
                    flag && 
                    <Box display="flex">
                        <IconButton sx={{marginLeft:'auto'}} onClick={handleEdit}>
                            <EditIcon/>
                        </IconButton>
                        <IconButton onClick={handleDelete}>
                            <DeleteIcon/>
                        </IconButton>
                    </Box>
                }
                <CardActionArea>
                    {
                        userName &&
                        <CardHeader
                            avatar={
                                <Avatar  aria-label="recipe">
                                    {userName[0]}
                                </Avatar>
                            }
                            title={userName}                        
                        />
                    }
                    <CardMedia
                        component="img"
                        height={300}
                        image={imageUrl}
                        alt={title}
                        sx={{objectFit:"contain"}}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}
export default Blog;