"use client";

import { filter } from "@/assets/icons";
import { useEffect, useState } from "react";
import Image from "next/image";
import ShoePurchaseArea from "@/components/sectionsProducts/ShoePurchaseArea";
import GenderFilter from "@/components/sectionsProducts/GenderFilter";
import ColourFilter from "@/components/sectionsProducts/ColourFilter";
import SizeFilter from "@/components/sectionsProducts/SizeFilter";
import TypeFilter from "@/components/sectionsProducts/TypeFilter";
import { shipMsg } from "@/components/constants";

import i18n from "../i18n"; // Import the i18n configuration file
import { useTranslation } from "react-i18next";

export default function Home() {
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setShowFilters(true);
      }
    };

    // Initial check
    handleResize();

    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [max, setMax] = useState(6);
  const [itemCount, setItemCount] = useState(0);

  const [gender, setGender] = useState("All");
  const [colours, setColours] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [types, setTypes] = useState([]);

  const curLang = i18n.language;
  const { t } = useTranslation();

  return (
    <main className="relative" dir={curLang === "ar" ? "rtl" : ""}>
      <div className=" w-full relative max-container pt-28 ">
        <div className="bg-coral-red bg-opacity-25 leading-10 rounded-lg text-center font-montserrat text-md w-full">
          {t(shipMsg)}
        </div>
      </div>
      <section className="flex justify-center items-center py-5 lg:hidden">
        <button
          onClick={() => setShowFilters((prev) => !prev)}
          className="flex justify-center items-center gap-2 px-5 py-3 border border-coral-red font-montserrat text-lg rounded-xl text-black"
        >
          Filters
          <Image src={filter} alt="Arrow Right" className="ml-2 w-5 h-5" />
        </button>
      </section>
      <section className="w-full flex lg:flex-row flex-col justify-center lg:h-fit max-container">
        {showFilters && (
          <div className="relative lg:w-1/5 w-full p-8 flex flex-col items-center">
            <p
              className={`w-full font-semibold text-xl ${
                curLang === "ar" ? "text-right" : "text-left"
              }`}
            >
              {t("filters.Shoes")} ({itemCount})
            </p>
            <hr className="w-full my-5" />
            <TypeFilter types={types} setTypes={setTypes} />
            <hr className="w-full my-5" />
            <GenderFilter gender={gender} setGender={setGender} />
            <hr className="w-full my-5" />
            <ColourFilter colours={colours} setColours={setColours} />
            <hr className="w-full my-5" />
            <SizeFilter sizes={sizes} setSizes={setSizes} />
          </div>
        )}
        <div className="relative lg:w-4/5 w-full py-16 px-10 sm:px-20 ">
          <ShoePurchaseArea
            max={max}
            gender={gender}
            colours={colours}
            sizes={sizes}
            types={types}
            itemCount={itemCount}
            setItemCount={setItemCount}
          />
          {max < itemCount && (
            <button
              onClick={() => {
                setMax((prev) => prev + 6);
              }}
              className="pt-16 w-full pb-0 font-montserrat font-semibold"
            >
              {t(`filters.Show More`)}
            </button>
          )}
        </div>
      </section>
    </main>
  );
}
