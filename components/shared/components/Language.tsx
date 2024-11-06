"use client";

import i18n from "@/app/i18n";
import { language } from "@/assets/icons";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  useEffect(() => {
    setSelectedLanguage(
      localStorage.getItem("preferredLanguage") || "en" // Default to 'en' (English) if no language is set
    );
  }, []);

  const handleChangeLanguage = (newLanguage: any) => {
    setSelectedLanguage(newLanguage);
    localStorage.setItem("preferredLanguage", newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="p-0 m-0 text-[12px] flex flex-row items-center overflow-visible">
      <label>
        <Image src={language} alt="Language" width={17} height={17} />
      </label>
      <select
        value={selectedLanguage}
        onChange={(e) => handleChangeLanguage(e.target.value)}
        className="overflow-visible bg-transparent active:outline-none focus:outline-none font-semibold text-slate-gray"
      >
        <option value="en">English</option>
        <option value="ar">عربي</option>
      </select>
    </div>
  );
}

export default LanguageSelector;
