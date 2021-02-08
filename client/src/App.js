import React from 'react';
import Navbar from './components/navigation/navbar';
import './App.css';
import Axios from "axios";

function App() {
  Axios({
    method: "GET",
    url: "http://localhost:5000/",
    headers: {
      "Content-Type": "application/json"
    } 
  }).then(res => {
    console.log(res.data.message);
  });

  return (
    <div className="App">
    <Navbar />
     <h1>hi hello</h1>
    </div>
  );
}
export default App;
