import './App.css';
import Navigation from "./components/Navigation/Navigation";
import Signup from "./components/Signup/signup";
import Landingpage from './components/landingpage/landingpage';
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
      <Navigation />
      <Signup />
      <Landingpage />
    </div>
  );
}

export default App;
