import { useEffect, useState } from "react";
import api from "../services/api";
import PieChart from "../components/PieChart";

export default function Dashboard() {
  const [summary, setSummary] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get("/transactions/summary/1");
      setSummary(res.data);
    };

    fetchData();
  }, []);

  const cards = [
    {
      label: "Total Income",
      value: summary.income ?? 0,
      accent: "from-emerald-400 to-emerald-500",
      note: "All incoming funds",
    },
    {
      label: "Total Expense",
      value: summary.expense ?? 0,
      accent: "from-rose-400 to-rose-500",
      note: "Tracked spending",
    },
    {
      label: "Current Balance",
      value: summary.balance ?? 0,
      accent: "from-cyan-400 to-sky-500",
      note: "Net available amount",
    },
  ];

  return (
    <div className="space-y-8 py-6 text-slate-100">
      <header className="rounded-3xl border border-white/10 bg-slate-900/85 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur md:p-8">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">Overview</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">Finance dashboard</h1>
        <p className="mt-2 max-w-2xl text-slate-300">A modern snapshot of your income, spending, and current financial position.</p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        {cards.map((card) => (
          <article
            key={card.label}
            className="group rounded-3xl border border-white/10 bg-slate-900/85 p-6 shadow-xl shadow-slate-950/30 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-900/95 hover:shadow-cyan-400/10"
          >
            <div className={`h-1.5 w-20 rounded-full bg-gradient-to-r ${card.accent}`} />
            <h3 className="mt-4 text-sm uppercase tracking-[0.25em] text-slate-300">{card.label}</h3>
            <p className="mt-3 text-3xl font-semibold text-white">{card.value}</p>
            <p className="mt-1 text-sm text-slate-400">{card.note}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="rounded-3xl border border-white/10 bg-slate-900/85 p-6 shadow-xl shadow-slate-950/30 backdrop-blur transition duration-300 hover:border-cyan-400/35 hover:bg-slate-900/95 md:p-8">
          <div className="mb-4 flex flex-col gap-1">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">Visual Insight</p>
            <h2 className="text-2xl font-semibold text-white">Income vs Expense Distribution</h2>
            <p className="text-slate-300">A clear view of how your income compares to your spending.</p>
          </div>
          <div className="mx-auto flex min-h-[320px] w-full items-center justify-center rounded-2xl border border-white/8 bg-slate-950/40 p-4 md:min-h-[360px] md:p-6">
            <div className="h-[280px] w-full max-w-[320px] md:h-[330px] md:max-w-[360px]">
              <PieChart income={Number(summary.income)} expense={Number(summary.expense)} />
            </div>
          </div>
        </article>

        <article className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/10 via-slate-900/85 to-emerald-400/10 p-6 shadow-xl shadow-slate-950/30 backdrop-blur transition duration-300 hover:border-cyan-300/30 hover:bg-slate-900/95 md:p-8">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-100">Smart Tips</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">Keep your finance flow healthy</h2>
          <p className="mt-3 text-slate-200">A consistent record of transactions helps you spot patterns early and make smarter money decisions.</p>
          <ul className="mt-5 space-y-3 text-sm text-slate-100">
            <li>• Review the latest spending trends every week.</li>
            <li>• Separate fixed bills from flexible spending categories.</li>
            <li>• Update your balance right after each transaction.</li>
          </ul>
        </article>
      </section>
    </div>
  );
}
