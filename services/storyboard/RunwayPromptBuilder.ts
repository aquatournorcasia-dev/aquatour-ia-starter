import { StoryboardScene } from "./StoryboardBuilder";

export interface RunwayPrompt {

  scene: number;

  prompt: string;

}

export class RunwayPromptBuilder {

  build(
    storyboard: StoryboardScene[]
  ): RunwayPrompt[] {

    return storyboard.map((scene) => ({

      scene: scene.scene,

      prompt: `
Generate a premium cinematic tourism commercial.

Scene:
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

Professional cinematography.

Natural lighting.

Golden hour.

Luxury travel advertisement.

35mm cinema lens.

Smooth motion.

High dynamic range.

Photorealistic.

Film color grading.

No subtitles.

No watermark.

No logos.

Professional production quality.
`.trim()

    }));

  }

}