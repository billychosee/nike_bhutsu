import { star } from "@/assets/icons";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  const { t } = useTranslation();
  return (
    <div className="flex justify-center items-center flex-col">
      <Image
        src={imgURL}
        alt="Customer"
        className=" rounded-full object-cover w-[120px] h-[120px]"
      />
      <h3 className="font-semibold text-2xl mt-4">{customerName}</h3>
      <p className="mt-6 max-w-md text-center info-text">
        {" "}
        {t(`home.customer.${feedback}`)}
      </p>
      <div className="flex items-center gap-4 mt-2">
        <Image
          src={star}
          width={24}
          height={24}
          className="object-contain m-0"
          alt="Review"
        />
        <p className="font-montserrat text-lg mt-1">({rating})</p>
      </div>
    </div>
  );
};

export default ReviewCard;
