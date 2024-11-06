import { shoe8 } from "@/assets/images";
import Button from "../shared/Button";

import Image from "next/image";

import i18n from "@/app/i18n.js";
import { useTranslation } from "react-i18next";

const SuperQuality = () => {
  const { t } = useTranslation();
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          {t(`home.superQuality.title1`)}
          <span className="text-coral-red">
            {" "}
            {t(`home.superQuality.title2`)}{" "}
          </span>
          <br />
          {t(`home.superQuality.title3`)}
          <span className="text-coral-red">
            {" "}
            {t(`home.superQuality.title4`)}
          </span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          {t(`home.superQuality.subtitle1`)}{" "}
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          {t(`home.superQuality.subtitle2`)}{" "}
        </p>
        <div className="mt-6">
          <Button label={t(`home.superQuality.viewDetails`)} />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <Image
          src={shoe8}
          alt="shoe8"
          width={600}
          height={600}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
