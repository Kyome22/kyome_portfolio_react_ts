import React from "react";
import selfie from "../images/selfie.png";
import { ProfileItem } from "./ProfileItem";
import "./Profile.css";
import languages from "../json/languages.json";
import frameworks from "../json/frameworks.json";
import skills from "../json/skills.json";

type Props = {
  title: string;
  introduction_title: string;
  introduction_text1: string;
  introduction_text2: string;
  introduction_text3: string;
  introduction_text4: string;
  hacker: string;
  languages_title: string;
  frameworks_title: string;
  skills_title: string;
};

export function Profile(props: Props) {
  const {
    title,
    introduction_title,
    introduction_text1,
    introduction_text2,
    introduction_text3,
    introduction_text4,
    hacker,
    languages_title,
    frameworks_title,
    skills_title,
  } = props;

  return (
    <div className="profile">
      <h2 className="title">{title}</h2>
      <table className="container">
        <tbody>
          <tr>
            <td className="left">
              <img src={selfie} alt="dog icon" />
            </td>
            <td className="right">
              <h3 className="subTitle">{introduction_title}</h3>
              <p className="introduction">
                {introduction_text1}
                <a href="https://twitter.com/Kyomesuke\">@Kyomesuke</a>
                {introduction_text2}
              </p>
              <p className="introduction">
                {introduction_text3}
                <a href="https://cruel.org/freeware/hacker.html">{hacker}</a>
                {introduction_text4}
              </p>
              <ProfileItem title={languages_title} values={languages} />
              <ProfileItem title={frameworks_title} values={frameworks} />
              <ProfileItem title={skills_title} values={skills} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
