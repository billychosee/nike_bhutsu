"use client";

import React from "react";
import Language from "./components/Language";
import i18n from "@/app/i18n";
import { useTranslation } from "react-i18next";

const Header = () => {
  const curLang = i18n.language;
  const { t } = useTranslation();
  return (
    <header
      className="z-50 padding-x w-full py-2 absolute font-palanquin overflow-visible"
      dir={curLang === "ar" ? "rtl" : ""}
    >
      <section className="max-container flex items-center justify-end gap-2 text-xs text-slate-gray">
        <Language />
      </section>
    </header>
  );
};

export default Header;
