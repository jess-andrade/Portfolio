import "@/styles/globals.css";
import type { AppProps } from "next/app";

import Layout from "../components/Layout";

import { LanguageContext } from "@/context/languageContext";
import React, { useState } from "react";
import { ColorModeContext } from '@/context/colorModeContext';
import { createTheme } from '@mui/material';

export default function App({ Component, pageProps }: AppProps) {

  const [language, setLanguage] = useState<string>("en-US");
  const [mode, setMode] = useState<string>("light");

  return (
    <ColorModeContext.Provider value={{ mode, setMode }}>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LanguageContext.Provider>
    </ColorModeContext.Provider>
  );
}
