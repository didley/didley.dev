import * as React from "react";
import { Projects } from "../components/Projects";
import { SocialsSection } from "../components/SocialsSection";

const IndexPage = () => {
  return (
    <main className="h-full w-full sm:py-5 py-2 sm:px-10 px-2 selection:bg-purple-200">
      <div className="absolute top-0 right-0 sm:mr-10 mr-2 sm:mt-5 mt-1 flex flex-col items-end">
        <div className="flex items-center justify-end">
          <span className="sm:text-5xl text-lg text-right font-extrabold italic text-gray-900 pr-1">
            didley.dev
          </span>
          <div className="w-3 sm:w-6 h-5 sm:h-10 bg-red-500 animate-pulse" />
        </div>
        <span className="text-xs">Software Dev</span>
      </div>
      <SocialsSection />
      <Projects />
    </main>
  );
};

export default IndexPage;
