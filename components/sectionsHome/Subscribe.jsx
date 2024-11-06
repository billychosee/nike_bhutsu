"use client";

import Button from "../shared/Button";
import { useEffect, useState } from "react";
import { swoosh } from "@/assets/icons";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);

    setMsg("load");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const { msg } = await res.json();
    setMsg(msg);
    setEmail("");
  };
  const { t } = useTranslation();
  return (
    <section
      id="contact-us"
      className="max-container flex justify-between items-center max-lg:flex-col gap-10 pb-5"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        {t(`home.subscribe.title1`)}
        <span className="text-coral-red"> {t(`home.subscribe.title2`)} </span>
        {t(`home.subscribe.title3`)}
      </h3>

      <form onSubmit={handleSubmit} className="w-full h-fit">
        <div className="flex border-2 border-slate-gray w-full p-2 items-center rounded-full font-montserrat">
          <input
            type="email"
            required
            placeholder={t(`home.subscribe.placeHolder`)}
            className="input"
            minLength={5}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            disabled={msg === "success" || msg === "load"}
            className="bg-coral-red border-2 border-coral-red h-full min-h-[50px] rounded-full w-56 text-white font-semibold hover:text-black hover:bg-transparent transition-all flex justify-center items-center"
          >
            {msg === "success" ? (
              <p className="flex flex-row justify-center items-center gap-2 text-black">
                {t(`home.subscribe.Subscribed`)}
                <Image src={swoosh} alt="Tick" width={40} height={40} />
              </p>
            ) : msg === "fail" ? (
              t(`home.subscribe.Failed`)
            ) : msg === "load" ? (
              <p className=" animate-pulse">{t(`home.subscribe.Processing`)}</p>
            ) : (
              t(`home.subscribe.Subscribe`)
            )}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Subscribe;
