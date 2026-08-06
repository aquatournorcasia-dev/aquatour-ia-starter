import { AIProject } from "@/services/orchestrator/AIOrchestrator";

export class ProjectExporter {

  exportJson(
    project: AIProject
  ): string {

    return JSON.stringify(
      project,
      null,
      2
    );

  }

  exportFileName(
    title: string
  ): string {

    const safeTitle = title
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

    return `${safeTitle}-project.json`;

  }

}