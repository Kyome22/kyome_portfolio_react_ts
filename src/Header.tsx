import React from "react";
import "./Header.css";
import { useTranslation } from "react-i18next";

type Props = {
  onLangChange: () => void;
};

export function Header(props: Props) {
  const { onLangChange } = props;
  const { t } = useTranslation();

  return (
    <div className="header">
      <div className="terrier-container">
        <img
          className="terrier-target"
          src={`${process.env.PUBLIC_URL}/images/kyome_terrier.png`}
          alt="dog icon"
        />
      </div>
      <h2 className="title">Takuto Nakamura's Portfolio</h2>
      <h3 onClick={onLangChange}>{t("language")}</h3>
      <h3>{t("profile")}</h3>
      <h3>{t("works")}</h3>
      <h3>{t("articles")}</h3>
      <h3 className="last">{t("links")}</h3>
    </div>
  );
}
