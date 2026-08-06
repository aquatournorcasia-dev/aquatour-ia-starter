import OpenAI from "openai";

import { AIProvider } from "./AIProvider";

import { PromptPayload } from "@/services/prompt/promptBuilder";
import { DirectorResponse } from "@/types/director";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export class OpenAIProvider implements AIProvider {

  async generate(
    prompt: PromptPayload
  ): Promise<DirectorResponse> {

    const response = await client.responses.create({

      model: process.env.OPENAI_MODEL ?? "gpt-5",

      input: [

        {
          role: "system",
          content: prompt.system,
        },

        {
          role: "user",
          content: prompt.user,
        },

      ],

    });

    const text = response.output_text;

    try {

      return JSON.parse(text) as DirectorResponse;

    } catch {

      throw new Error(
        "La IA respondió un formato diferente al JSON esperado."
      );

    }

  }

}