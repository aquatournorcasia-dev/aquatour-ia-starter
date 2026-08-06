import { AIProvider } from "./AIProvider";
import { OpenAIProvider } from "./OpenAIProvider";

export enum AIModel {

  OPENAI = "openai",

  GEMINI = "gemini",

  CLAUDE = "claude",

  DEEPSEEK = "deepseek",

  OLLAMA = "ollama",

}

export class ProviderFactory {

  static create(
    provider: AIModel = AIModel.OPENAI
  ): AIProvider {

    switch (provider) {

      case AIModel.OPENAI:
        return new OpenAIProvider();

      default:
        return new OpenAIProvider();

    }

  }

}