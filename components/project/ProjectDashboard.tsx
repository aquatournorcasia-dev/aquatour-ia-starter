"use client";

import { DirectorResponse } from "@/types/director";
import ProjectTabs from "./ProjectTabs";

interface Props {
  project: DirectorResponse | null;
  loading: boolean;
}

export default function ProjectDashboard({
  project,
  loading,
}: Props) {

  if (loading) {

    return (

      <div className="rounded-3xl bg-slate-900 p-8">

        <h2 className="text-2xl font-bold text-cyan-400">
          Director IA
        </h2>

        <div className="mt-8 space-y-4">

          <div className="h-16 animate-pulse rounded-xl bg-slate-800" />

          <div className="h-16 animate-pulse rounded-xl bg-slate-800" />

          <div className="h-16 animate-pulse rounded-xl bg-slate-800" />

          <div className="h-16 animate-pulse rounded-xl bg-slate-800" />

        </div>

      </div>

    );

  }

  if (!project) {

    return (

      <div className="rounded-3xl bg-slate-900 p-8">

        <h2 className="text-2xl font-bold text-cyan-400">
          Director IA
        </h2>

        <p className="mt-8 text-slate-400">

          Esperando la creación del proyecto...

        </p>

      </div>

    );

  }

  return (

    <div className="rounded-3xl bg-slate-900 p-8">

      <h2 className="mb-8 text-2xl font-bold text-cyan-400">

        Proyecto Cinematográfico

      </h2>

      <ProjectTabs project={project} />

    </div>

  );

}