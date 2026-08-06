import { StoryboardScene } from "@/services/storyboard/StoryboardBuilder";

export interface TimelineItem {

  scene: number;

  start: number;

  end: number;

  duration: number;

  title: string;

  description: string;

}

export class TimelineBuilder {

  build(
    storyboard: StoryboardScene[]
  ): TimelineItem[] {

    let current = 0;

    return storyboard.map((scene) => {

      const duration = Number.parseInt(scene.duration) || 5;

      const item: TimelineItem = {

        scene: scene.scene,

        start: current,

        end: current + duration,

        duration,

        title: scene.title,

        description: scene.description,

      };

      current += duration;

      return item;

    });

  }

}