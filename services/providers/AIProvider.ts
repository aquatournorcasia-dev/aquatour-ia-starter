import { PromptPayload } from "@/services/prompt/promptBuilder";
import { DirectorResponse } from "@/types/director";

export interface AIProvider {

  generate(
    prompt: PromptPayload
  ): Promise<DirectorResponse>;

}