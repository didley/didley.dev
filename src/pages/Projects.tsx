import * as React from "react";

type concepts =
  | "Testing"
  | "Global State Management"
  | "Async State Management"
  | "Backend"
  | "No SQL";

type tools =
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

const projects = [
  {
    title: "Calorie Tracker",
    repoUrl: "https://github.com/didley/calorie-tracker/blob/master/README.md",
    liveUrl: { url: "https://track-cals.didley.dev/", title: "Live Site" },
    description: "",
    images: [
      "../images/cal-tracker-diary.gif",
      "../images/cal-tracker-addFood.gif",
    ],
    conceptsUsed: [""],
    toolsUsed: [""],
  },
  {
    title: "",
    repoUrl: "",
    liveUrl: { url: "", title: "" },
    description: "",
    images: [""],
    techUsed: [""],
  },
];

export const Projects = () => {
  return (
    <div className="">
      <div className="bg-white max-w-2xl mt-10 m-auto p-5">
        <h2 className="font-extrabold italic text-4xl text-gray-900 uppercase">
          Projects
        </h2>
        {projects.map((proj) => (
          <>
            <h3>{proj?.title}</h3>

            {proj.images &&
              proj?.images.map((img) => <img src={img} width="250" />)}

            <a href={proj?.liveUrl.url}>{proj?.liveUrl.title}</a>
            <a href={proj?.repoUrl}>GitHub Repo</a>
            <h4>primary tech</h4>
            <ul>
              {proj.conceptsUsed &&
                proj?.conceptsUsed.map((concept) => <li>{concept}</li>)}
            </ul>
            <ul>
              {proj.toolsUsed && proj?.toolsUsed.map((tool) => <li>{tool}</li>)}
            </ul>
          </>
        ))}
      </div>
    </div>
  );
};
