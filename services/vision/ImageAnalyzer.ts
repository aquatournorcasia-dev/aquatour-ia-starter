export interface ImageAnalysis {

  environment: string;

  elements: string[];

  activities: string[];

  colors: string[];

  mood: string;

}

export class ImageAnalyzer {

  async analyze(
    image?: string
  ): Promise<ImageAnalysis> {

    if (!image) {

      return {

        environment: "No disponible",

        elements: [],

        activities: [],

        colors: [],

        mood: "No definido",

      };

    }

    /**
     * Aquí conectaremos GPT Vision.
     */

    return {

      environment: "Pendiente de análisis IA",

      elements: [],

      activities: [],

      colors: [],

      mood: "Pendiente",

    };

  }

}