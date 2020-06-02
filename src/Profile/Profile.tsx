import React from "react";
import { useTranslation } from "react-i18next";
import selfie from "../images/selfie.png";
import { ProfileItem } from "./ProfileItem";
import "./Profile.css";

import languages from "../json/languages.json";
import frameworks from "../json/frameworks.json";
import skills from "../json/skills.json";

export function Profile() {
  const { t } = useTranslation();

  return (
    <div className="profile">
      <h2 className="title">{t("profile")}</h2>
      <table className="container">
        <tbody>
          <tr>
            <td className="left">
              <img src={selfie} alt="selfieImage" />
            </td>
            <td className="right">
              <h3 className="subTitle">{t("introduction_title")}</h3>
              <p className="introduction">
                {t("introduction_text1")}
                <a href="https://twitter.com/Kyomesuke\">@Kyomesuke</a>
                {t("introduction_text2")}
              </p>
              <p className="introduction">
                {t("introduction_text3")}
                <a href="https://cruel.org/freeware/hacker.html">
                  {t("hacker")}
                </a>
                {t("introduction_text4")}
              </p>
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
