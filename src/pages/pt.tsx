import { useLanguageContext } from "@/context/languageContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

const RedirectPage = () => {
  const router = useRouter();
  const { setLanguage } = useLanguageContext();

  useEffect(() => {
    setLanguage("pt-BR");
    router.push("/");
  }, []);

  return <div>Redirecionando...</div>;
};

export default RedirectPage;
