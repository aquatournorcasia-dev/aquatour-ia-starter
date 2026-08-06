import {
  DirectorRequest,
  DirectorResponse,
} from "@/types/director";

export async function generateProject(
  request: DirectorRequest
): Promise<DirectorResponse> {

  return {

    summary:
      `Campaña "${request.title}" orientada a ${request.audience}.`,

    script:
      `Video de ${request.duration} mostrando la experiencia en Norcasia con estilo ${request.style}.`,

    storyboard: [

      "Drone inicia sobre el embalse",

      "Lancha navegando",

      "Turistas disfrutando",

      "Cierre con logo AquaTour",

    ],

    instagram:
      `Descubre una experiencia inolvidable en Norcasia.`,

    hashtags: [

      "#AquaTourNorcasia",

      "#EmbalseAmani",

      "#Turismo",

      "#Colombia"

    ]

  };

}