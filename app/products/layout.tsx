"use client";

import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Nav from "@/components/shared/Nav";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "../i18n"; // Import the i18n configuration file
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const curLang = i18n.language;
let preferredLanguage: any = curLang;
i18n.changeLanguage(preferredLanguage || curLang);
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);

  useEffect(() => {
    // Update the lang attribute when the language changes
    setLang(i18n.language);
  }, [i18n.language]);

  useEffect(() => {
    preferredLanguage = localStorage.getItem("preferredLanguage");
    i18n.changeLanguage(preferredLanguage || curLang);
  }, []);

  const { t } = useTranslation();
  return (
    <I18nextProvider i18n={i18n}>
      <html lang={lang}>
        <title>{t("title")}</title>
        <body className={inter.className}>
          <Header />
          <Nav />
          {children}
          <section className="bg-black padding-x padding-t pb-8">
            <Footer />
          </section>
        </body>
      </html>
    </I18nextProvider>
  );
}
