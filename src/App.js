import "./App.css";
import Home from "./Components/Home";
import Announcements from "./Components/Announcements";
import RegisterComplaint from "./Components/RegisterComplaint";
import Complaint from "./Components/Complaint";
import Wards from "./Components/wards";

function App() {
  return (
    <div className="App">
      <Home />
      <Announcements />
      <Wards/>
      <RegisterComplaint/>
      {/* <Complaint /> */}
      
    </div>
  );
}

export default App;
