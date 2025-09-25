import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import { Layout } from "./AllPages";
import Homes from "./layout/Home";
import PricingPage from "./pages/home/PricingPage";
import OurTeam from "./pages/components/ourTeam/OurTeam";
import Login from "./pages/components/auth/Login";
import UserLoginRoute from "./pages/components/auth/UserTypeRoute";
import UploadUserSignUp from "./pages/components/auth/UploadUserSignUp";
import ApplyUserSignUp from "./pages/components/auth/ApplyUserSignUp";
import Error from "./error/Error";
import EmailOtpVerification from "./pages/components/auth/EmailOtpVerification";
import VerifyEmailWithOTP from "./pages/components/auth/VerifyEmailWithOTP";
import Dashboard from "./pages/users/DashBoard";
import ProtectedRoute from "./pages/components/auth/ProtectedRoute";
import LogoutPage from "./pages/components/auth/LogoutPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Homes />}></Route>
        <Route path="pages" element={<Outlet />}>
          <Route path="pricing" element={<Outlet />}>
            <Route path="form-pricing" element={<PricingPage />}></Route>
          </Route>
          <Route path="user" element={<Outlet />}>
            <Route path="user-type" element={<UserLoginRoute />}></Route>
            <Route
              path="apply-user-sign-up"
              element={<ApplyUserSignUp />}
            ></Route>
            <Route
              path="upload-user-sign-up"
              element={<UploadUserSignUp />}
            ></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="logout" element={<LogoutPage />}></Route>
            <Route
              path="email-verification"
              element={<EmailOtpVerification />}
            ></Route>
            <Route
              path="verify-email-with-otp"
              element={<VerifyEmailWithOTP />}
            ></Route>
            <Route path="in" element={<Outlet />}>
              <Route element={<ProtectedRoute />}>
                <Route path="dashboard" element={<Dashboard />} />
              </Route>
            </Route>
          </Route>
          <Route path="team" element={<Outlet />}>
            <Route path="our-team" element={<OurTeam />}></Route>
          </Route>
          <Route path="error" element={<Error />}></Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
