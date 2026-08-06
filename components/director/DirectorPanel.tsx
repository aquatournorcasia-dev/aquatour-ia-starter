"use client";

import { DirectorResponse } from "@/types/director";

interface Props {
  loading: boolean;
  result: DirectorResponse | null;
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-800 p-5">
      <h3 className="mb-3 text-lg font-bold text-cyan-400">
        {title}
      </h3>

      {children}
    </div>
  );
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
        <div className="mt-8 rounded-2xl border border-dashed border-slate-700 p-8 text-center">

          <h3 className="text-xl font-semibold">
            Esperando un proyecto...
          </h3>

          <p className="mt-3 text-slate-400">
            Sube una fotografía, completa el Brief Creativo
            y presiona <b>Iniciar Producción IA</b>.
          </p>

        </div>
      )}

      {loading && (
        <div className="mt-8 space-y-4">

          {[
            "📷 Analizando fotografía",
            "🎯 Interpretando objetivo",
            "🎬 Escribiendo guion",
            "📖 Diseñando storyboard",
            "📱 Preparando contenido",
          ].map((step) => (
            <div
              key={step}
              className="animate-pulse rounded-xl bg-slate-800 p-4"
            >
              {step}...
            </div>
          ))}

        </div>
      )}

      {!loading && result && (
        <div className="mt-8 space-y-5">

          <Card title="📋 Resumen">
            <p className="whitespace-pre-line text-slate-300">
              {result.summary}
            </p>
          </Card>

          <Card title="🎬 Guion">
            <p className="whitespace-pre-line text-slate-300">
              {result.script}
            </p>
          </Card>

          <Card title="📖 Storyboard">
            <ul className="space-y-2">
              {result.storyboard.map((scene, index) => (
                <li key={index}>
                  {index + 1}. {scene}
                </li>
              ))}
            </ul>
          </Card>

          <Card title="📱 Copy para Instagram">
            <p className="whitespace-pre-line text-slate-300">
              {result.instagram}
            </p>
          </Card>

          <Card title="🏷️ Hashtags">
            <div className="flex flex-wrap gap-2">
              {result.hashtags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-cyan-500/20 px-3 py-1 text-sm text-cyan-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Card>

        </div>
      )}

    </div>
  );
}