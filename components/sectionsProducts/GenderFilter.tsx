import React from "react";
import { useTranslation } from "react-i18next";

const ShoeFilterArea = ({ gender, setGender }: any) => {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col gap-40 w-full font-montserrat">
      <section>
        <p className="font-semibold py-1">{t(`filters.Gender`)}</p>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="w-full border-2 border-black rounded-md cursor-pointer"
        >
          <option value="All">{t(`filters.All`)} </option>
          <option value="Men">{t(`filters.Men`)} </option>
          <option value="Unisex">{t(`filters.Unisex`)} </option>
          <option value="Women">{t(`filters.Women`)} </option>
        </select>
      </section>
    </section>
  );
};

export default ShoeFilterArea;
