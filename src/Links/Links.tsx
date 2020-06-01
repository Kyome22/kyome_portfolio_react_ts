import React from "react";
import { LinkEnumValue, LinkEnum } from "./LinkEnum";
import "./Links.css";
import links from "../json/links.json";

type Props = {
  title: string;
};

export function Links(props: Props) {
  const { title } = props;

  const enums = (links as LinkEnumValue[]).map(({ title, url, content }) => (
    <LinkEnum title={title} url={url} content={content} />
  ));

  return (
    <div className="links">
      <h2 className="title">{title}</h2>
      <div className="enums">{enums}</div>
    </div>
  );
}
