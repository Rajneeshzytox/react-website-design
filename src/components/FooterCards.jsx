import { useState } from "react";

import BannerCard from "./BannerCard"
import { footerCardsData } from "../data/BannerCard_data"


// slider button




export default function FooterCards(){
  const [currentCardSlide, setCurrentCardSlide] = useState(0);

const FooterSlide = (direction) => {
    const footerCardWidth = 300;
    const containerWidth = document.querySelector('#footerCards').offsetWidth;
    
    let newCardSlide = currentCardSlide;

    if (direction === 'left') {
        newCardSlide += footerCardWidth;
    } else if (direction === 'right') {
        newCardSlide -= footerCardWidth;
    }

    // Limit sliding LOGIC FROM CHATGPT
    newCardSlide = Math.max(-document.querySelector('.FooterCardContainer').offsetWidth + containerWidth, newCardSlide);
    newCardSlide = Math.min(0, newCardSlide);

    setCurrentCardSlide(newCardSlide);
};




    return(
       <section id="footerCards" className=" w-full relative overflow-clip mb-8 ">
           {/* slider button container */}
           <div className="slide-btn w-full flex justify-between items-center absolute z-10 top-1/4 ">
                <button className="size-8 aspect-square bg-slate-50 border-none outline-none rounded-full font-bold text-blue-800 " onClick={() => FooterSlide('left')}>{'<'}</button>

                <button className="bg-slate-50 border-none outline-none rounded-full font-bold text-blue-800 size-8" onClick={() => FooterSlide('right')}>{'>'}</button>
            </div>

            <div className="FooterCardContainer transition-all w-fit flex justify-center gap-3 text-nowrap " style={{transform: `translateX(${currentCardSlide}px)`}}>
            {/* <BannerCard data={footerCardsData[2]} /> */}
            {
                footerCardsData.map((card) => {
                  return <BannerCard key={card.id} data={card} />
                })
            }
            </div>
       </section>
    )
}