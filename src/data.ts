import { Project } from "./types";

type Data = {
  projects: Project[];
};

export const data: Data = {
  projects: [
    {
      title: "Calorie Tracker",
      repoUrl:
        "https://github.com/didley/calorie-tracker/blob/master/README.md",
      liveUrl: { url: "https://track-cals.didley.dev/", title: "Live Site" },
      description: "",
      images: [
        "../images/cal-tracker-diary.gif",
        "../images/cal-tracker-addFood.gif",
      ],
      used: {
        concepts: ["asyncStateManagement"],
        frontend: ["reactQuery", "react", "JS"],
        backend: ["mongo", "express", "node"],
      },
    },
  ],
};
