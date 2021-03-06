import React, { useState, useEffect } from "react";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import { ParsedQuery } from "query-string";
import { Helmet } from "react-helmet";
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

const App: React.FC<{ qs: ParsedQuery }> = (props) => {
  const defaultLang = ((qs: ParsedQuery) => {
    if ("lang" in qs && qs.lang === "en") {
      return "en";
    }
    return "ja";
  })(props.qs);
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(defaultLang);

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  const onLangChange = () => {
    window.scrollTo(0, 0);
    setLang(lang === "en" ? "ja" : "en");
  };

  return (
    <div className="app">
      <Helmet htmlAttributes={{ lang: lang }} />
      <Header onLangChange={onLangChange} />
      <div className="dummy-header" />
      <Profile />
      <Works lang={lang} />
      <Links />
    </div>
  );
};

export default App;
