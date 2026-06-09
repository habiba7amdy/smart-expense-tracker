import { useEffect, useState } from "react";
import api from "../services/api";

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    const res = await api.get("/transactions/1");
    setTransactions(res.data);
  };

  const deleteTransaction = async (id) => {
    await api.delete(`/transactions/${id}`);
    fetchTransactions();
  };

  return (
    <section className="py-6 text-slate-100">
      <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur md:p-8">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">History</p>
        <h2 className="mt-3 text-3xl font-semibold text-white">Recent transactions</h2>
        <p className="mt-2 text-slate-300">Keep your records clean and remove anything that no longer belongs.</p>

        <div className="mt-6 space-y-4">
          {transactions.map((item) => (
            <article key={item.id} className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-slate-800/80 p-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-lg font-semibold text-white">{item.category}</p>
                <p className="text-sm text-slate-300">{item.description || "No description added"}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] ${item.type === "income" ? "bg-emerald-400/15 text-emerald-200" : "bg-rose-400/15 text-rose-200"}`}>
                  {item.type}
                </span>
                <strong className="text-white">{item.amount}</strong>
                <button onClick={() => deleteTransaction(item.id)} className="rounded-full border border-rose-400/30 bg-rose-400/10 px-3 py-2 text-sm font-medium text-rose-100 transition hover:bg-rose-400/20">Delete</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
