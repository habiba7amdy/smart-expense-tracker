import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/dashboard", label: "Dashboard" },
  { to: "/add", label: "Add Transaction" },
  { to: "/transactions", label: "Transactions" },
];

export default function Navbar() {
  return (
    <nav className="rounded-3xl border border-white/10 bg-slate-900/80 p-4 shadow-2xl shadow-slate-950/40 backdrop-blur md:px-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <Link to="/dashboard" className="text-xl font-semibold tracking-tight text-white">
          Smart Expense Tracker
        </Link>
        <div className="flex flex-wrap gap-2">
          {links.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-cyan-400 text-slate-950"
                    : "bg-white/5 text-slate-200 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/"
            className="rounded-full border border-rose-400/30 bg-rose-400/10 px-4 py-2 text-sm font-medium text-rose-100 transition hover:bg-rose-400/20"
          >
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
}
