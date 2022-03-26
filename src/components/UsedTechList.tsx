import * as React from "react";
import { Concepts, Tools, Project } from "../types";
import { Gem } from "./Gem";

type Props = {
  used: Project["used"];
};

const listCB = (item: Concepts | Tools) => {
  let gemColor = "#000";
  switch (item) {
    case "JavaScript":
      gemColor = "#fffc5f";
    default:
      break;
  }

  return (
    <li className="flex items-center">
      {<Gem color={gemColor} style={{ marginRight: 4 }} />}
      {item}
    </li>
  );
};

export const UsedTechList = ({ used }: Props) => {
  return used ? (
    <>
      {used.concepts && <ul>{used.concepts.map(listCB)}</ul>}
      {used.frontend && <ul>{used.frontend.map(listCB)}</ul>}
      {used.backend && <ul>{used.backend.map(listCB)}</ul>}
    </>
  ) : null;
};
