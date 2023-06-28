import { useLanguageContext } from "@/context/languageContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

const RedirectPage = () => {
  const router = useRouter();
  const { setLanguage } = useLanguageContext();

  useEffect(() => {
    setLanguage("it-IT");
    router.push("/");
  }, []);

  return <div>Redirect...</div>;
};

export default RedirectPage;
