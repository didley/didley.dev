import * as React from "react";
import { Projects } from "./Projects";
import { SocialsSection } from "./SocialsSection";

const IndexPage = () => {
  return (
    <main className="bg-slate-50 h-screen sm:py-5 py-2 sm:px-10 px-3 selection:bg-green-200">
      <div className="absolute top-0 right-0 flex items-center mr-10 mt-5">
        <p className="sm:text-5xl text-lg text-right font-extrabold italic text-gray-900 pr-1">
          didley.dev
        </p>
        <div className="w-6 h-10 bg-red-500 animate-pulse" />
      </div>
      <SocialsSection />
      <Projects />
    </main>
  );
};

export default IndexPage;
