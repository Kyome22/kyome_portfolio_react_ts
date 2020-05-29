import React from "react";
import "./Profile.css";
import selfie from "./images/selfie.png";

type Props = {
  title: string;
  introduction_title: string;
  introduction_text: string;
  languages_title: string;
  frameworks_title: string;
  skills_title: string;
};

export function Profile(props: Props) {
  const {
    title,
    introduction_title,
    introduction_text,
    languages_title,
    frameworks_title,
    skills_title,
  } = props;

  return (
    <div className="profile">
      <h2 className="title">{title}</h2>
      <table className="container">
        <tr>
          <td className="left">
            <img src={selfie} />
          </td>
          <td className="right">
            <h3 className="subTitle">{introduction_title}</h3>
            <p>{introduction_text}</p>
            <h3 className="subTitle">{languages_title}</h3>
            <h3 className="subTitle">{frameworks_title}</h3>
            <h3 className="subTitle">{skills_title}</h3>
          </td>
        </tr>
      </table>
    </div>
  );
}
