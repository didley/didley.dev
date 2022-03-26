export const usedTech = {
  testing: ["Testing"],
  globalState: ["Global State Management"],
  asyncStateManagement: ["Async State Management"],
  noSQL: ["No SQL"],
  auth: ["Authentication"],

  react: ["React"],
  reactQuery: ["React Query", "#ff4154"],
  redux: ["Redux"],
  sagas: ["Redux Sagas"],

  node: ["Node", "#026e00"],
  express: ["ExpressJS", "#606060"],
  mongo: ["MongoDB", "#003430"],

  TS: ["TypeScript", "#3178c6"],
  JS: ["JavaScript", "#fcdc00"],
};

export type UsedTech = typeof usedTech;
export type UsedTechKey = keyof UsedTech;

export type Project = {
  title: string;
  repoUrl: string;
  liveUrl?: { url: string; title: string };
  description?: string;
  images?: string[];
  used: {
    concepts: (UsedTechKey | null)[];
    frontend: (UsedTechKey | null)[];
    backend: (UsedTechKey | null)[];
  };
};
