import React from "react";
import { useTranslation } from "react-i18next";
import { LinkEnum, LinkEnumValue } from "./LinkEnum";
import "./Links.css";
import links from "../json/links.json";

export function Links() {
  const { t } = useTranslation();

  const enums = (links as LinkEnumValue[]).map(({ title, url, content }, i) => (
    <LinkEnum key={i} title={title} url={url} content={content} />
  ));

  return (
    <div className="links" id="linksSection">
      <h2 className="title">{t("links")}</h2>
      <div className="enums">{enums}</div>
    </div>
  );
}
