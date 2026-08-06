"use client";

import { ImagePlus } from "lucide-react";
import { useRef, useState } from "react";

type Campaign = {
  title: string;
  objective: string;
  audience: string;
  platform: string;
  style: string;
  duration: string;
};

export default function CinemaDashboard() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const [campaign, setCampaign] = useState<Campaign>({
    title: "",
    objective: "",
    audience: "",
    platform: "Instagram",
    style: "Cinematográfico",
    duration: "30 segundos",
  });

  function openExplorer() {
    inputRef.current?.click();
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result as string);
    };

    reader.readAsDataURL(file);
  }

  async function generate() {
    setLoading(true);

    await new Promise((r) => setTimeout(r, 2500));

    alert("Aquí conectaremos Director IA en la siguiente Feature.");

    setLoading(false);
  }

  return (
    <div className="grid grid-cols-2 gap-8">

      <div>

        <div
          onClick={openExplorer}
          className="h-[520px] rounded-3xl border-2 border-dashed border-cyan-500 bg-slate-900 cursor-pointer overflow-hidden flex items-center justify-center"
        >

          {image ? (
            <img
              src={image}
              alt=""
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="text-center">

              <ImagePlus
                size={70}
                className="mx-auto text-cyan-400"
              />

              <h2 className="mt-5 text-2xl font-bold">
                Subir Fotografía
              </h2>

              <p className="mt-3 text-slate-400">
                Embalse, río, cascada o experiencia turística
              </p>

            </div>
          )}

          <input
            hidden
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={onChange}
          />

        </div>

      </div>

      <div className="rounded-3xl bg-slate-900 p-8 space-y-5">

        <h2 className="text-3xl font-bold">
          Brief Creativo IA
        </h2>

        <input
          className="w-full rounded-xl bg-slate-800 p-4"
          placeholder="Nombre de la campaña"
          value={campaign.title}
          onChange={(e) =>
            setCampaign({
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
            setCampaign({
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
            setCampaign({
              ...campaign,
              audience: e.target.value,
            })
          }
        />

        <select
          className="w-full rounded-xl bg-slate-800 p-4"
          value={campaign.platform}
          onChange={(e) =>
            setCampaign({
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
            setCampaign({
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
            setCampaign({
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
          onClick={generate}
          disabled={loading}
          className="w-full rounded-xl bg-cyan-500 p-5 text-xl font-bold hover:bg-cyan-600 disabled:bg-slate-700"
        >
          {loading ? "Director IA trabajando..." : "Generar Proyecto IA"}
        </button>

      </div>

    </div>
  );
}