import React from "react";
import "./Header.css";

type Props = {
  language: string;
  profile: string;
  works: string;
  articles: string;
  contact: string;
};

const Test = () => (
  <div>
    <p>Test</p>
  </div>
);

export function Header(props: Props) {
  const { language, profile, works, articles, contact } = props;

  // handleLanguage = () => {
  //     this.setState({
  //         localize
  //     })
  // }

  return (
    <div className="header">
      <div className="left-elements">
        <h2 className="title">Takuto Nakamura's Portfolio</h2>
      </div>

      <div className="right-elements">
        <h2>{language}</h2>
        <h2>{profile}</h2>
        <h2>{works}</h2>
        <h2>{articles}</h2>
        <h2>{contact}</h2>
      </div>
    </div>
  );
}
