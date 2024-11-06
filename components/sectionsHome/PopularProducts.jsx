import { shoeProducts } from "../constants/index.js";
import PopularProductCard from "../sectionsHome/cards/PopularProductCard";

import i18n from "@/app/i18n.js";
import { useTranslation } from "react-i18next";

const popular = [1, 4, 7, 11];

const PopularProducts = () => {
  const { t } = useTranslation();
  const curLang = i18n.language;
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          {t(`home.popularProds.Our`)}{" "}
          <span className="text-coral-red">
            {" "}
            {t(`home.popularProds.Popular`)}
          </span>{" "}
          {t(`home.popularProds.Products`)}
        </h2>
        <p className="lg:max-w-2xl mt-2 font-montserrat text-slate-gray">
          {t(`home.popularProds.subtitle`)}
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 xl:gap-28 max-xl:gap-16">
        {shoeProducts.map((product) => {
          if (popular.includes(product.id)) {
            return <PopularProductCard key={product.name} {...product} />;
          }
        })}
      </div>
    </section>
  );
};

export default PopularProducts;
