import React from "react";
import "./Header.css";
import terrier from "./images/kyome_terrier.png";

type Props = {
  language: string;
  profile: string;
  works: string;
  articles: string;
  contact: string;
  onLangChange: () => void;
};

export function Header(props: Props) {
  const { language, profile, works, articles, contact, onLangChange } = props;

  return (
    <div className="header">
      <div className="terrier-container">
        <img className="terrier-target" src={terrier} alt="dog icon" />
      </div>
      <h2 className="title">Takuto Nakamura's Portfolio</h2>
      <h3 onClick={onLangChange}>{language}</h3>
      <h3>{profile}</h3>
      <h3>{works}</h3>
      <h3>{articles}</h3>
      <h3 className="last">{contact}</h3>
    </div>
  );
}
