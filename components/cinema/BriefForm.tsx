"use client";

export interface Campaign {
  title: string;
  objective: string;
  audience: string;
  platform: string;
  style: string;
  duration: string;
}

interface BriefFormProps {
  campaign: Campaign;
  loading: boolean;
  onChange: (campaign: Campaign) => void;
  onGenerate: () => void;
}

export default function BriefForm({
  campaign,
  loading,
  onChange,
  onGenerate,
}: BriefFormProps) {
  return (
    <div className="rounded-3xl bg-slate-900 p-8 space-y-5">

      <h2 className="text-3xl font-bold">
        Brief Creativo IA
      </h2>

      <input
        className="w-full rounded-xl bg-slate-800 p-4"
        placeholder="Nombre de la campaña"
        value={campaign.title}
        onChange={(e) =>
          onChange({
            ...campaign,
            title: e.target.value,
          })
        }
      />

      <textarea
        rows={4}
        className="w-full rounded-xl bg-slate-800 p-4"
        placeholder="Objetivo de la campaña"
        value={campaign.objective}
        onChange={(e) =>
          onChange({
            ...campaign,
            objective: e.target.value,
          })
        }
      />

      <input
        className="w-full rounded-xl bg-slate-800 p-4"
        placeholder="Público objetivo"
        value={campaign.audience}
        onChange={(e) =>
          onChange({
            ...campaign,
            audience: e.target.value,
          })
        }
      />

      <select
        className="w-full rounded-xl bg-slate-800 p-4"
        value={campaign.platform}
        onChange={(e) =>
          onChange({
            ...campaign,
            platform: e.target.value,
          })
        }
      >
        <option>Instagram</option>
        <option>TikTok</option>
        <option>Facebook</option>
        <option>YouTube</option>
      </select>

      <select
        className="w-full rounded-xl bg-slate-800 p-4"
        value={campaign.style}
        onChange={(e) =>
          onChange({
            ...campaign,
            style: e.target.value,
          })
        }
      >
        <option>Cinematográfico</option>
        <option>Documental</option>
        <option>Premium</option>
        <option>Aventura</option>
      </select>

      <select
        className="w-full rounded-xl bg-slate-800 p-4"
        value={campaign.duration}
        onChange={(e) =>
          onChange({
            ...campaign,
            duration: e.target.value,
          })
        }
      >
        <option>15 segundos</option>
        <option>30 segundos</option>
        <option>60 segundos</option>
        <option>90 segundos</option>
      </select>

      <button
        onClick={onGenerate}
        disabled={loading}
        className="w-full rounded-xl bg-cyan-500 p-5 text-xl font-bold hover:bg-cyan-600 disabled:bg-slate-700"
      >
        {loading ? "Director IA trabajando..." : "🚀 Iniciar Producción IA"}
      </button>

    </div>
  );
}