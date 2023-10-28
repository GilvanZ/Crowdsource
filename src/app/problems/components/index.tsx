'use client'
import handsImage from "@/assets/Rectangle 5.png"

export default function ProblemsSidebarImage(){
    return(
        <div className="hidden lg:block lgw-[480px] bg-black">
            <img src={handsImage.src} alt="Maos unidas" className="object-cover h-full w-full"/>
            
        </div>
    )
}