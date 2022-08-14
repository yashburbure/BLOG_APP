import React from "react";
import Header from './components/Header';
import Login from './components/Login';
import Blogs from './components/Blogs';
import BlogDetail from './components/Blogdetail';
import UserBlogs from "./components/UserBlogs";
import Addblog from "./components/Addblog";
import SignUp from "./components/SignUp";
import './App.css';
import {Routes,Route} from "react-router-dom";


function App() {
  return (
    <React.Fragment>
      <header>
        <Header/>
      </header>
      <main>
        <Routes>
          <Route exact path="/Login" element={<Login/>}/>
          <Route exact path="/SignUp" element={<SignUp/>}/>
          <Route exact path="/blogs" element={<Blogs/>}/>
          <Route exact path="/myblogs" element={<UserBlogs/>}/>
          <Route exact path="/myblogs/:id" element={<BlogDetail/>}/>
          <Route exact path="/blog/add" element={<Addblog/>}/>
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
