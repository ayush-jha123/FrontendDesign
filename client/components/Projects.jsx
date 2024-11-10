import Image from "next/image";

const Projects = () => {
  return (
    <div className="w-full h-2/3 py-[3rem] px-[8rem]">
      <div className="w-full flex justify-center items-center flex-col">
        <p className="font-mono text-orange-500 text-[1.5rem]">
          \ Up coming Projects \
        </p>
        <h1 className="font-mono text-[#0E1F51] font-medium text-[2.5rem]">
          Our Upcoming Projects
        </h1>
      </div>
      <div className="w-full grid grid-cols-3 px-[5rem] gap-2">
        <div className="flex flex-col gap-4 h-[17rem] justify-center items-center w-[75%] rounded-md shadow-md">
          <Image
            src="/allone.png"
            alt="ALl In One Image"
            width={312}
            height={250}
            className="rounded-md"
          />
          <div className="gap-2">
            <p className="font-mono text-[#0E1F51] font-medium text-[1.1rem]">
              All in one Application
            </p>
            <p className="font-mono text-orange-700 font-medium text-[1rem]">
              Read more...
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 h-[17rem] justify-center items-start w-[75%] rounded-md shadow-md">
          <Image
            src="/coding.png"
            alt="Coding Image"
            width={312}
            height={250}
            className="rounded-md"
          />
          <div className="gap-2 px-[2rem]">
            <p className="font-mono text-[#0E1F51] font-medium text-[1.1rem]">
              Coding War
            </p>
            <p className="font-mono text-orange-700 font-medium text-[1rem]">
              Read more...
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 h-[17rem] justify-center items-center w-[75%] rounded-md shadow-md">
          <Image
            src="/Edutech.png"
            alt="Logo Image"
            width={312}
            height={250}
            className="rounded-md"
          />
          <div className="gap-2 px-[2rem]">
            <p className="font-mono text-[#0E1F51] font-medium text-[1.1rem]">
              EduTech application
            </p>
            <p className="font-mono text-orange-700 font-medium text-[1rem]">
              Read more...
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 h-[17rem] justify-center items-center w-[75%] rounded-md shadow-md">
          <Image
            src="/chat.png"
            alt="Logo Image"
            width={312}
            height={250}
            className="rounded-md"
          />
          <div className="gap-2 px-[2rem]">
            <p className="font-mono text-[#0E1F51] font-medium text-[1.1rem]">
              Chat Application
            </p>
            <p className="font-mono text-orange-700 font-medium text-[1rem]">
              Read more...
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 h-[17rem] justify-center items-center w-[75%] rounded-md shadow-md">
          <Image
            src="/chess.png"
            alt="Logo Image"
            width={312}
            height={250}
            className="rounded-md"
          />
          <div className="gap-2 px-[2rem]">
            <p className="font-mono text-[#0E1F51] font-medium text-[1.1rem]">
              Chess Application
            </p>
            <p className="font-mono text-orange-700 font-medium text-[1rem]">
              Read more...
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 h-[17rem] justify-center items-center w-[75%] rounded-md shadow-md">
          <Image
            src="/speed.png"
            alt="Logo Image"
            width={312}
            height={250}
            className="rounded-md"
          />
          <div className="gap-2 px-[2rem]">
            <p className="font-mono text-[#0E1F51] font-medium text-[1.1rem]">
              Speed Dating
            </p>
            <p className="font-mono text-orange-700 font-medium text-[1rem]">
              Read more...
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Projects;
