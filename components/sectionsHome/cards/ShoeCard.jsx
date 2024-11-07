//Only for the shoe switcher.
import Image from "next/image";

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`border-[1px] rounded-xl ${
        bigShoeImg === imgURL.bigShoe
          ? "border-blue-600"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex bg-blue-600 border-blue-600 bg-opacity-25  justify-center items-center bg-card-img bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <Image
          src={imgURL.thumbnail}
          alt="shoe collection"
          width={127}
          height={103.34}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
