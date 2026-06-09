import { Link } from "react-router-dom";

export default function Register() {
  return (
    <section className="flex min-h-screen items-center justify-center px-4 py-10 text-slate-100">
      <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur md:p-10">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">New account</p>
        <h2 className="mt-3 text-3xl font-semibold text-white">Create your finance hub</h2>
        <p className="mt-2 text-slate-300">Start with a clean slate and build stronger spending habits.</p>

        <div className="mt-8 space-y-4">
          <input className="w-full rounded-2xl border border-white/10 bg-slate-800/90 px-4 py-3 text-white placeholder:text-slate-400 focus:border-cyan-400" placeholder="Full name" />
          <input className="w-full rounded-2xl border border-white/10 bg-slate-800/90 px-4 py-3 text-white placeholder:text-slate-400 focus:border-cyan-400" placeholder="Email address" />
          <input className="w-full rounded-2xl border border-white/10 bg-slate-800/90 px-4 py-3 text-white placeholder:text-slate-400 focus:border-cyan-400" type="password" placeholder="Password" />
          <button className="w-full rounded-2xl bg-emerald-400 px-4 py-3 font-semibold text-slate-950 transition hover:bg-emerald-300">Create account</button>
        </div>

        <p className="mt-6 text-sm text-slate-300">Already have an account? <Link to="/" className="text-cyan-200 hover:text-cyan-100">Login</Link></p>
      </div>
    </section>
  );
}