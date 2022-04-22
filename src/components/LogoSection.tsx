import * as React from "react";

export const LogoSection = () => {
  return (
    <div className="absolute top-0 right-0 sm:mr-10 mr-2 sm:mt-5 mt-1 flex flex-col items-end">
      <div className="flex items-center justify-end">
        <span className="sm:text-5xl text-3xl text-right font-extrabold italic text-gray-900 pr-1">
          didley.dev
        </span>
        <div className="w-3 sm:w-6 h-5 sm:h-10 bg-red-500 animate-pulse" />
      </div>
      <span className="text-xs sm:text-sm">Software Dev</span>
    </div>
  );
};
