import React from "react";
import "./ProfileEnum.css";

export type ProfileEnumValue = {
  title: string;
  content: string;
};

export function ProfileEnum(value: ProfileEnumValue) {
  const { title, content } = value;

  return (
    <div className="profile-enum">
      <p className="title">{title}</p>
      <p className="content">{content}</p>
    </div>
  );
}
