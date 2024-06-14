import { IoMdReturnRight  } from "react-icons/io";
import { FaAngleDoubleRight } from "react-icons/fa";

function Button({title ="get started"}){
    return(
        <div className='   min-w-[3.5rem] px-3 py-2  bg-zinc-100 text-black rounded-full flex items-center justify-between'>
      <span className="text-base font-medium "> {title}</span>
      <span className="m-2">
      <FaAngleDoubleRight /></span> </div>
    )

}
export default Button;