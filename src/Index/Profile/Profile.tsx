import React from "react";
import { useTranslation } from "react-i18next";
import { ProfileItem } from "./ProfileItem";
import "./Profile.css";
import languages from "../json/languages.json";
import frameworks from "../json/frameworks.json";
import skills from "../json/skills.json";

export function Profile() {
  const { t } = useTranslation();

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
              <h3 className="subTitle">{t("introduction_title")}</h3>

              <p
                className="introduction"
                dangerouslySetInnerHTML={{ __html: t("introduction_text1") }}
              />
              <p
                className="introduction"
                dangerouslySetInnerHTML={{ __html: t("introduction_text2") }}
              />
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
