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

  const enums = (oss as LinkEnumValue[]).map(({ title, url }) => (
    <OSSEnum title={title} url={url} content={t(title)} />
  ));

  return (
    <div className="oss">
      <h3 className="title">{t("oss_title")}</h3>
      {enums}
    </div>
  );
}
