import { useState } from "react"

import Hr from "../components/Hr"
import ProductCard from "../components/ProductCard"

export default function Products({heading, cards}){
    // const [sliderPosition, setSliderPosition] = useState(0);
    
    // const slideLeft = ()=>{
    //     setSliderPosition(sliderPosition + 200);
    // } 

    const [currentPosition, setCurrentPosition] = useState(0);

    const slide = (direction) => {
        const cardWidth = 200;
        const containerWidth = document.querySelector('#cardContainerWidth').offsetWidth;
        
        let newPosition = currentPosition;

        if (direction === 'left') {
            newPosition += cardWidth;
        } else if (direction === 'right') {
            newPosition -= cardWidth;
        }

        // Limit sliding LOGIC FROM CHATGPT
        newPosition = Math.max(-document.querySelector('.slide-scroller').offsetWidth + containerWidth, newPosition);
        newPosition = Math.min(0, newPosition);

        setCurrentPosition(newPosition);
    };

    return(
        <section className="mt-8 ">
            <h2 className="font-bold my-4 text-xl">{heading}</h2>
            <Hr />
            <main id="cardContainerWidth" className="  w-full overflow-clip relative">
                {/* slider button container */}
                <div className="slide-btn w-full flex justify-between items-center absolute z-10 top-1/4 ">

                    <button className="size-8 aspect-square bg-slate-50 border-none outline-none rounded-full font-bold text-blue-800 " onClick={() => slide('left')}>{'<'}</button>

                    <button className="bg-slate-50 border-none outline-none rounded-full font-bold text-blue-800 size-8" onClick={() => slide('right')}>{'>'}</button>
                    
                </div>
                 {/* slider Scroller Container container */}
                <div className="slide-scroller w-fit flex gap-12 ring transition-all" style={{transform: `translateX(${currentPosition}px)`}}>
                {
                    cards.map((card) =>{
                       return <ProductCard key={card.id} detail={card} />
                    })
                }
                </div>
                
            </main>
        </section>
    )
}