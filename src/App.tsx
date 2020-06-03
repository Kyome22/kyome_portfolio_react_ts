import React, { useState, useEffect } from "react";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import { Header } from "./Header";
import { Profile } from "./Profile/Profile";
import { Works } from "./Works/Works";
import { Links } from "./Links/Links";
import ja from "./json/locales/ja.json";
import en from "./json/locales/en.json";
import "./App.css";

i18n.use(initReactI18next).init({
  debug: true,
  resources: {
    ja: { translation: ja },
    en: { translation: en },
  },
  lng: "ja",
  fallbackLng: "en",
  returnEmptyString: false,
});

const App: React.FC = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState("ja");

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  return (
    <div className="App">
      <Header onLangChange={() => setLang(lang === "en" ? "ja" : "en")} />
      <div className="dummyHeader" />
      <Profile />
      <Works lang={lang} />
      <Links />
    </div>
  );
};

export default App;
