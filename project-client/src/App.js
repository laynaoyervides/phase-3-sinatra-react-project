import './App.css';
import {Routes, Route} from "react-router-dom"
import React from 'react';
import NavBar from './NavBar';
import Classes from './Classes';
import Activity from './Activity';
import Enrollments from './Enrollments';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/classes" element={<Classes  />}/>
        <Route path="/activity" element={<Activity/>} />
        <Route path="/enrollments" element={<Enrollments />} />
        <Route path="*" element={<h1>404 not found</h1>}/>
        <Route exact path="/" element={<Home />} />    
      </Routes>

    </div>
  );
}

export default App;
