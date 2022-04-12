import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/home" element={<Dashboard />}/>
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
