import React from "react";
import { useTranslation } from "react-i18next";
import { OSSEnum, OSSInfo } from "./OSSEnum";
import oss from "../json/oss.json";
import "./OSS.css";

export function OSS() {
  const { t } = useTranslation();

  const enums = (oss as OSSInfo[]).map((info, i) => (
    <OSSEnum key={`oss-${i}`} info={info} />
  ));

  return (
    <div className="oss">
      <h3 className="sub-title">{t("oss_title")}</h3>
      <div className="enums">{enums}</div>
    </div>
  );
}
