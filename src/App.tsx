import React, { useState, useEffect } from "react";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import { Header } from "./Header";
import { Profile } from "./Profile";
import ja from "./locales/ja.json";
import en from "./locales/en.json";
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
  const [t, i18n] = useTranslation();
  const [lang, setLang] = useState("ja");

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  return (
    <div className="App">
      <Header
        language={t("language")}
        profile={t("profile")}
        works={t("works")}
        articles={t("articles")}
        contact={t("contact")}
        onLangChange={() => setLang(lang === "en" ? "ja" : "en")}
      />
      <Profile
        title={t("profile")}
        introduction_title={t("introduction_title")}
        introduction_text={t("introduction_text")}
        languages_title={t("languages_title")}
        frameworks_title={t("frameworks_title")}
        skills_title={t("skills_title")}
      />
    </div>
  );
};

export default App;
