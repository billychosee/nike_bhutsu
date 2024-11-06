"use client";

import Hero from "@/components/sectionsHome/Hero";
import PopularProducts from "@/components/sectionsHome/PopularProducts";
import SuperQuality from "@/components/sectionsHome/SuperQuality";
import Services from "@/components/sectionsHome/Services";
import CustomerReviews from "@/components/sectionsHome/CustomerReviews";
import Subscribe from "@/components/sectionsHome/Subscribe";

import { I18nextProvider } from "react-i18next";
import i18n from "../i18n"; // Import the i18n configuration file
import { useTranslation } from "react-i18next";

export default function Home() {
  const curLang = i18n.language;
  const { t } = useTranslation();
  return (
    <I18nextProvider i18n={i18n}>
      <main className="relative" dir={curLang === "ar" ? "rtl" : ""}>
        <section className="xl:padding-x">
          <Hero />
        </section>
        <section className="padding">
          <PopularProducts />
        </section>
        <section className="padding">
          <SuperQuality />
        </section>
        <section className="padding-x py-10">
          <Services />
        </section>
        <section className="bg-pale-blue padding">
          <CustomerReviews />
        </section>
        <section className="padding-x sm:py-32 py:16 w-full">
          <Subscribe />
        </section>
      </main>
    </I18nextProvider>
  );
}
