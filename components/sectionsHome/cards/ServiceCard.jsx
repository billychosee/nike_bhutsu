import Image from "next/image";
import { useTranslation } from "react-i18next";

const ServiceCard = ({ imgURL, label, subtext }) => {
  const { t } = useTranslation();
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
      <div className="flex justify-start items-center">
        <div className="w-11 h-11 flex justify-center items-center bg-blue-600 rounded-full hover:animate-pulse">
          <Image src={imgURL} alt={label} width={24} height={24} />
        </div>
        <h3 className="font-montserrat text-3xl mx-6">
          {t(`home.services.${label}`)}
        </h3>
      </div>
      <p className="mt-5 info-text">{t(`home.services.${subtext}`)}</p>
    </div>
  );
};

export default ServiceCard;
