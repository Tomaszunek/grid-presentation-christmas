import React from "react";

type LittleCodeSpanProps = {
  children: React.ReactNode;
};

export default function LittleCodeSpan({ children }: LittleCodeSpanProps) {
  return <span className="littleCode">{children}</span>;
}
