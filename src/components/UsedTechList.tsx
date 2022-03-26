import * as React from "react";
import { usedTech, Project, UsedTechKey } from "../types";
import { Gem } from "./Gem";

type Props = {
  used: Project["used"];
};

const listCB = (item: UsedTechKey | null) => {
  if (item === null) return;

  const [name, color] = usedTech[item];

  return (
    <li className="flex items-center">
      {<Gem color={color} style={{ margin: 5 }} />}
      {name}
    </li>
  );
};

export const UsedTechList = ({ used }: Props) => {
  return used ? (
    <div className="flex items-stretch flex-wrap">
      {used.concepts && (
        <div className={styles.colContainer}>
          <h6 className={styles.heading}>Concepts</h6>
          <ul>{used.concepts.map(listCB)}</ul>
        </div>
      )}
      {used.frontend && (
        <div className={styles.colContainer}>
          <h6 className={styles.heading}>Front End Tools</h6>
          <ul>{used.frontend.map(listCB)}</ul>
        </div>
      )}
      {used.backend && (
        <div className={styles.colContainer}>
          <h6 className={styles.heading}>Back End Tools</h6>
          <ul>{used.backend.map(listCB)}</ul>
        </div>
      )}
    </div>
  ) : null;
};

const styles = {
  colContainer: "grow mr-24 mb-3",
  heading: "text-gray-500",
};
