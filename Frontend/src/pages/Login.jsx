import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const res = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      window.location.href = "/dashboard";
    } catch (error) {
      console.error(error);
      alert("Login Failed");
    }
  };

  return (
    <section className="flex min-h-screen items-center justify-center px-4 py-10 text-slate-100">
      <div className="grid w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 shadow-2xl shadow-slate-950/40 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="hidden bg-[linear-gradient(135deg,#0f172a,#1e293b_40%,#0ea5e9_120%)] p-10 lg:flex lg:flex-col lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-100/80">Expense Intelligence</p>
            <h1 className="mt-4 text-4xl font-semibold text-white">Track every rupee, plan every month.</h1>
            <p className="mt-4 max-w-md text-slate-200">A calm, modern dashboard to monitor income, expenses, and your next smart move.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/10 p-4 text-sm text-slate-100">Tip: add a quick transaction after your next purchase to keep your balance in sync.</div>
        </div>

        <div className="p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">Welcome back</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Sign in</h2>
          <p className="mt-2 text-slate-300">Access your financial snapshot and manage spending effortlessly.</p>

          <div className="mt-8 space-y-4">
            <input className="w-full rounded-2xl border border-white/10 bg-slate-800/90 px-4 py-3 text-white outline-none ring-0 transition placeholder:text-slate-400 focus:border-cyan-400" type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input className="w-full rounded-2xl border border-white/10 bg-slate-800/90 px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-cyan-400" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={login} className="w-full rounded-2xl bg-cyan-400 px-4 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300">Login</button>
          </div>

          <p className="mt-6 text-sm text-slate-300">New here? <Link to="/register" className="text-cyan-200 hover:text-cyan-100">Create an account</Link></p>
        </div>
      </div>
    </section>
  );
}