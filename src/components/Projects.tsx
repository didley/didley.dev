import * as React from "react";
import { UsedTechList } from "./UsedTechList";
import { data } from "../data";
import { FaGithub } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

export const Projects = () => {
  const { projects } = data;
  return (
    <div>
      <div className="bg-white max-w-2xl mt-4 m-auto p-5 rounded-sm shadow-sm">
        <h2 className="font-extrabold italic text-4xl text-gray-900 uppercase mb-3">
          Projects
        </h2>
        {projects.map((proj) => {
          return (
            <div key={proj.title} className="mb-3 border-b">
              {proj.images && (
                <div className="flex justify-evenly flex-wrap">
                  {proj?.images.map((img, i) => (
                    <img
                      src={img}
                      key={img}
                      alt={`${proj.title} example ${i + 1}`}
                      className="rounded-lg object-cover object-top m-1 sm:w-48 w-36 sm:max-h-80 max-h-60 border"
                    />
                  ))}
                </div>
              )}
              <div className="flex items-center justify-between my-2 flex-wrap">
                <h3 className="font-extrabold italic text-xl">{proj?.title}</h3>
                <div className="flex items-center">
                  {proj.liveUrl?.url && (
                    <a
                      href={proj.liveUrl?.url}
                      className="flex items-center mr-3"
                    >
                      <BiWorld className="mr-1" size={17} />
                      {proj.liveUrl?.title}
                    </a>
                  )}
                  {proj?.repoUrl && (
                    <a href={proj?.repoUrl} className="flex items-center">
                      <FaGithub className="mr-1" size={15} />
                      GitHub Repo
                    </a>
                  )}
                </div>
              </div>
              <div className="text-xs mb-2">{proj.description}</div>
              <UsedTechList used={proj.used} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
