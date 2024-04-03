import * as React from "react";
import { UsedTechList } from "./UsedTechList";
import { data } from "../data";
import { FaGithub } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { Project } from "../types";

export const Projects = () =>
  <div className="bg-white max-w-2xl mt-4 m-auto p-5 rounded-sm shadow-sm">
    <h2 className="font-extrabold italic text-4xl text-gray-900 uppercase mb-3">
      Projects
    </h2>
    {data.projects.map((proj) => <ProjectSection proj={proj} />)}
  </div>


const ProjectSection = ({ proj }: { proj: Project }) =>
  <div key={proj.title} className="mb-3 border-b">
    <ImagesSection images={proj.images} projTitle={proj.title} />
    <div className="flex flex-col gap-3">
      <div className="flex flex-row items-center justify-between my-2 flex-wrap">
        <Title title={proj.title} />
        <LinksSection liveUrl={proj.liveUrl} repoUrl={proj.repoUrl} />
      </div>
      <Description description={proj.description} />
      <UsedTechList used={proj.used} />
    </div>
  </div>;

const ImagesSection = ({ images, projTitle }: { images: Project['images'], projTitle: Project['title'] }) =>
  <div>
    {images && (
      <div className="flex justify-evenly flex-wrap">
        {images.map((img, i) => (
          <img
            src={img}
            key={img}
            alt={`${projTitle} example ${i + 1}`}
            className="rounded-lg object-cover object-top m-1 sm:w-48 w-36 border"
          />
        ))}
      </div>
    )}
  </div>

const Title = ({ title }: { title: Project['title'] }) =>
  <h3 className="font-extrabold italic text-xl">{title}</h3>

const LinksSection = ({ liveUrl, repoUrl }: { liveUrl: Project['liveUrl'], repoUrl: Project['repoUrl'] }) =>
  <div className="flex items-center">
    {liveUrl?.url && (
      <a href={liveUrl.url} className="flex items-center mr-3" >
        <BiWorld className="mr-1" size={17} />
        {liveUrl.title}
      </a>
    )}
    {repoUrl && (
      <a href={repoUrl} className="flex items-center">
        <FaGithub className="mr-1" size={15} />
        GitHub Repo
      </a>
    )}
  </div>


const Description = ({ description }: { description: string | undefined }) =>
  <div className="text-xs mb-2 whitespace-pre-line">{description}</div>
