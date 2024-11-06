"use client";

import i18n from "@/app/i18n";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useTranslation } from "react-i18next";

const ShoePurchaseCard = ({
  imgURL1,
  name,
  price,
  type,
  gender,
  special,
  id,
}: any) => {
  const router = useRouter();
  const handleClick = (name: any) => {
    router.push(`/products/${name}`);
  };

  const curLang = i18n.language;
  const { t } = useTranslation();
  return (
    <section
      onClick={() => handleClick(name)}
      className="px-0 h-fit cursor-pointer"
    >
      <div className="flex flex-col max-md:items-center">
        <Image
          src={imgURL1}
          height={300}
          width={300}
          alt={name}
          className=" shadow-md rounded-md"
        />

        <div className="w-full max-w-[300px] font-montserrat flex flex-col py-2">
          <div className="w-full text-coral-red text-sm font-semibold ">
            {special === "" ? "" : t(`products.${special}`)}
          </div>
          <div className="w-full font-semibold text-xl">
            {t(`products.${name}`)}
          </div>
          <div className="w-full text-slate-gray text-md">
            {t(`products.${type}`)} - {t(`products.${gender}`)}
          </div>

          <div className="w-full py-2 font-semibold text-xlk ">{price}</div>
        </div>
      </div>
    </section>
  );
};

export default ShoePurchaseCard;
