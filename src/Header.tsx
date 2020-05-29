import React from "react";
import "./Header.css";
import terrier from "./images/kyome_terrier.png";

type Props = {
  language: string;
  profile: string;
  works: string;
  articles: string;
  contact: string;
};

export function Header(props: Props) {
  const { language, profile, works, articles, contact } = props;

  return (
    <div className="header">
      <canvas id="terrier" />
      <h2 className="title">Takuto Nakamura's Portfolio</h2>
      <h3>{language}</h3>
      <h3>{profile}</h3>
      <h3>{works}</h3>
      <h3>{articles}</h3>
      <h3>{contact}</h3>
    </div>
  );
}
