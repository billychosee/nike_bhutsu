import { reviews } from "../constants/index.js";
import ReviewCard from "../sectionsHome/cards/ReviewCard";
import { useTranslation } from "react-i18next";

const CustomerReviews = () => {
  const { t } = useTranslation();
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        {t(`home.customer.title1`)}
        <span className="text-blue-600">
          {" "}
          {t(`home.customer.title2`)}
        </span>{" "}
        {t(`home.customer.title3`)}
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        {t(`home.customer.subtitle`)}
      </p>
      <div className=" mt-20 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
