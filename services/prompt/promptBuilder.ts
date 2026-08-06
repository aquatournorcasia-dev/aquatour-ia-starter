import { DirectorRequest } from "@/types/director";

import { systemPrompt } from "./systemPrompt";
import { businessRules } from "./businessRules";
import { brandContext } from "./brandContext";
import { locationContext } from "./locationContext";
import { outputSchema } from "./outputSchema";

export interface PromptPayload {
  version: string;
  system: string;
  user: string;
}

export function buildPrompt(
  request: DirectorRequest
): PromptPayload {

  const user = `
INFORMACIÓN DEL PROYECTO

Título:
${request.title}

Objetivo:
${request.objective}

Público:
${request.audience}

Plataforma:
${request.platform}

Estilo:
${request.style}

Duración:
${request.duration}

Imagen Base:
${request.image ?? "No suministrada"}
`;

  return {

    version: "1.0.0",

    system: [

      systemPrompt,

      businessRules,

      brandContext,

      locationContext,

      outputSchema,

    ].join("\n\n"),

    user,

  };

}