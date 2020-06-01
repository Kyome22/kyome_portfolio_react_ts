import React from "react";
import "./ProfileEnum.css";

export type EnumValue = {
  title: string;
  content: string;
};

export function ProfileEnum(value: EnumValue) {
  const { title, content } = value;

  return (
    <p className="profileEnum">
      <span className="title">{title}</span>
      <span>{content}</span>
    </p>
  );
}
