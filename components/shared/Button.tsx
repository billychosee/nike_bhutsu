import Image from "next/image";
import Link from "next/link";

const Button = ({ label, iconURL, link }: any) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border border-blue-600 font-montserrat text-lg leading-none bg-blue-600 rounded-full text-white hover:bg-white hover:text-blue-600 transition-all">
      {label}
      {link && <Link href={link} />}
      {iconURL && (
        <Image
          src={iconURL}
          alt="Arrow Right"
          className="ml-2 rounded-full w-5 h-5 "
        />
      )}
    </button>
  );
};

export default Button;
