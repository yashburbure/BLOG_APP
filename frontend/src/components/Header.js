import React,{useState} from 'react';
import {AppBar,Toolbar,Typography,Button,Box,Tabs,Tab, IconButton} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {Authactions} from '../store';
import CloseIcon from '@mui/icons-material/Close';
import './Header_css.css';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  const isLoggedIn=useSelector(state=>state.isLoggedIn);
  const giveState=()=>{
    if(window.innerWidth>=610) return false;
    return true;
  }
  const [showNavbarBurger,setshowNavbarBurger]=useState("translateX(-100%)");
  
  const [flag,setFlag]=useState(giveState());
  const dispatch=useDispatch();
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
  window.addEventListener("resize",()=>{
    if(window.innerWidth>=610) setFlag(false);
    else setFlag(true);
  });
  return (
    <AppBar
    position="sticky"
    sx={{background:"linear-gradient(90deg, rgba(70,59,255,1) 0%, rgba(222,243,239,1) 32%, rgba(218,201,218,1) 65%, rgba(244,221,236,1) 100%)"}}> 
      <Toolbar>
        {
          isLoggedIn && 
          <Box sx={{
            position:"fixed",
            left:0,
            top:0,
            bottom:0,
            background:"grey",
            width:"30%",
            color:"black",
            zIndex:300,
            transform:showNavbarBurger,
            transition: "all 250ms"
          }}>
            <Box display={'flex'} flexDirection={'row'}>
              <Box marginLeft={'auto'}>
                <IconButton onClick={()=>{
                  setshowNavbarBurger("translateX(-100%)");
                }}>
                  <CloseIcon/>
                </IconButton>
              </Box>
            </Box>
            <Tabs textColor='inherit' value={value} onChange={handleEvent}
              orientation="vertical"
            >
              <Tab sx={{borderBottom:"1px solid rgba(0,0,0,.2)"}} label="All Blogs" onClick={()=>navigate("/blogs")}/>
              <Tab sx={{borderBottom:"1px solid rgba(0,0,0,.2)"}} label="My Blogs" onClick={()=>navigate("/myblogs")}/>  
              <Tab sx={{borderBottom:"1px solid rgba(0,0,0,.2)"}} label="Add Blog" onClick={()=>navigate("/blog/add")}/>           
            </Tabs>
          </Box>
        }
          {
          flag && isLoggedIn &&
            <IconButton onClick={()=>setshowNavbarBurger("translateX(0)")}>
              <MenuIcon/>
            </IconButton>
          }
          <Typography varinat="h4" marginLeft={1} marginRight={2}>BlogsApp</Typography>
          {
            isLoggedIn && !flag &&
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