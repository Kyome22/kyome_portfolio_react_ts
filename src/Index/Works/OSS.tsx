import React from "react";
import { useTranslation } from "react-i18next";
import { OSSEnum } from "./OSSEnum";
import oss from "../json/oss.json";
import "./OSS.css";

type LinkEnumValue = {
  title: string;
  url: string;
};

export function OSS() {
  const { t } = useTranslation();

  const enums = (oss as LinkEnumValue[]).map(({ title, url }, i) => (
    <OSSEnum key={`oss-${i}`} title={title} url={url} content={t(title)} />
  ));

  return (
    <div className="oss">
      <h3 className="sub-title">{t("oss_title")}</h3>
      <div className="enums">{enums}</div>
    </div>
  );
}
