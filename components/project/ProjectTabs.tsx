"use client";

import { useState } from "react";
import { DirectorResponse } from "@/types/director";

interface Props {
  project: DirectorResponse;
}

type Tab =
  | "summary"
  | "script"
  | "storyboard"
  | "instagram"
  | "hashtags";

export default function ProjectTabs({
  project,
}: Props) {

  const [tab, setTab] =
    useState<Tab>("summary");

  return (

    <div className="space-y-6">

      <div className="flex flex-wrap gap-2">

        {[
          ["summary","Resumen"],
          ["script","Guion"],
          ["storyboard","Storyboard"],
          ["instagram","Instagram"],
          ["hashtags","Hashtags"],
        ].map(([id,label])=>(

          <button
            key={id}
            onClick={() => setTab(id as Tab)}
            className={`rounded-xl px-4 py-2 transition ${
              tab===id
              ? "bg-cyan-500 text-white"
              : "bg-slate-800"
            }`}
          >
            {label}
          </button>

        ))}

      </div>

      <div className="rounded-2xl bg-slate-800 p-6">

        {tab==="summary" && (
          <p className="whitespace-pre-line">
            {project.summary}
          </p>
        )}

        {tab==="script" && (
          <p className="whitespace-pre-line">
            {project.script}
          </p>
        )}

        {tab==="storyboard" && (

          <ul className="space-y-2">

            {project.storyboard.map((scene,index)=>(
              <li key={index}>
                {index+1}. {scene}
              </li>
            ))}

          </ul>

        )}

        {tab==="instagram" && (
          <p className="whitespace-pre-line">
            {project.instagram}
          </p>
        )}

        {tab==="hashtags" && (

          <div className="flex flex-wrap gap-2">

            {project.hashtags.map(tag=>(

              <span
                key={tag}
                className="rounded-full bg-cyan-500/20 px-3 py-1"
              >
                {tag}
              </span>

            ))}

          </div>

        )}

      </div>

    </div>

  );

}