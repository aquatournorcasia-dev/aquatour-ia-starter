import { StoryboardScene } from "./StoryboardBuilder";

export interface CinematicPrompt {

  scene: number;

  prompt: string;

}

export class CinematicPromptBuilder {

  build(
    storyboard: StoryboardScene[]
  ): CinematicPrompt[] {

    return storyboard.map((scene) => ({

      scene: scene.scene,

      prompt: `
Create a cinematic scene.

Title:
${scene.title}

Description:
${scene.description}

Camera:
${scene.camera}

Movement:
${scene.movement}

Duration:
${scene.duration}

Ultra realistic.

8K.

HDR.

Professional cinema.

Natural lighting.

Volumetric light.

Film look.

No text.

No watermark.

No logo.

High quality.
`.trim()

    }));

  }

}