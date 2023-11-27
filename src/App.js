import { Route, Routes } from "react-router-dom";
import AuthLogin from "./Pages/Auth/AuthLogin";
import AuthRegister from "./Pages/Auth/AuthRegister";
import LandingHero from "./Pages/Landing/LandingHero";
import FlightDepartingFind from "./Pages/Flight/FlightDepartingFind";
import FlightReturnFind from "./Pages/Flight/FlightReturnFind";
import FlightDisplaySelect from "./Pages/Flight/FlightDisplaySelect";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingHero />} />
      <Route path="/departing" element={<FlightDepartingFind />} />
      <Route path="/return" element={<FlightReturnFind />} />
      <Route path="/display-select" element={<FlightDisplaySelect />} />
      <Route path="/login" element={<AuthLogin />} />
      <Route path="/register" element={<AuthRegister />} />
    </Routes>
  );
}

export default App;
