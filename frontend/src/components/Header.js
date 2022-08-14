import React,{useState} from 'react';
import {AppBar,Toolbar,Typography,Button,Box,Tabs,Tab} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {Authactions} from '../store';

function Header() {
  const dispatch=useDispatch();
  const isLoggedIn=useSelector(state=>state.isLoggedIn);
  const navigate=useNavigate();
  const [value,setValue]=useState(0);
  const handleEvent=(event,val)=>{
    setValue(val);
  }
  const MoveToLogin=()=>{
    navigate("/Login");
  }
  const Logout=()=>{
    dispatch(Authactions.logout());
    localStorage.setItem("userId",null);
    navigate("/Login");
  };

  return (
    <AppBar
    position="sticky"
    sx={{background:"linear-gradient(90deg, rgba(70,59,255,1) 0%, rgba(222,243,239,1) 32%, rgba(218,201,218,1) 65%, rgba(244,221,236,1) 100%)"}}>
        <Toolbar>
          <Typography varinat="h4" marginRight={2}>BlogsApp</Typography>
          {
            isLoggedIn && 
            <Tabs textColor='inherit' value={value} onChange={handleEvent}>
              <Tab label="All Blogs" onClick={()=>navigate("/blogs")}/>
              <Tab label="My Blogs" onClick={()=>navigate("/myblogs")}/>  
              <Tab label="Add Blog" onClick={()=>navigate("/blog/add")}/>           
            </Tabs>
          }
          <Box marginLeft='auto'>
            {
              !isLoggedIn && 
              <Button variant="contained" color="warning" sx={{margin:1}} onClick={MoveToLogin} disableElevation>Login</Button>
            }
            {
              !isLoggedIn && 
              <Button variant="contained" color="warning" sx={{margin:1}} onClick={()=>navigate("/SignUp")} disableElevation>SignUp</Button>
            }
            {isLoggedIn && <Button onClick={Logout} variant="contained" color="warning" sx={{margin:1}} disableElevation>LogOut</Button>}
          </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Header;