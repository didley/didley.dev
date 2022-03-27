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
      title: "Picks",
      repoUrl: "https://github.com/didley/picks",
      liveUrl: { url: "https://picks.didley.dev/", title: "Live Site" },
      description: "",
      images: [
        "https://github.com/didley/picks/raw/dev/demo/picks-profile.gif",
      ],
      used: {
        concepts: ["testing", "asyncStateManagement", "auth"],
        frontend: ["redux", "sagas", "react"],
        backend: ["mongo", "express", "node"],
      },
    },
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
        concepts: null,
        frontend: ["reactQuery", "react", "JS"],
        backend: ["mongo", "express", "node"],
      },
    },
    {
      title: "Life Point Tracker",
      repoUrl: "https://github.com/didley/lp-track",
      liveUrl: { url: "https://track-lp.didley.dev/", title: "Live Site" },
      description: "",
      images: ["https://github.com/didley/lp-track/raw/dev/demo/lp-track.gif"],
      used: {
        concepts: null,
        frontend: ["TS"],
        backend: null,
      },
    },
  ],
};
