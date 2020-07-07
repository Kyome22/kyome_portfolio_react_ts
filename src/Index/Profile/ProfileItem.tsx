import React from "react";
import { ProfileEnumValue, ProfileEnum } from "./ProfileEnum";

type Props = {
  title: string;
  values: ProfileEnumValue[];
};

export function ProfileItem(props: Props) {
  const { title, values } = props;

  const enums = values.map(({ title, content }, i) => (
    <ProfileEnum key={i} title={title} content={content} />
  ));

  return (
    <div className="profile-item">
      <h3 className="sub-title">{title}</h3>
      {enums}
    </div>
  );
}
