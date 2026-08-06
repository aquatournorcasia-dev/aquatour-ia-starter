import { AIProvider } from "./AIProvider";

import { PromptPayload } from "@/services/prompt/promptBuilder";

import { DirectorResponse } from "@/types/director";

export class OpenAIProvider implements AIProvider {

  async generate(
    prompt: PromptPayload
  ): Promise<DirectorResponse> {

    console.log("========== SYSTEM ==========");
    console.log(prompt.system);

    console.log("========== USER ==========");
    console.log(prompt.user);

    /**
     * Próximamente aquí conectaremos OpenAI.
     */

    return {

      summary:
        "Respuesta simulada desde OpenAI Provider.",

      script:
`
ESCENA 1

Drone.

ESCENA 2

Experiencia.

ESCENA 3

Reserva.
`,

      storyboard: [

        "Drone",

        "Turistas",

        "Reserva"

      ],

      instagram:
`
Contenido generado por OpenAI Provider.
`,

      hashtags: [

        "#StudioOS",

        "#AquaTour"

      ]

    };

  }

}