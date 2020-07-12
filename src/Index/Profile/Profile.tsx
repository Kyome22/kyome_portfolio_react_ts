import React from "react";
import { useTranslation } from "react-i18next";
import { ProfileItem } from "./ProfileItem";
import "./Profile.css";
import languages from "../json/languages.json";
import frameworks from "../json/frameworks.json";
import skills from "../json/skills.json";

export function Profile() {
  const { t } = useTranslation();

  const insertLink = (text: string, link: string, linkText: string) => {
    const texts = text.split("TAG");
    return (
      <p className="introduction">
        {texts[0]}
        <a href={link}>{linkText}</a>
        {texts[1]}
      </p>
    );
  };

  return (
    <div className="profile" id="profileSection">
      <h2 className="title">{t("profile")}</h2>
      <table className="container">
        <tbody>
          <tr>
            <td className="left">
              <img src={"images/selfie.png"} alt="selfieImage" />
            </td>
            <td className="right">
              <h3 className="sub-title">{t("introduction_title")}</h3>
              {insertLink(
                t("introduction_text1"),
                "https://twitter.com/Kyomesuke",
                "@Kyomesuke"
              )}
              {insertLink(
                t("introduction_text2"),
                "https://cruel.org/freeware/hacker.html",
                t("hacker")
              )}
              <ProfileItem title={t("languages_title")} values={languages} />
              <ProfileItem title={t("frameworks_title")} values={frameworks} />
              <ProfileItem title={t("skills_title")} values={skills} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
