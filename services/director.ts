import {
  DirectorRequest,
  DirectorResponse,
} from "@/types/director";

import { buildPrompt } from "./prompt/promptBuilder";

export async function generateProject(
  request: DirectorRequest
): Promise<DirectorResponse> {

  // Construimos el Prompt profesional
  const prompt = buildPrompt(request);

  console.log("========== PROMPT SYSTEM ==========");
  console.log(prompt.system);

  console.log("========== PROMPT USER ==========");
  console.log(prompt.user);

  /**
   * AQUÍ irá OpenAI, Gemini, Claude,
   * Azure OpenAI o n8n.
   *
   * En este momento todavía
   * devolvemos datos simulados.
   */

  return {

    summary:
      `Proyecto generado para "${request.title}" orientado a ${request.audience}.`,

    script:
`
ESCENA 1
Plano aéreo del destino.

ESCENA 2
Presentación de la experiencia.

ESCENA 3
Turistas disfrutando.

ESCENA 4
Cierre con llamado a reservar.
`,

    storyboard: [

      "Drone sobre el destino.",

      "Experiencia principal.",

      "Clientes disfrutando.",

      "Logo AquaTour."

    ],

    instagram:
`
Descubre ${request.title}

Una experiencia inolvidable.

Reserva hoy mismo.
`,

    hashtags: [

      "#AquaTourNorcasia",

      "#Norcasia",

      "#EmbalseAmani",

      "#Turismo",

      "#Naturaleza"

    ]

  };

}