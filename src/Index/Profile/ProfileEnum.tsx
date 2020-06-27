import React from "react";
import "./ProfileEnum.css";

export type ProfileEnumValue = {
  title: string;
  content: string;
};

export function ProfileEnum(value: ProfileEnumValue) {
  const { title, content } = value;

  return (
    <p className="profileEnum">
      <span className="title">{title}</span>
      <span>{content}</span>
    </p>
  );
}
