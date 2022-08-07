import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="p-4 bg-white md:px-6 md:py-8 ">
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 text-center">
        Powered by{" "}
        <Link href="/">
          <a
            target={"_blank"}
            rel="noreferrer"
            className="hover:underline text-black text-[14px]"
          >
            Deezer
          </a>
        </Link>
      </span>
    </div>
  );
};

export default Footer;
