import { Route, Routes } from "react-router-dom";
import AuthLogin from "./Pages/Auth/AuthLogin";
import AuthRegister from "./Pages/Auth/AuthRegister";
import LandingHero from "./Pages/Landing/LandingHero";
import FlightFind from "./Pages/Flight/FlightFind";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FlightFind />} />
      <Route path="/hero" element={<LandingHero />} />
      <Route path="/login" element={<AuthLogin />} />
      <Route path="/register" element={<AuthRegister />} />
    </Routes>
  );
}

export default App;
