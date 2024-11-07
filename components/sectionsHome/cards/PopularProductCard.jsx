"use client";

import { star } from "@/assets/icons";
import Image from "next/image";
import { useRouter } from "next/navigation";

import i18n from "@/app/i18n.js";
import { useTranslation } from "react-i18next";

const PopularProductCard = ({ imgURL1, name, price, rating }) => {
  const router = useRouter();
  const handleClick = (name) => {
    router.push(`/products/${name}`);
  };

  const { t } = useTranslation();
  const curLang = i18n.language;

  return (
    <div
      className="flex flex-1 flex-col w-full max-sm:w-full cursor-pointer"
      onClick={() => handleClick(name)}
    >
      <Image
        src={imgURL1}
        alt={name}
        className="bg-slate-100 rounded-xl"
        width={280}
        height={280}
      />
      <div className="mt-4 flex justify-start gap-2.5">
        <Image src={star} alt="Rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          ({rating})
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {t(`products.${name}`)}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-blue-600 text-lg leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
