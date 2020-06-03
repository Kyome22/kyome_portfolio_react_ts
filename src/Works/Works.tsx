import React from "react";
import { useTranslation } from "react-i18next";
import { OSS } from "./OSS";
import { Published, PublishedEnumValue } from "./Published";
import "./Works.css";
import jaWorks from "../json/works/ja.json";
import enWorks from "../json/works/en.json";

type WorksData = {
  macOS: PublishedEnumValue[];
  iOS: PublishedEnumValue[];
  android: PublishedEnumValue[];
  web: PublishedEnumValue[];
};

type Props = {
  lang: string;
};

export function Works(props: Props) {
  const { lang } = props;
  const { t } = useTranslation();

  const worksData = (lang === "en" ? enWorks : jaWorks) as WorksData;

  return (
    <div className="works">
      <h2 className="title">{t("works")}</h2>
      <OSS />
      <Published title={t("macOS_title")} values={worksData.macOS} />
      <Published title={t("iOS_title")} values={worksData.iOS} />
      <Published title={t("web_title")} values={worksData.web} />
    </div>
  );
}
