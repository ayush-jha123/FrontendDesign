"use client"
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-[28rem] bg-[#0E1F51] p-[3rem] px-[7rem] flex flex-row">
      <div className="flex flex-col justify-between items-center w-[20%] p-[2rem] gap-6">
        <Image
          src="/footer.png"
          alt="FOoter"
          width={250}
          height={200}
          className="rounded-md"
        />
        <p className="text-white font-mono">
          Better insights drive smater decisions stronger relationships and new
          growth oppertunities for long-term success.
        </p>
        <div className="flex flex-row gap-4 w-full">
          <FaLinkedinIn className="bg-slate-100 text-orange-500 rounded-md w-10 h-10 text-center p-[0.6rem]" />
          <IoLogoInstagram className="bg-slate-100 text-orange-500 rounded-md w-10 h-10 text-center p-[0.6rem]" />
          <FaTwitter className="bg-slate-100 text-orange-500 rounded-md w-10 h-10 text-center p-[0.6rem]" />
        </div>
      </div>

      <div className="text-white p-[3rem] gap-2 flex flex-col">
        <h1 className="text-[1.5rem]">Services</h1>
        <div className="bg-red-500 w-[3.5rem] h-[0.2rem] mb-2"></div>
        <p>Software Development</p>
        <p>Generative AI</p>
        <p>LLM and Chatbot Development</p>
        <p>AI Customization</p>
        <p>Tech Team for your Company</p>
        <p>Edutech Solution</p>
      </div>

      <div className="text-white p-[3rem] gap-2 flex flex-col">
        <h1 className="text-[1.5rem]">Quick Link</h1>
        <div className="bg-red-500 w-[3.5rem] h-[0.2rem] mb-2"></div>
        <p>Home</p>
        <p>About</p>
        <p>Services</p>
        <p>Portfolio</p>
        <p>Contact</p>
      </div>

      <div className="text-white p-[3rem] gap-4 flex flex-col">
        <h1 className="text-[1.5rem]">Get In Touch</h1>
        <div className="bg-red-500 w-[3.5rem] h-[0.2rem] mb-2"></div>
        <div className="flex flex-col ">
        <p>Better Insights</p>
        <p>For Bussiness Growth</p>
        </div>

        <input
          type="text"
          name="EMail"
          id="name"
          className="bg-gray-100 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Your Message"
          onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
        />

        <button className="bg-orange-500 text-white w-[7rem] h-[2.5rem] rounded-md  justify-start font-mono">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Footer;
