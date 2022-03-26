import * as React from "react";
import { UsedTechList } from "./UsedTechList";
import { data } from "../data";

export const Projects = () => {
  const { projects } = data;
  return (
    <div className="">
      <div className="bg-white max-w-2xl mt-10 m-auto p-5 rounded-sm shadow-sm">
        <h2 className="font-extrabold italic text-4xl text-gray-900 uppercase">
          Projects
        </h2>
        {projects.map((proj) => (
          <>
            <h3 className="font-extrabold italic text-xl">{proj?.title}</h3>

            {proj.images &&
              proj?.images.map((img) => <img src={img} width="250" />)}

            <a href={proj?.liveUrl?.url}>{proj?.liveUrl?.title}</a>
            <a href={proj?.repoUrl}>GitHub Repo</a>
            <UsedTechList used={proj.used} />
          </>
        ))}
      </div>
    </div>
  );
};
