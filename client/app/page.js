import Form from "@/components/Form"
import Projects from "@/components/Projects"

const page = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[15rem] bg-[#0E1F51] text-white flex flex-col justify-center items-center">
        <div className="font-mono text-[2.8rem] text-orange-600 font-medium" >Portfolio</div>
        <div className="font-mono">Home / Portfolio</div>
      </div>
      <Projects/>
      <Form/>
    </div>
  )
}

export default page