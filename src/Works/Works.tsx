import React from "react";
import { useTranslation } from "react-i18next";
import { OSS } from "./OSS";
import "./Works.css";

export function Works() {
  const { t } = useTranslation();

  return (
    <div className="works">
      <h2 className="title">{t("works")}</h2>
      <OSS />
    </div>
  );
}
