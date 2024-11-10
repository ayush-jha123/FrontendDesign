"use client";

import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="w-full h-[5rem] px-[10rem] py-3 flex flex-row  justify-between">
      <div className="flex justify-center mt-2  ">
        <Image src="/logo.png" alt="Logo Image" width={200} height={80} />
      </div>
      <div className="w-[80%] flex justify-center items-center p-2">
        <div className="flex gap-8 font-serif w-[70%] justify-center ">
          <Link href="/" className="hover:text-orange-500 font-[sans-serif] text-[1.2rem]">
            Home
            <div className="bg-orange-500 opacity-0 hover:opacity-90 transition-all w-[3.3rem] h-[0.2rem]"></div>
          </Link>
          <Link href="/" className="hover:text-orange-500 font-[sans-serif] text-[1.2rem]">About</Link>
          <Link href="/" className="hover:text-orange-500 font-[sans-serif] text-[1.2rem]">Services</Link>
          <Link href="/" className="hover:text-orange-500 font-[sans-serif] text-[1.2rem]">Portfolio</Link>
          <Link href="/" className="hover:text-orange-500 font-[sans-serif] text-[1.2rem]">Contact</Link>
        </div>

        <div className="">
          <button className="bg-orange-500 text-white w-[8rem] h-[2.5rem] rounded-md  justify-start font-mono">Get In Touch</button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
