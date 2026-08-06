import { StoryboardScene } from "@/services/storyboard/StoryboardBuilder";

export interface Shot {

  scene: number;

  shot: number;

  type: string;

  lens: string;

  movement: string;

  duration: string;

  objective: string;

}

export class ShotListBuilder {

  build(
    storyboard: StoryboardScene[]
  ): Shot[] {

    return storyboard.map((scene) => ({

      scene: scene.scene,

      shot: scene.scene,

      type: scene.camera,

      lens: "35mm",

      movement: scene.movement,

      duration: scene.duration,

      objective: scene.description,

    }));

  }

}