import React, { useEffect, useState } from "react";
import { shoeProducts } from "../constants";
import i18n from "@/app/i18n";
import { useTranslation } from "react-i18next";

const SizeFilter = ({ sizes, setSizes }: any) => {
  function toggleSize(size: string) {
    if (sizes.includes(size)) {
      setSizes((prev: any) => prev.filter((c: string) => c !== size));
    } else {
      setSizes((prev: any) => [...prev, size]);
    }
  }

  const [allSizes, setAllSizes] = useState<number[]>([]);

  const uniqueSize = new Set<number>();

  useEffect(() => {
    for (let i = 0; i < shoeProducts.length; i++) {
      for (let j = 0; j < shoeProducts[i].size.length; j++) {
        uniqueSize.add(shoeProducts[i].size[j]);
      }
    }
    const filteredSizes = Array.from(uniqueSize).sort((a, b) => a - b); // Convert Set back to an array
    setAllSizes(filteredSizes);
  }, [sizes]);

  const curLang = i18n.language;
  const { t } = useTranslation();

  return (
    <section className="w-full gap-2">
      <p className="font-semibold py-1">
        {t(`filters.Shoe Size`)} {sizes.length ? `(${sizes.length})` : ""}
      </p>
      <section className="grid grid-cols-3 gap-6">
        {allSizes.map((size: any) => (
          <button
            key={size}
            value={size}
            onClick={() => toggleSize(size)}
            className={`text-center font-montserrat  border-2 rounded-md p-1 ${
              sizes.includes(size) ? "border-coral-red" : ""
            }`}
          >
            {size}
          </button>
        ))}
      </section>
    </section>
  );
};

export default SizeFilter;
