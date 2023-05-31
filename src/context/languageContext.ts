import { createContext, useContext } from "react";

export type LanguageContextProps = {
  language: string;
  setLanguage: (language: string) => void;
};

export const LanguageContext = createContext<LanguageContextProps>({
  language: "en-US",
  setLanguage: () => {},
});

export const useLanguageContext = () => useContext(LanguageContext);
