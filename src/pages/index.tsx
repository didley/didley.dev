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
      "./assets/cal-tracker-diary.gif",
      "./assets/cal-tracker-addFood.gif",
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

const IndexPage = () => {
  return (
    <main>
      <nav>
        <p className="text-3xl">didley.dev</p>
        <div className="">
          <a href="https://github.com/didley">GitHub @didley</a>
          <a href="https://twitter.com/_didley">Twitter @_didley</a>
        </div>
      </nav>
      <img src="https://www.gravatar.com/avatar/6fb1ff473f9c4c08f22293365c1e569a?s=200" />
      <h1>👋 I'm Dylan</h1>
      <p>Location: Melbourne Australia</p>

      <h2>Currently working on</h2>
      <h2>Projects</h2>
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
    </main>
  );
};

export default IndexPage;
