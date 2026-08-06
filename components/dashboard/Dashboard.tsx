import CinemaDashboard from "../cinema/CinemaDashboard";

export default function Dashboard() {
  return (
    <div className="space-y-8">

      <section className="rounded-3xl bg-gradient-to-r from-cyan-600 to-slate-900 p-10">

        <h1 className="text-4xl font-bold">
          AquaTour IA
        </h1>

        <p className="mt-3 text-cyan-100">
          Crea campañas cinematográficas con IA.
        </p>

      </section>

      <CinemaDashboard />

    </div>
  );
}