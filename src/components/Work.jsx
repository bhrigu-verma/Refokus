function Work(){

    var images = [
        {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",top:"50%",left:"50%",isActive:true}, 
        {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",top:"53%",left:"48%",isActive:false}, 
        {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",top:"47%",left:"52%",isActive:false}, 
        {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",top:"51%",left:"50%",isActive:false}, 
        {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",top:"53%",left:"53%",isActive:false}, 
        {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",top:"55%",left:"52%",isActive:false}, 
    ]
    return (
        <div className="w-full ">
        <div className="max-w-screen-xl mx-auto text-center mt-10">

        <h1 className="text-[28vw] leading-none  text-sky-100 font-medium select-none tracking-tight">Work</h1>
        <div className="absolute top-0 w-full h-full">
        {images.map((elem,index)=>(elem.isActive && (
             <img key={index} className="absolute rounded-lg -translate-x-[50%] -translate-y-[50%] w-60" src={elem.url}  style={{top:elem.top,left:elem.left,}} alt="image"></img>
        )))}
        </div>
         </div>
           </div>

    )

}
export default Work;