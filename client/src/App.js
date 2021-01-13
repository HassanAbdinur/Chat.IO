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
      <header className="App-header">
        <p>
          The client is up and running
        </p>
      </header>
    </div>
  );
}

export default App;
