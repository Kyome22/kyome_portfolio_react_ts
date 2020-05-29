import React, { useState, useEffect } from "react";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import { Header } from "./Header";
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
        language={t("language_link")}
        profile={t("profile_link")}
        works={t("works_link")}
        articles={t("articles_link")}
        contact={t("contact_link")}
        onLangChange={() => setLang(lang === "en" ? "ja" : "en")}
      />
    </div>
  );
};

export default App;
