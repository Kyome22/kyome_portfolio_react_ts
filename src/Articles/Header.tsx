import React from "react";
import "./Header.css";

type Props = {
  title: string;
};

export function Header(props: Props) {
  const { title } = props;
  return (
    <div className="header">
      <div className="terrier">
        <img
          src={"images/kyome_terrier.png"}
          alt="dog icon"
          onClick={() => {
            window.location.href = "./index.html";
          }}
        />
      </div>
      <h2 className="title">{title}</h2>
    </div>
  );
}
