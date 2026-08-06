import { DirectorResponse } from "@/types/director";

export class AIResponseParser {

  static parse(
    response: string
  ): DirectorResponse {

    try {

      const data = JSON.parse(
        response
      ) as DirectorResponse;

      if (
        !data.summary ||
        !data.script ||
        !Array.isArray(data.storyboard) ||
        !data.instagram ||
        !Array.isArray(data.hashtags)
      ) {
        throw new Error(
          "La estructura del JSON es inválida."
        );
      }

      return data;

    } catch (error) {

      console.error(
        "Error procesando respuesta IA:",
        error
      );

      throw new Error(
        "No fue posible interpretar la respuesta de la IA."
      );

    }

  }

}