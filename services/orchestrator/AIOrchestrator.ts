import { DirectorRequest, DirectorResponse } from "@/types/director";

import {
  ImageAnalyzer,
  ImageAnalysis,
} from "../vision/ImageAnalyzer";

import {
  StoryboardBuilder,
  StoryboardScene,
} from "../storyboard/StoryboardBuilder";

import {
  CinematicPromptBuilder,
  CinematicPrompt,
} from "../storyboard/CinematicPromptBuilder";

import {
  Veo3PromptBuilder,
  VeoPrompt,
} from "../storyboard/Veo3PromptBuilder";

import {
  RunwayPromptBuilder,
  RunwayPrompt,
} from "../storyboard/RunwayPromptBuilder";

import {
  KlingPromptBuilder,
  KlingPrompt,
} from "../storyboard/KlingPromptBuilder";

export interface AIProject {

  analysis: ImageAnalysis;

  director: DirectorResponse;

  storyboard: StoryboardScene[];

  cinematic: CinematicPrompt[];

  veo3: VeoPrompt[];

  runway: RunwayPrompt[];

  kling: KlingPrompt[];

}

export class AIOrchestrator {

  async execute(
    request: DirectorRequest,
    director: DirectorResponse
  ): Promise<AIProject> {

    const analysis = await new ImageAnalyzer().analyze(
      request.image
    );

    const storyboard =
      new StoryboardBuilder().build(
        analysis
      );

    return {

      analysis,

      director,

      storyboard,

      cinematic:
        new CinematicPromptBuilder().build(
          storyboard
        ),

      veo3:
        new Veo3PromptBuilder().build(
          storyboard
        ),

      runway:
        new RunwayPromptBuilder().build(
          storyboard
        ),

      kling:
        new KlingPromptBuilder().build(
          storyboard
        ),

    };

  }

}