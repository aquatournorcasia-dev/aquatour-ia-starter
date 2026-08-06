import { StoryboardScene } from "./StoryboardBuilder";

export interface VeoPrompt {

  scene: number;

  prompt: string;

}

export class Veo3PromptBuilder {

  build(
    storyboard: StoryboardScene[]
  ): VeoPrompt[] {

    return storyboard.map((scene) => ({

      scene: scene.scene,

      prompt: `
Create an ultra realistic cinematic tourism video.

SCENE
${scene.title}

DESCRIPTION
${scene.description}

CAMERA
${scene.camera}

MOVEMENT
${scene.movement}

DURATION
${scene.duration}

Style:
Luxury travel commercial.

Lighting:
Golden hour.

Lens:
35mm cinema.

Depth of field.

Natural colors.

Photorealistic.

8K.

HDR.

Professional color grading.

Smooth camera movement.

No subtitles.

No logos.

No watermark.

No artifacts.

Extremely realistic.
`.trim()

    }));

  }

}