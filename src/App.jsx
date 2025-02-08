import "./App.css";
// import Button from 'react-bootstrap/Button'

import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { DefaultLayout } from "./components/layout/DefaultLayout";
import Dashboard from "./pages/Dashboard";
import Transaction from "./pages/Transaction";
import { Auth } from "./auth/Auth";
import { useEffect } from "react";
import { useUser } from "./context/UserContext";

function App() {
  const { autologin, user } = useUser();

  const loginFromToken = async () => {
    return await autologin();
  };

  useEffect(() => {
    !user?._id && loginFromToken();
  }, [user?._id]);

  return (
    <div className="wrapper">
      <Routes>
        <Route path="*" element={<DefaultLayout />}>
          {/* Login Page */}
          <Route index element={<Login />} />

          {/* signup Page */}
          <Route path="signup" element={<SignUp />} />
          {/* dashboard Page */}
          <Route
            path="dashboard"
            element={
              <Auth>
                <Dashboard />
              </Auth>
            }
          />

          {/* Transaction Page */}
          <Route
            path="transaction"
            element={
              <Auth>
                <Transaction />
              </Auth>
            }
          />
        </Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
