import React from "react";
import { shoeProducts } from "../constants";
import ShoePurchaseCard from "./cards/ShoePurchaseCard";

const ShoePurchaseArea = ({
  max,
  gender,
  colours,
  sizes,
  types,
  itemCount,
  setItemCount,
}: any) => {
  var count = 0;

  return (
    <>
      <div className=" grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-14">
        {shoeProducts.map((product) => {
          if (types.includes(product.type) || types.length == 0) {
            if (product.gender == gender || gender == "All") {
              if (colours.includes(product.colour) || colours.length == 0) {
                if (
                  product.size.some((size) => sizes.includes(size)) ||
                  sizes.length === 0
                ) {
                  count = count + 1;
                  setItemCount(count);
                  if (count <= max) {
                    return <ShoePurchaseCard key={product.name} {...product} />;
                  }
                }
              }
            }
          }
        })}
      </div>
    </>
  );
};

export default ShoePurchaseArea;
