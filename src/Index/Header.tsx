import React from "react";
import "./Header.css";
import { useTranslation } from "react-i18next";
import AnchorLink from "react-anchor-link-smooth-scroll";

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
          src={"images/kyome_terrier.png"}
          alt="dog icon"
        />
      </div>
      <h2 className="title">Takuto Nakamura's Portfolio</h2>
      <h3 className="language" onClick={onLangChange}>
        {t("language")}
      </h3>
      <AnchorLink href="#profileSection" offset="80">
        <h3>{t("profile")}</h3>
      </AnchorLink>
      <AnchorLink href="#worksSection" offset="80">
        <h3>{t("works")}</h3>
      </AnchorLink>
      <h3
        className="articles"
        onClick={() => {
          window.location.href = "./articles.html";
        }}
      >
        {t("articles")}
      </h3>
      <AnchorLink href="#linksSection" offset="80">
        <h3 className="last">{t("links")}</h3>
      </AnchorLink>
    </div>
  );
}
