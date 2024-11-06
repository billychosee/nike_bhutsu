"use client";

import React, { useEffect, useState } from "react";
import { shoeProducts } from "@/components/constants";
import Image, { StaticImageData } from "next/image";
import { cross } from "@/assets/icons";
import { useRouter } from "next/navigation";

import i18n from "@/app/i18n";
import { useTranslation } from "react-i18next";

const CartItemCard = ({
  name,
  size,
  price,
  localKey,
  updateCartItems,
}: any) => {
  const [image, setImage] = useState<StaticImageData | null>(null);

  useEffect(() => {
    //Get image from shoeProducts
    const product = shoeProducts.find((shoe) => shoe.name === name);
    if (product) {
      setImage(product.imgURL1);
    }
  }, [name]);

  function itemRemove() {
    // Remove item from local storage and update hook
    console.log(localKey);
    localStorage.removeItem(localKey);
    updateCartItems((prevCartItems: any) =>
      prevCartItems.filter((item: any) => item.localKey !== localKey)
    );
  }
  const router = useRouter();
  function handleClick() {
    router.push(`/products/${name}`);
  }

  const curLang = i18n.language;
  const { t } = useTranslation();

  return (
    <section className="relative w-full cursor-pointer">
      <div className="w-full h-fit flex items-center justify-between gap-10 rounded-full px-10 py-2 bg-pale-blue shadow-lg">
        <section
          className="w-full h-full flex flex-row gap-5 items-center"
          onClick={() => handleClick()}
        >
          <div className="pb-2 min-w-fit">
            {image && <Image src={image} width={100} height={100} alt={name} />}
          </div>
          <div className="flex flex-col leading-1 font-montserrat w-fit">
            <p className="text-xl max-sm:text-lg font-semibold">
              {t(`products.${name}`)}
            </p>
            <div className=" w-36 flex justify-between max-sm:flex-col">
              <p className="text-slate-gray">
                {t(`cart.Size`)}: {size}
              </p>
              <p className="text-coral-red font-semibold">{price}</p>
            </div>
          </div>
        </section>
        <button onClick={() => itemRemove()}>
          <Image
            src={cross}
            alt="Remove"
            width={45}
            height={45}
            className=" transition-all active:ring-2 rounded-full"
          />
        </button>
      </div>
    </section>
  );
};

export default CartItemCard;
