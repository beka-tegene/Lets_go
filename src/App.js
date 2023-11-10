import { Route, Routes } from "react-router-dom";
import AuthLogin from "./Pages/Auth/AuthLogin";
import AuthRegister from "./Pages/Auth/AuthRegister";
import LandingHero from "./Pages/Landing/LandingHero";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingHero />} />
      <Route path="/login" element={<AuthLogin />} />
      <Route path="/register" element={<AuthRegister />} />
    </Routes>
  );
}

export default App;
