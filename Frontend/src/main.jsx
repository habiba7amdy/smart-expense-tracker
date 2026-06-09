import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AddTransaction from "./pages/AddTransaction";
import Transactions from "./pages/Transactions";
import "./index.css";

function AppShell() {
  const location = useLocation();
  const showNavbar = !["/", "/register"].includes(location.pathname);

  return (
    <div className="min-h-screen text-slate-100">
      {showNavbar && <header className="mx-auto w-full max-w-7xl px-4 pt-6"><Navbar /></header>}
      <main className="mx-auto w-full max-w-7xl px-4 pb-10">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add" element={<AddTransaction />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppShell />
  </BrowserRouter>
);