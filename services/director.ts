import {
  DirectorRequest,
  DirectorResponse,
} from "@/types/director";

export async function generateProject(
  request: DirectorRequest
): Promise<DirectorResponse> {
  const destination =
    request.title || "Experiencia AquaTour Norcasia";

  const audience =
    request.audience || "turistas";

  const objective =
    request.objective || "promocionar el destino";

  const platform =
    request.platform || "Instagram";

  const style =
    request.style || "Cinematográfico";

  const duration =
    request.duration || "30 segundos";

  const summary = `
Se creó una campaña para ${audience}
con el objetivo de ${objective}.

La producción será publicada en ${platform}
con un estilo ${style} y una duración aproximada
de ${duration}.
`;

  const script = `
ESCENA 1
Plano aéreo mostrando el destino.

ESCENA 2
Presentación de la experiencia principal.

ESCENA 3
Visitantes disfrutando la actividad.

ESCENA 4
Invitación a reservar con AquaTour Norcasia.

ESCENA 5
Logo de AquaTour y llamado a la acción.
`;

  const storyboard = [
    `Drone mostrando ${destination}.`,
    "Plano cercano de la experiencia.",
    "Turistas disfrutando del recorrido.",
    "Guía interactuando con los visitantes.",
    "Plano final con logo y llamada a reservar.",
  ];

  const instagram = `
🌿 ${destination}

${objective}.

Vive una experiencia inolvidable junto a AquaTour Norcasia.

¡Reserva hoy mismo!
`;

  const hashtags = [
    "#AquaTourNorcasia",
    "#Norcasia",
    "#EmbalseAmani",
    "#Turismo",
    "#Aventura",
    "#Naturaleza",
    "#Caldas",
  ];

  return {
    summary,
    script,
    storyboard,
    instagram,
    hashtags,
  };
}