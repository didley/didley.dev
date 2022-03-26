import * as React from "react";
import { FaGithub, FaTwitter, FaMapMarkerAlt } from "react-icons/fa";

export const SocialsSection = () => {
  return (
    <>
      <div className="border-l-2 border-red-400 pl-1 w-auto">
        <img
          src="https://www.gravatar.com/avatar/6fb1ff473f9c4c08f22293365c1e569a?s=200"
          className="rounded-full w-12 sm:w-32 border"
        />
      </div>
      <div className="flex">
        <span role="img" aria-label="waving hand" className="mr-2">
          👋
        </span>
        <h1 className="font-bold">Hey, I'm Dylan</h1>
      </div>
      <a
        href="https://github.com/didley"
        className="text-gray-700 flex items-center"
      >
        <FaGithub className="mr-2" />
        @didley
      </a>
      <a
        href="https://twitter.com/_didley"
        className="text-blue-500 flex items-center"
      >
        <FaTwitter className="mr-2" />
        @_didley
      </a>

      <p className="flex items-center">
        <FaMapMarkerAlt className="mr-2 text-red-500" /> Melbourne Australia
      </p>
    </>
  );
};
