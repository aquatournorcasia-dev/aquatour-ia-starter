"use client";

import { DirectorResponse } from "@/types/director";

interface Props {
  loading: boolean;
  result: DirectorResponse | null;
}

export default function DirectorPanel({
  loading,
  result,
}: Props) {
  return (
    <div className="rounded-3xl bg-slate-900 p-8 min-h-[520px]">

      <h2 className="text-3xl font-bold text-cyan-400">
        🤖 Director IA
      </h2>

      {!loading && !result && (
        <div className="mt-8 text-slate-400">
          Esperando un proyecto...
        </div>
      )}

      {loading && (
        <div className="mt-8 space-y-4">

          <div className="animate-pulse rounded-xl bg-slate-800 p-4">
            📷 Analizando imagen...
          </div>

          <div className="animate-pulse rounded-xl bg-slate-800 p-4">
            🎬 Escribiendo guion...
          </div>

          <div className="animate-pulse rounded-xl bg-slate-800 p-4">
            📖 Creando storyboard...
          </div>

          <div className="animate-pulse rounded-xl bg-slate-800 p-4">
            📱 Preparando marketing...
          </div>

        </div>
      )}

      {!loading && result && (

        <div className="mt-8 space-y-6">

          <section>

            <h3 className="font-bold text-cyan-400">
              📋 Resumen
            </h3>

            <p className="mt-2 text-slate-300">
              {result.summary}
            </p>

          </section>

          <section>

            <h3 className="font-bold text-cyan-400">
              🎬 Guion
            </h3>

            <p className="mt-2 text-slate-300">
              {result.script}
            </p>

          </section>

          <section>

            <h3 className="font-bold text-cyan-400">
              📖 Storyboard
            </h3>

            <ul className="mt-2 space-y-2">

              {result.storyboard.map((scene, index) => (
                <li key={index}>
                  • {scene}
                </li>
              ))}

            </ul>

          </section>

          <section>

            <h3 className="font-bold text-cyan-400">
              📱 Instagram
            </h3>

            <p className="mt-2">
              {result.instagram}
            </p>

          </section>

          <section>

            <h3 className="font-bold text-cyan-400">
              🏷️ Hashtags
            </h3>

            <div className="mt-2 flex flex-wrap gap-2">

              {result.hashtags.map((tag) => (

                <span
                  key={tag}
                  className="rounded-full bg-cyan-500/20 px-3 py-1 text-cyan-300"
                >
                  {tag}
                </span>

              ))}

            </div>

          </section>

        </div>

      )}

    </div>
  );
}