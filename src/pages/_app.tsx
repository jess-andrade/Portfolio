import "@/styles/globals.css";
import type { AppProps } from "next/app";

import Layout from "../components/Layout";

import { LanguageContext } from "@/context/languageContext";
import React, { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [language, setLanguage] = useState<string>("en-US");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LanguageContext.Provider>
  );
}
