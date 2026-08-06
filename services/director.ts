import {
  DirectorRequest,
  DirectorResponse,
} from "@/types/director";

export async function generateProject(
  request: DirectorRequest
): Promise<DirectorResponse> {

  const summary = `
Campaña "${request.title}" dirigida a ${request.audience}
para ${request.platform}.
`;

  const script = `
Escena 1
Presentación aérea del destino.

Escena 2
Mostrar la experiencia principal.

Escena 3
Turistas disfrutando.

Escena 4
Llamado a la acción para reservar.
`;

  const storyboard = [

    "Drone mostrando el paisaje.",

    "Plano cercano de la experiencia.",

    "Personas disfrutando el recorrido.",

    "Plano final con logo AquaTour."

  ];

  const instagram = `
${request.title}

Descubre una experiencia inolvidable en Norcasia.

Reserva ahora.

`;

  const hashtags = [

    "#AquaTourNorcasia",

    "#Norcasia",

    "#Turismo",

    "#EmbalseAmani",

    "#Colombia"

  ];

  return {

    summary,

    script,

    storyboard,

    instagram,

    hashtags,

  };

}