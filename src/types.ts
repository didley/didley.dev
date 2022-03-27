export const usedTech = {
  testing: ["Testing"],
  globalState: ["Global State Management"],
  asyncStateManagement: ["Async State Management"],
  noSQL: ["No SQL"],
  auth: ["Authentication"],

  react: ["React", "#61dafb"],
  reactQuery: ["React Query", "#ff4154"],
  redux: ["Redux", "#764abc"],
  sagas: ["Redux Sagas", "#86d46b"],

  node: ["Node", "#026e00"],
  express: ["ExpressJS", "#606060"],
  mongo: ["MongoDB", "#003430"],

  TS: ["TypeScript", "#3178c6"],
  JS: ["JavaScript", "#fcdc00"],
  jest: ["Jest", "#15c213"],
};

export type UsedTech = typeof usedTech;
export type UsedTechKey = keyof UsedTech;

export type Project = {
  title: string;
  repoUrl: string;
  liveUrl?: { url: string; title: "Live Site" | "Live App" };
  description?: string;
  images?: string[];
  used: {
    concepts: UsedTechKey[] | null;
    frontend: UsedTechKey[] | null;
    backend: UsedTechKey[] | null;
  };
};
