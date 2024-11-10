"use client";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
const Form = () => {
  return (
    <div className="w-full h-[60%] bg-[url('../public/bg.avif')] bg-no-repeat bg-cover flex flex-col relative">
      <div className="absolute inset-0 bg-[#0E1F51] w-full h-full opacity-75 z-10"></div>
      <div className="flex justify-center mt-5 flex-col items-center z-20">
        <p className="font-mono text-orange-600 font-medium text-[1.4rem]">
          Get In Touch
        </p>
        <p className="font-mono text-white font-medium text-[1.8rem]">
          Hey! Let's Talk
        </p>
      </div>
      <div className="w-full flex flex-row justify-center gap-4 pb-[4rem] mt-4 z-20">
        <div className="bg-white h-[25rem] w-[40%] rounded-md p-4">
          <form action="" className="flex flex-col gap-4">
            <input
              type="text"
              name="Name"
              id="name"
              className="bg-gray-100 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Name"
              onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
            />

            <input
              type="text"
              name="Email"
              id="email"
              className="bg-gray-100 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Email"
              onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
            />

            <input
              type="text"
              name="Phone"
              id="phone"
              className="bg-gray-100 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Phone"
              onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
            />
            <textarea
              type="text"
              name="Message"
              id="name"
              className="bg-gray-100 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-[9rem]"
              placeholder="Your Message"
              onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
            />

            <button className="bg-orange-500 text-white w-[7rem] h-[2.5rem] rounded-md  justify-start font-mono">
              Send Now
            </button>
          </form>
        </div>
        <div className="bg-white h-[25rem] w-[20%] rounded-md p-[2.5rem] px-[1rem] flex flex-col gap-6">
          <div>
            <div className="flex flex-row gap-4">
              <FiPhoneCall className="bg-slate-100 text-orange-500 rounded-md w-10 h-10 text-center p-[0.6rem]" />
              <div className="flex flex-col">
                <p className="font-mono text-orange-700 font-medium text-[1rem]">
                  Call Anytime
                </p>
                <p className="font-mono  font-medium text-[1rem]">
                  +91813072983
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-row gap-4">
              <MdEmail className="bg-slate-100 text-orange-500 rounded-md w-10 h-10 text-center p-[0.6rem]" />
              <div className="flex flex-col justify-center">
                <p className="font-mono text-orange-700 font-medium text-[1rem]">
                  Send Email
                </p>
                <p className="font-mono  font-medium text-[1rem]">
                  support@bineysery.com
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-row gap-4">
              <MdLocationOn className="bg-slate-100 text-orange-500 rounded-md w-10 h-10 text-center p-[0.6rem]" />
              <div className="flex flex-col justify-center">
                <p className="font-mono text-orange-500 font-medium text-[1rem]">
                  Vist Us
                </p>
                <p className="font-mono  font-medium text-[1rem]">
                  50-60,Block E
                </p>
              </div>
            </div>
          </div>
          <div className="h-full flex justify-center items-center flex-col gap-4">
            <h1 className="font-mono text-blue-600 font-medium text-[1.2rem]">Follow Us</h1>
            <div className="flex flex-row gap-4 w-full">
              <FaLinkedinIn className="text-slate-100 bg-orange-500 rounded-md w-10 h-10 text-center p-[0.6rem]" />
              <IoLogoInstagram className="text-slate-100 bg-orange-500 rounded-md w-10 h-10 text-center p-[0.6rem]" />
              <FaTwitter className="text-slate-100 bg-orange-500 rounded-md w-10 h-10 text-center p-[0.6rem]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
