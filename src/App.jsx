import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import { Layout } from "./AllPages";
import Homes from "./layout/Home";
import PricingPage from "./pages/home/PricingPage";
import OurTeam from "./pages/components/ourTeam/OurTeam";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Homes />}></Route>
        <Route path="pages" element={<Outlet />}>
          <Route path="pricing" element={<Outlet />}>
            <Route path="form-pricing" element={<PricingPage />}></Route>
          </Route>
          <Route path="team" element={<Outlet />}>
            <Route path="our-team" element={<OurTeam />}></Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
