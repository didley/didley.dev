export type Concepts =
  | "Testing"
  | "Global State Management"
  | "Async State Management"
  | "Backend"
  | "No SQL";

export type Tools =
  | "JavaScript"
  | "TypeScript"
  | "React"
  | "Redux"
  | "React Native"
  | "React Testing Library"
  | "React Query"
  | "Node"
  | "ExpressJS"
  | "MongoDB";

export type Project = {
  title: string;
  repoUrl: string;
  liveUrl?: { url: string; title: string };
  description?: string;
  images?: string[];
  used: {
    concepts?: Concepts[];
    frontend?: Tools[];
    backend?: Tools[];
  };
};
