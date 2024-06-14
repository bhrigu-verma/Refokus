import Button from "./button";

// import React from "react";

function Navbar(){
    return (
        <div className="max-w-screen-xl py-3 mx-auto   flex items-center justify-center border-b-[1.5px]">
        <img className="ml-2" src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"></img>
        <div className=" links flex gap-10 ml-20 ">
        {["Home", "Work", "Culture", "Contact","","News"].map((item,index) => (

            // eslint-disable-next-line react/jsx-key
            item.length ===0 ? <span className="w-0.5 h-6 bg-zinc-800 "></span>:(
                <a className="text-sm text-sky-400" href="#" key={item}>
                {index ===1 && (<span style={{boxShadow: "0 0 0.55em #00FF19"}} className="inline-block w-2 mr-1 h-2 rounded-lg bg-green-500"></span>  )}
       
            {item}

         
            </a>
            )
            
          ))}
        
        </div>
        <Button/>
    
        </div>
    )
}
// const headerItems = [
//     { name: "What we do?", link: "/about" },
//     { name: "College Rundown", link: "/colleges" },
//     { name: "Hit us up", link: "/contact" },
// ];
export default Navbar;