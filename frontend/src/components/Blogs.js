import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Blog from './Blog';
import {useSelector} from 'react-redux';


function Blogs() {
  const isLoggedIn=useSelector(state=>state.isLoggedIn);
  const [blogs,setBlogs]=useState([]);
  const sendRequest=async ()=>{
    const res=await axios.get("http://localhost/api/blog/")
              .catch(err=>console.log(err));
    const data=await res.data;
    return data;
  }
  useEffect(()=>{
    sendRequest().then(data=>setBlogs(data.blogs));
  }
  ,[blogs]);
  return (
    <React.Fragment>{
      isLoggedIn && 
      blogs.map(blog=>(
        <Blog key={blog._id} title={blog.title} description={blog.description} imageUrl={blog.image} userName={blog.user.name} blogId={blog._id} flag={blog.user._id===localStorage.getItem('userId')}/>
      ))
    }
    {
      !isLoggedIn &&
      <h2 style={{display:"flex",justifyContent:"center"}}>404 Not found</h2>
    }
    </React.Fragment>
  )
}

export default Blogs;
// flag={blog._id.user._id===localStorage.getItem("userId")}