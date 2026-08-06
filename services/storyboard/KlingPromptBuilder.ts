import { StoryboardScene } from "./StoryboardBuilder";

export interface KlingPrompt {

  scene: number;

  prompt: string;

}

export class KlingPromptBuilder {

  build(
    storyboard: StoryboardScene[]
  ): KlingPrompt[] {

    return storyboard.map((scene) => ({

      scene: scene.scene,

      prompt: `
Create an ultra realistic tourism commercial.

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

Style:
Luxury cinematic advertisement.

Lighting:
Golden hour.

Lens:
35mm anamorphic.

Depth of field.

Natural atmosphere.

Photorealistic.

8K.

HDR.

Film color grading.

Smooth camera motion.

Professional production.

No subtitles.

No logos.

No watermark.

Highest cinematic quality.
`.trim()

    }));

  }

}