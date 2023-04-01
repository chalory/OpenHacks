import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./routes/Landing/landing.route";
import Feed from "./routes/feed/feed.route";
import Volunteer from "./routes/volunteer/volunteer.route";



const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/volunteer" element={< Volunteer/>} />



          
          
        </Routes>
      </Router>
    </div>
  );
};

export default App;