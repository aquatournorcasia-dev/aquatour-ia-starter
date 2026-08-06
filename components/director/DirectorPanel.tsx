"use client";

import { DirectorResponse } from "@/types/director";
import ProjectDashboard from "@/components/project/ProjectDashboard";

interface Props {
  loading: boolean;
  result: DirectorResponse | null;
}

export default function DirectorPanel({
  loading,
  result,
}: Props) {

  return (

    <ProjectDashboard
      loading={loading}
      project={result}
    />

  );

}