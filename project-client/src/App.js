import './App.css';
import React from 'react';
import Classes from './Classes';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        
        <Route path="/classes" element={<Classes  />}/>
        <Route path="/activity" element={<Activity/>} />
        <Route path="*" element={<h1>404 not found</h1>}/>
        <Route exact path="/" element={<Home />} />
                  
      </Routes>

    </div>
  );
}

export default App;
