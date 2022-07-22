import * as React from "react";
import {
  FaGithub,
  FaTwitter,
  FaMapMarkerAlt,
  FaLinkedin,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { data } from "../data";

export const SocialsSection = () => {
  return (
    <>
      <div className="border-l-2 border-red-400 pl-1 w-auto mb-1">
        <img
          src="https://www.gravatar.com/avatar/6fb1ff473f9c4c08f22293365c1e569a?s=200"
          className="rounded-full w-12 sm:w-32 border"
        />
      </div>
      {data.message && (
        <div className="flex items-center mb-1">
          <p className="font-bold italic">"{data.message}"</p>
        </div>
      )}
      <div className="flex items-center mb-1">
        <p className="text-xs">
          Work status:{" "}
          {data.lookingForWork ? "Looking for work" : "Not looking for work"}
        </p>
      </div>
      <p className="flex items-center mb-1">
        <FaMapMarkerAlt className="mr-1 text-red-500" /> Melbourne
      </p>
      <div className="flex justify-start">
        <a
          href={`https://github.com/${data.socials.gitHub}`}
          className="text-gray-700 flex items-center mr-4"
        >
          <FaGithub className="mr-1" />@{data.socials.gitHub}
        </a>
        <a
          href={`https://linkedin.com/in/${data.socials.linkedIn}`}
          className="text-blue-700 flex items-center mr-4"
        >
          <FaLinkedin className="mr-1" />@{data.socials.linkedIn}
        </a>
        <a
          href={`https://twitter.com/${data.socials.twitter}`}
          className="text-blue-500 flex items-center mr-4"
        >
          <FaTwitter className="mr-1" />@{data.socials.twitter}
        </a>
        <a href={`mailto:${data.socials.email}`} className="flex items-center">
          <FiMail className="mr-1" />
          Email
        </a>
      </div>
    </>
  );
};
