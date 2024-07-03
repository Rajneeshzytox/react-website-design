// grid layout 2 col  2 row
// "item1 item2"
// "item1 item2"

// imports 
import BannerCard from "./BannerCard"

// import data
import { BannerCardsData } from "../data/BannerCard_data"

export default function Layout_g_3_1(){

    return(
        <section className="grid lg:grid-cols-3 md:grid-cols-2 lg:gird-rows-2 gap-4">

            <main className="lg:col-span-2 lg:row-span-2 md:col-span-2 rounded-md">
                <BannerCard data={BannerCardsData[0]}/>
            </main>

            <main className="rounded-md"><BannerCard data={BannerCardsData[1]}/></main>

            <main className="rounded-md"><BannerCard data={BannerCardsData[2]}/></main>
        </section>
    )
}

