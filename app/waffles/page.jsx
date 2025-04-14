import Connect from "@/components/Connect";
import { Navigation } from "@/components/Navigation";
import React from "react";
import WaffleTea from "@/components/waffletea";



const Waffle=()=>{
    return(<>
    
    <Navigation/>
    <img src="/waffle.png" alt="Bubble Tea"  style={{ width: '100%', minHeight:'50vh' }} />
    <div className="flex mt-10 justify-center items-center">
              <button
                className={`px-2 py-1 sm:px-8 sm:py-3 rounded-full transition-all bg-[#e5e7eb] text-[#1e3a8a] hover:bg-[#d1d5db]`}
              >
                Waffles
              </button>
            </div>
     <WaffleTea/>
       
       <Connect/>

    </>)
}

export default Waffle