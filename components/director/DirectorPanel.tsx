interface Props {
  loading: boolean;
  result: string;
}

export default function DirectorPanel({
  loading,
  result,
}: Props) {
  return (
    <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 h-full">

      <h2 className="text-2xl font-bold text-cyan-400">
        🤖 Director IA
      </h2>

      {!loading && !result && (
        <div className="mt-6 text-slate-400">
          Esperando instrucciones...
        </div>
      )}

      {loading && (
        <div className="mt-6 space-y-4">

          <div className="animate-pulse rounded-xl bg-slate-800 p-4">
            📷 Analizando fotografía...
          </div>

          <div className="animate-pulse rounded-xl bg-slate-800 p-4">
            🎬 Creando guion...
          </div>

          <div className="animate-pulse rounded-xl bg-slate-800 p-4">
            📖 Construyendo storyboard...
          </div>

          <div className="animate-pulse rounded-xl bg-slate-800 p-4">
            🎨 Generando prompts...
          </div>

          <div className="animate-pulse rounded-xl bg-slate-800 p-4">
            📱 Preparando marketing...
          </div>

        </div>
      )}

      {!loading && result && (
        <div className="mt-6 space-y-4">

          <div className="rounded-xl bg-slate-800 p-4">
            <h3 className="font-bold text-cyan-400">
              📋 Resumen
            </h3>

            <p className="mt-2 text-slate-300">
              {result}
            </p>
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            🎬 Guion listo
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            📖 Storyboard listo
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            🎨 Prompts IA listos
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            📱 Marketing listo
          </div>

        </div>
      )}

    </div>
  );
}