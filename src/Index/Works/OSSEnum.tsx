import React from "react";
import "./OSSEnum.css";

type Props = {
  title: string;
  url: string;
  content: string;
};

export function OSSEnum(props: Props) {
  const { title, url, content } = props;

  return (
    <p className="ossEnum">
      <a href={url}>{title}:</a>
      {content}
    </p>
  );
}
