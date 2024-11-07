"use client";

import { headerLogo } from "@/assets/images";
import { hamburger, shoppingBag } from "@/assets/icons";
import { navLinks } from "../constants/index.js";

import Image from "next/image";

import { useEffect, useState } from "react";
import Link from "next/link.js";

import i18n from "@/app/i18n.js";
import { useTranslation } from "react-i18next";
const Nav = () => {
  const [sideBar, setSideBar] = useState(false);

  const handleResize = () => {
    if (window.innerWidth > 1024) {
      setSideBar(false);
    }
  };

  useEffect(() => {
    // Add a window resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const [cartItems, setCartItems] = useState<any[]>([]); // Store Cart Items as hook from Local Storage
  useEffect(() => {
    // Update cart items on page load.
    const newCartItems = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);

      if (key?.startsWith("cart-")) {
        const jsonValue = localStorage.getItem(key);

        const value = JSON.parse(jsonValue ?? "null");

        value.localKey = key;

        newCartItems.push(value);
      }
    }
    setCartItems(newCartItems); //Update hook
  }, [isHovered]);

  const { t } = useTranslation();
  const curLang = i18n.language;

  return (
    <header
      className="padding-x py-8 absolute z-20 w-full"
      dir={curLang === "ar" ? "rtl" : ""}
    >
      <nav className="flex items-center justify-between max-container">
        <a href="/">
          <Image src={headerLogo} alt="Logo" width={130} height={29} />
        </a>

        <section>
          <ul className=" flex-1 flex justify-center gap-x-28 max-lg:hidden ">
            {navLinks.map((item) => (
              <li key={item.label} className="pt-1">
                <Link
                  href={item.isRoute ? `/${item.href}` : `/#${item.href}`}
                  className="font-montserrat leading-normal text-lg text-slate-gray hover:text-blue-600"
                >
                  {t(`nav.${item.label}`)}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {sideBar && (
          <section
            className={
              `${
                curLang === "ar"
                  ? "leftsidebar rounded-br-3xl"
                  : "rightsidebar rounded-bl-3xl"
              } bg-blue-600 bg-opacity-100 lg:hidden transition-all` +
              (sideBar ? "w-fit" : "w-0")
            }
          >
            <ul className="flex flex-col justify-center items-center gap-24 py-20 transition-al">
              {navLinks.map((item) => (
                <li
                  key={item.label}
                  className="text-right w-full px-10 max-sm:px-4"
                >
                  <Link
                    href={item.isRoute ? `/${item.href}` : `/#${item.href}`}
                    className="font-montserrat leading-normal text-lg text-black hover:text-white transition-all"
                  >
                    {t(`nav.${item.label}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="flex flex-row gap-5 p-1 z-20 relative">
          <Link
            href={`/cart`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src={shoppingBag}
              alt="Shopping Bag"
              width={25}
              height={25}
            />
          </Link>

          <section
            className={`absolute max-lg:hidden transition-all top-10 ${
              curLang === "ar" ? "left-0" : "right-0"
            } h-fit max-h-64 overflow-y-hidden p-3 min-w-max bg-white shadow-2xl rounded-xl border-2 border-blue-600 ${
              isHovered
                ? "opacity-100 translate-y-0 "
                : "opacity-0 -translate-y-5 delay-500"
            }`}
          >
            {(cartItems.length > 0 && isHovered) || cartItems.length > 0 ? (
              cartItems.map((item, key) => (
                <ul key={key} className="leading-5 p-2">
                  <li>
                    {t(`products.${item["name"]}`)}
                    <p className=" text-gray-400 fon">
                      {t(`nav.Size`)} - {item["size"]}
                    </p>
                  </li>
                </ul>
              ))
            ) : (
              <div>{t(`nav.noItems`)}</div>
            )}
          </section>

          <div className="z-20 lg:hidden">
            <Image
              src={hamburger}
              alt="Hamburger"
              height={25}
              width={25}
              className={
                "lg:hidden cursor-pointer transition-all" +
                (sideBar ? " rotate-90" : "")
              }
              onClick={() => setSideBar(!sideBar)}
            />
          </div>
        </section>
      </nav>
    </header>
  );
};

export default Nav;
