import { Project } from "./types";
import gardenManagerGIF from "./images/gardenManagerDemo.gif";

type Data = {
  message?: string;
  lookingForWork: boolean;
  socials: {
    email?: string;
    twitter?: string;
    gitHub?: string;
    linkedIn?: string;
  };
  projects: Project[];
};

export const data: Data = {
  message: "Hello and welcome",
  lookingForWork: true,
  socials: {
    email: "didley.dev@gmail.com",
    twitter: "_didley",
    gitHub: "didley",
    linkedIn: "didleyDev",
  },
  projects: [
    {
      title: "Garden Manager",
      repoUrl: "https://github.com/Cliffsters-Inc/garden-manager-native",
      description:
        "A React Native app built in collaboration with another developer via GitHub. Users can track their garden creating progress logs for their plants.",
      images: [gardenManagerGIF],
      used: {
        concepts: ["collaboration", "globalState"],
        frontend: ["reactNative", "TS", "redux"],
        backend: null,
      },
    },
    {
      title: "Picks",
      repoUrl: "https://github.com/didley/picks",
      liveUrl: { url: "https://staging.picks.didley.dev/", title: "Live Site" },
      description:
        "A web based link sharing app. Users can create cards of 5 URLs, a preview is generated for each link and can then be posted to their profile.",
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
      repoUrl: "https://github.com/didley/calorie-tracker/",
      liveUrl: { url: "https://track-cals.didley.dev/", title: "Live Site" },
      description:
        "A web based calorie tracking app. When authenticated data is received via my API, when accessed as a guest the browsers session storage is used.",
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
      description:
        "A web based life point tracking app. I've tested approaches in making the app feel more mobile native such as disabling text selection across the app and disabling browser UI when the app is installed.",
      images: ["https://github.com/didley/lp-track/raw/dev/demo/lp-track.gif"],
      used: {
        concepts: null,
        frontend: ["TS", "react", "reactContext"],
        backend: null,
      },
    },
  ],
};
