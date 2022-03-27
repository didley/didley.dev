import { Project } from "./types";

type Data = {
  socials: { email: string; twitter: string; gitHub: string };
  projects: Project[];
};

export const data: Data = {
  socials: {
    email: "didley.dev@gmail.com",
    twitter: "_didley",
    gitHub: "didley",
  },
  projects: [
    {
      title: "Calorie Tracker",
      repoUrl:
        "https://github.com/didley/calorie-tracker/blob/master/README.md",
      liveUrl: { url: "https://track-cals.didley.dev/", title: "Live Site" },
      description: "",
      images: [
        "https://github.com/didley/calorie-tracker/raw/master/demo/diary.gif",
        "https://github.com/didley/calorie-tracker/raw/master/demo/addFood.gif",
      ],
      used: {
        concepts: ["asyncStateManagement"],
        frontend: ["reactQuery", "react", "JS"],
        backend: ["mongo", "express", "node"],
      },
    },
  ],
};
