import { AIModel } from "@/services/providers/ProviderFactory";

export const appConfig = {

  appName: "StudioOS",

  version: "1.0.0",

  ai: {

    provider: AIModel.OPENAI,

    model: "gpt-5",

    temperature: 0.7,

    maxTokens: 4000,

  },

  prompt: {

    version: "1.0.0",

  },

};