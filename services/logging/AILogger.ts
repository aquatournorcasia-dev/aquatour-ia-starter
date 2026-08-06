import { PromptPayload } from "@/services/prompt/promptBuilder";

export class AILogger {

  static logRequest(
    prompt: PromptPayload
  ) {

    console.group("🤖 AI REQUEST");

    console.log("Version:", prompt.version);

    console.log("System Prompt");

    console.log(prompt.system);

    console.log("User Prompt");

    console.log(prompt.user);

    console.groupEnd();

  }

  static logResponse(
    response: unknown
  ) {

    console.group("✅ AI RESPONSE");

    console.log(response);

    console.groupEnd();

  }

  static logError(
    error: unknown
  ) {

    console.group("❌ AI ERROR");

    console.error(error);

    console.groupEnd();

  }

}