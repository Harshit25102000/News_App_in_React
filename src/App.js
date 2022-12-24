import "./App.css";

import React, { useState } from "react";
import PropTypes from "prop-types";
import  NavBar  from "./Components/Navbar";
import  News  from "./Components/News";
import { ReactDom } from "react-dom/client";
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
} from "react-router-dom";


const App=()=> {
  const [progress,setProgress]=useState(0)
  
 
 
    return (
      <BrowserRouter>
        <NavBar />
        <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
        
      />

        <Routes>
          <Route path="/" element={<News setProgress={ setProgress} key="general" pageSize={12} country="in"  />}/>
          <Route path="/business" element={<News setProgress={ setProgress} key="business" pageSize={12} country="in" category="business" />}/>
          <Route path="/entertainment" element={<News setProgress={ setProgress} key="entertainment" pageSize={12} country="in" category="entertainment" />}/>
          <Route path="/health" element={<News setProgress={ setProgress} key="health" pageSize={12} country="in" category="health" />}/>
          <Route path="/science" element={<News setProgress={ setProgress} key="science" pageSize={12} country="in" category="science" />}/>
          <Route path="/sports" element={<News setProgress={ setProgress} key="sports" pageSize={12} country="in" category="sports" />}/>
          <Route path="/technology" element={<News setProgress={ setProgress} key="tech" pageSize={12} country="in" category="technology" />}/>

        </Routes>
      </BrowserRouter>
    );
  
}
export default App;