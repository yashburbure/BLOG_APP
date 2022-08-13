import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Blog from './Blog';

function Blogs() {
  const [blogs,setBlogs]=useState([]);
  const sendRequest=async ()=>{
    const res=await axios.get("http://localhost/api/blog/")
              .catch(err=>console.log(err));
    const data=await res.data;
    return data;
  }
  useEffect(()=>{
    sendRequest().then(data=>setBlogs(data.blogs));
    // console.log(blogs);
  }
  ,[blogs]);
  return (
    <div>{
      blogs.map(blog=>(
        <Blog key={blog._id} title={blog.title} description={blog.description} imageUrl={blog.image} userName={blog.user.name} />
      ))
    }
    </div>
  )
}

export default Blogs;