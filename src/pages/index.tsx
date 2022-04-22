import * as React from "react";
import { LogoSection } from "../components/LogoSection";
import { Projects } from "../components/Projects";
import { SocialsSection } from "../components/SocialsSection";

const IndexPage = () => {
  return (
    <main className="h-full w-full sm:py-5 py-2 sm:px-10 px-2 selection:bg-purple-200">
      <SocialsSection />
      <LogoSection />
      <Projects />
    </main>
  );
};

export default IndexPage;
