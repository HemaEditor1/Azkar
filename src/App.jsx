import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Food from "./Pages/Food";
import Prayer from "./Pages/Prayer";
import Sleep from "./Pages/Sleep";
import House from "./Pages/House";
import Daily from "./Pages/Daily";
import AboutMe from "./Pages/AboutMe";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food" element={<Food />} />
        <Route path="/prayer" element={<Prayer />} />
        <Route path="/sleep" element={<Sleep />} />
        <Route path="/house" element={<House />} />
        <Route path="/daily" element={<Daily />} />
        <Route path="/aboutMe" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
