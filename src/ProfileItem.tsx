import React from "react";
import { EnumValue, ProfileEnum } from "./ProfileEnum";
import "./ProfileItem.css";

type Props = {
  title: string;
  values: EnumValue[];
};

export function ProfileItem(props: Props) {
  const { title, values } = props;

  const enums = values.map(({ title, content }) => (
    <ProfileEnum title={title} content={content} />
  ));

  return (
    <div className="profileItem">
      <h3 className="subTitle">{title}</h3>
      {enums}
    </div>
  );
}
