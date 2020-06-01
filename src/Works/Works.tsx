import React from "react";
import "./Works.css";

type Props = {
  title: string;
};

export function Works(props: Props) {
  const { title } = props;

  return (
    <div className="works">
      <h2 className="title">{title}</h2>
    </div>
  );
}
