import React from "react";
import "./LinkEnum.css";

export type LinkEnumValue = {
  title: string;
  url: string;
  content: string;
};

export function LinkEnum(values: LinkEnumValue) {
  const { title, url, content } = values;

  if (url === "") {
    return (
      <p className="link-enum">
        <span className="title">{title}</span>
        <span>{content}</span>
      </p>
    );
  } else {
    return (
      <p className="link-enum">
        <span className="title">{title}</span>
        <a href={url}>{content}</a>
      </p>
    );
  }
}
