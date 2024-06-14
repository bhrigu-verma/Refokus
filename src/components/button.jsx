import { IoMdReturnRight  } from "react-icons/io";
import { FaAngleDoubleRight } from "react-icons/fa";

function Button({title ="get started"}){
    return(
        <div className='   min-w-20 px-3 py-4  bg-zinc-100 text-black rounded-full flex items-center justify-between'>
      <span className="text-base font-medium "> {title}</span>
      <span className="m-2">
      <FaAngleDoubleRight /></span> </div>
    )

}
export default Button;