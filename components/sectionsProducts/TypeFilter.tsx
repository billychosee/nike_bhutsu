import React, { useEffect, useState } from "react";
import { shoeProducts } from "../constants";
import { check, filter } from "@/assets/icons";
import Image from "next/image";
import i18n from "@/app/i18n";
import { useTranslation } from "react-i18next";

const TypeFilter = ({ types, setTypes }: any) => {
  function toggleType(type: string) {
    if (types.includes(type)) {
      setTypes((prev: any) => prev.filter((t: string) => t !== type));
    } else {
      setTypes((prev: any) => [...prev, type]);
    }
  }

  const [allTypes, setAllTypes] = useState<string[]>([]);

  useEffect(() => {
    const uniqueTypes = new Set(
      shoeProducts.map((product) => product.type) // Set only allows unique values
    );
    const filteredTypes = Array.from(uniqueTypes).sort(); // Convert Set back to an array
    setAllTypes(filteredTypes);
  }, [types]);

  const curLang = i18n.language;
  const { t } = useTranslation();
  return (
    <section className="w-full gap-2">
      <p className="font-semibold py-1">
        {t(`filters.Type`)} {types.length ? `(${types.length})` : ""}
      </p>
      {allTypes.map((type: any) => (
        <section className="flex justify-between items-center">
          <button
            key={type}
            value={type}
            onClick={() => toggleType(type)}
            className={`w-full font-montserrat hover:text-slate-gray ${
              curLang === "ar" ? "text-right" : "text-left"
            }`}
          >
            {t(`products.${type}`)}
          </button>
          {types.includes(type) && (
            <Image src={check} alt="Check" width={15} height={15} />
          )}
        </section>
      ))}
    </section>
  );
};

export default TypeFilter;
