import {
  DirectorRequest,
  DirectorResponse,
} from "@/types/director";

import { buildPrompt } from "./prompt/promptBuilder";

import { ProviderFactory } from "./providers/ProviderFactory";

import { appConfig } from "@/config/appConfig";

export async function generateProject(
  request: DirectorRequest
): Promise<DirectorResponse> {

  const prompt = buildPrompt(request);

  const provider = ProviderFactory.create(
    appConfig.ai.provider
  );

  const response = await provider.generate(
    prompt
  );

  return response;

}