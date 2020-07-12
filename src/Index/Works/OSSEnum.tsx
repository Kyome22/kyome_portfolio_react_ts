import React from "react";
import i18n from "i18next";
import "./OSSEnum.css";

export type OSSInfo = {
  title: string;
  url: string;
  ja_description: string;
  en_description: string;
};

type Props = {
  info: OSSInfo;
};

export function OSSEnum(props: Props) {
  const { title, url, ja_description, en_description } = props.info;
  const lang = i18n.language;
  const description = lang == "en" ? en_description : ja_description;

  return (
    <p className="oss-enum">
      <a href={url}>{title}:</a>
      {description}
    </p>
  );
}
