import React,{useEffect,useState} from 'react'
import axios from 'axios';
import Blog from './Blog';
import {useSelector} from 'react-redux';

function UserBlogs() {
  const isLoggedIn=useSelector(state=>state.isLoggedIn);
  const id=localStorage.getItem("userId");
  const [userBlogs,setUserBlogs]=useState([]);
  const sendRequest=async()=>{
    const res=await axios.get(`http://localhost/api/blog/user/${id}`);
    const data=await res.data;
    return data;
  };

  useEffect(()=>{
    sendRequest().then((data)=>{
      setUserBlogs(data.blog.blogs);
    });
  },[userBlogs]);
  return (
    <React.Fragment>{
      isLoggedIn && 
        userBlogs.map(blog=>(
          <Blog key={blog._id} title={blog.title} description={blog.description} imageUrl={blog.image} flag={true} />
        ))
      }
      {
        !isLoggedIn && 
        <h2 style={{display:"flex",justifyContent:"center"}}>404 Not found</h2>
      }
    </React.Fragment>
  )
}

export default UserBlogs;