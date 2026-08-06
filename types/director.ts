export interface DirectorRequest {
  title: string;
  objective: string;
  audience: string;
  platform: string;
  style: string;
  duration: string;
  image?: string;
}

export interface DirectorResponse {
  summary: string;
  script: string;
  storyboard: string[];
  instagram: string;
  hashtags: string[];
}