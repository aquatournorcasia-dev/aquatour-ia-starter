interface StatCardProps {
  title: string;
  value: string;
  color?: string;
}

export default function StatCard({
  title,
  value,
  color = "text-cyan-400",
}: StatCardProps) {
  return (
    <div className="rounded-2xl bg-slate-900 p-6 border border-slate-800 shadow-lg hover:border-cyan-500 transition-all">
      <p className="text-slate-400 text-sm">{title}</p>

      <h2 className={`mt-3 text-4xl font-bold ${color}`}>
        {value}
      </h2>
    </div>
  );
}