import { useState } from "react";
import api from "../services/api";

export default function AddTransaction() {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("expense");
  const [description, setDescription] = useState("");

  const addTransaction = async () => {
    await api.post("/transactions", {
      user_id: 1,
      amount,
      category,
      type,
      description,
      transaction_date: new Date().toISOString().split("T")[0],
    });

    alert("Transaction Added!");
  };

  return (
    <section className="py-6 text-slate-100">
      <div className="mx-auto grid max-w-5xl gap-6 rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur md:grid-cols-[0.9fr_1.1fr] md:p-8">
        <aside className="rounded-3xl bg-[linear-gradient(135deg,#0f172a,#1e293b_50%,#0ea5e9_130%)] p-6">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-100">Quick entry</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">Log a new transaction</h2>
          <p className="mt-3 text-slate-200">Capture everyday spending or income in seconds and keep your monthly view accurate.</p>
        </aside>

        <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); addTransaction(); }}>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2 text-sm text-slate-200">
              Amount
              <input className="w-full rounded-2xl border border-white/10 bg-slate-800/90 px-4 py-3 text-white placeholder:text-slate-400 shadow-sm shadow-slate-950/20 transition focus:border-cyan-400 focus:outline-none" placeholder="Enter amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
            </label>
            <label className="space-y-2 text-sm text-slate-200">
              Category
              <input className="w-full rounded-2xl border border-white/10 bg-slate-800/90 px-4 py-3 text-white placeholder:text-slate-400 shadow-sm shadow-slate-950/20 transition focus:border-cyan-400 focus:outline-none" placeholder="Travel, Food, Salary..." value={category} onChange={(e) => setCategory(e.target.value)} />
            </label>
          </div>

          <label className="space-y-2 text-sm text-slate-200">
            Type
            <select className="w-full rounded-2xl border border-white/10 bg-slate-800/90 px-4 py-3 text-white shadow-sm shadow-slate-950/20 transition focus:border-cyan-400 focus:outline-none" value={type} onChange={(e) => setType(e.target.value)}>
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>
          </label>

          <label className="space-y-2 text-sm text-slate-200">
            Description
            <input className="w-full rounded-2xl border border-white/10 bg-slate-800/90 px-4 py-3 text-white placeholder:text-slate-400 shadow-sm shadow-slate-950/20 transition focus:border-cyan-400 focus:outline-none" placeholder="What was this for?" value={description} onChange={(e) => setDescription(e.target.value)} />
          </label>

          <div className="pt-4 md:pt-6">
            <button type="submit" className="w-full rounded-2xl bg-cyan-400 px-4 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-400/10 transition hover:bg-cyan-300">Add transaction</button>
          </div>
        </form>
      </div>
    </section>
  );
}