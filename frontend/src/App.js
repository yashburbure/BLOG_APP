import React from "react";
import Header from './components/Header';
import Login from './components/Login';
import Blogs from './components/Blogs';
import BlogDetail from './components/Blogdetail';
import UserBlogs from "./components/UserBlogs";
import Addblog from "./components/Addblog";

import {Routes,Route} from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn=useSelector(state=>state.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <React.Fragment>
      <header>
        <Header/>
      </header>
      <main>
        <Routes>
          <Route exact path="/Login" element={<Login/>}/>
          <Route exact path="/blogs" element={<Blogs/>}/>
          <Route exact path="/myblogs" element={<UserBlogs/>}/>
          <Route exact path="/myblogs/:id" element={<BlogDetail/>}/>
          <Route exact path="blogs/add" element={<Addblog/>}/>
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
