import React,{useEffect,useState} from 'react'
import axios from 'axios';
import Blog from './Blog';

function UserBlogs() {
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
      // console.log(userBlogs);  
    });
  },[userBlogs]);
  return (
    <div>{
      userBlogs.map(blog=>(
        <Blog key={blog._id} title={blog.title} description={blog.description} imageUrl={blog.image} userName={null} />
      ))
      }
    </div>
  )
}

export default UserBlogs;