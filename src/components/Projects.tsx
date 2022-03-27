import * as React from "react";
import { UsedTechList } from "./UsedTechList";
import { data } from "../data";
import { StaticImage } from "gatsby-plugin-image";
// import gif from "../static/cal-tracker-diary.gif";

export const Projects = () => {
  const { projects } = data;
  return (
    <div className="">
      <div className="bg-white max-w-2xl mt-10 m-auto p-5 rounded-sm shadow-sm">
        <h2 className="font-extrabold italic text-4xl text-gray-900 uppercase mb-3">
          Projects
        </h2>
        {projects.map((proj) => {
          return (
            <div key={proj.title}>
              <h3 className="font-extrabold italic text-xl">{proj?.title}</h3>

              {proj.images && (
                <div className="flex justify-evenly flex-wrap">
                  {proj?.images.map((img) => (
                    <img
                      src={img}
                      key={img}
                      alt={proj.title}
                      width={200}
                      className="rounded-lg object-cover m-1"
                    />
                  ))}
                </div>
              )}

              <a href={proj?.liveUrl?.url}>{proj?.liveUrl?.title}</a>
              <a href={proj?.repoUrl}>GitHub Repo</a>
              <UsedTechList used={proj.used} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
