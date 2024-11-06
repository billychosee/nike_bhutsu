"use client";

import { useEffect, useState } from "react";

import { shoes, statistics } from "../constants/index.js";
import Button from "../shared/Button";
import ShoeCard from "../sectionsHome/cards/ShoeCard";
import { bigShoe1 } from "@/assets/images";
import { arrowRight } from "@/assets/icons";

import Image from "next/image";
import Link from "next/link.js";

import { useTranslation } from "react-i18next";
import i18n from "@/app/i18n.js";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1); //Stores path to that image.
  const { t } = useTranslation();
  const curLang = i18n.language;

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          {t(`home.hero.summerCollections`)}
        </p>

        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span
            className={`xl:bg-white xl:whitespace-nowrap relative z-10 rounded-r-3xl ${
              curLang === "ar" ? "" : "pr-10"
            }`}
          >
            {t(`home.hero.title1`)}
          </span>
          <br />
          {t(`home.hero.title2`)}{" "}
          <span className="text-coral-red inline-block mt-3">
            {t(`home.hero.title3`)}
          </span>
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          {t(`home.hero.subtitle`)}
        </p>

        <Link href="/products">
          <button className="flex justify-center items-center gap-2 px-7 py-4 border border-coral-red font-montserrat text-lg leading-none bg-coral-red rounded-full text-white hover:bg-white hover:text-coral-red transition-all">
            {t(`home.hero.shopNow`)}
            <Image
              src={arrowRight}
              alt="Arrow Right"
              height={20}
              width={20}
              className={`rounded-full ${
                curLang === "ar" ? "mr-2 rotate-180" : "ml-2"
              }`}
            />
          </button>
        </Link>

        <div className="flex justify-start items-start w-full mt-[26px] gap-12 max-sm:hidden">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray xl:whitespace-nowrap">
                {t(`home.hero.${stat.label}`)}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative bg-coral-red bg-opacity-25 xl:rounded-b-full z-8 bg-center flex-1 flex justify-center items-center xl:min-h-screen max-xl:mt-10 max-xl:py-40">
        <Image
          src={bigShoeImg}
          alt="Shoe Collection"
          width={610}
          height={502}
          className="object-contain relative z-10 drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
        />

        <div className="flex w-full justify-center sm:gap-6 gap-4 absolute xl:-bottom-[5%] bottom-[10px] max-sm:px-6">
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
