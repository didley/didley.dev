import * as React from "react";

type Props = {
  color?: string;
  size?: number;
  style?: React.CSSProperties;
};

export const Gem = ({ color = "#000000", size = 1, style }: Props) => {
  const scale = (valToScale: number) => valToScale * size;

  return (
    <div style={{ margin: scale(2), ...style }}>
      <div style={{ transform: "rotate(-45deg)" }}>
        <div
          style={{
            width: scale(10),
            height: scale(10),
            backgroundColor: color,
            borderRadius: scale(0.5),
          }}
        >
          <div
            style={{
              borderTop: `${scale(5)}px solid transparent`,
              borderLeft: `${scale(5)}px solid #ffffff`,
              borderBottom: `${scale(5)}px solid transparent`,
              opacity: 0.5,
            }}
          />
        </div>
      </div>
    </div>
  );
};
