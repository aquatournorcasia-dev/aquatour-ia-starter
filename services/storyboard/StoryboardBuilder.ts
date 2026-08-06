import { ImageAnalysis } from "../vision/ImageAnalyzer";

export interface StoryboardScene {

  scene: number;

  title: string;

  description: string;

  camera: string;

  movement: string;

  duration: string;

}

export class StoryboardBuilder {

  build(
    analysis: ImageAnalysis
  ): StoryboardScene[] {

    return [

      {
        scene: 1,
        title: "Plano de Apertura",
        description: `Presentar ${analysis.environment}.`,
        camera: "Drone",
        movement: "Travelling",
        duration: "5 segundos",
      },

      {
        scene: 2,
        title: "Experiencia",
        description: "Mostrar la actividad principal.",
        camera: "Plano Medio",
        movement: "Gimbal",
        duration: "8 segundos",
      },

      {
        scene: 3,
        title: "Emoción",
        description: "Capturar la interacción de los visitantes.",
        camera: "Primer Plano",
        movement: "Slow Motion",
        duration: "7 segundos",
      },

      {
        scene: 4,
        title: "Cierre",
        description: "Finalizar con llamado a la acción.",
        camera: "Drone",
        movement: "Pull Out",
        duration: "5 segundos",
      }

    ];

  }

}