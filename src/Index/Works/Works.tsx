import React from "react";
import { useTranslation } from "react-i18next";
import { OSS } from "./OSS";
import { Native, NativeInfo } from "./Native";
import { Web, WebInfo } from "./Web";
import { Minecraft, MinecraftInfo } from "./Minecraft";
import "./Works.css";
import works from "../json/works.json";

type WorksData = {
  macOS: NativeInfo[];
  iOS: NativeInfo[];
  android: NativeInfo[];
  web: WebInfo[];
  minecraft: MinecraftInfo[];
};

type Props = {
  lang: string;
};

export function Works(props: Props) {
  const { lang } = props;
  const { t } = useTranslation();
  const worksData = works as WorksData;

  return (
    <div className="works" id="worksSection">
      <h2 className="title">{t("works")}</h2>
      <OSS />
      <Native title={t("macos_title")} column={4} values={worksData.macOS} />
      <Native title={t("ios_title")} column={3} values={worksData.iOS} />
      <Native
        title={t("android_title")}
        column={1}
        values={worksData.android}
      />
      <Web title={t("web_title")} values={worksData.web} />
      <Minecraft title={t("minecraft_title")} values={worksData.minecraft} />
    </div>
  );
}
