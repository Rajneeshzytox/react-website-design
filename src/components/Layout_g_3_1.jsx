// grid layout 2 col  2 row
// "item1 item2"
// "item1 item2"

// imports 
import BannerCard from "./BannerCard"


export default function Layout_g_3_1(){

    return(
        <section className="grid lg:grid-cols-3 md:grid-cols-2 lg:gird-rows-2 gap-4">

            <main className="lg:col-span-2 lg:row-span-2 md:col-span-2 rounded-md">
                <BannerCard src="banner1.png" bg="bg-[hsla(220,40%,60%,0.2)]"/>
            </main>

            <main className="rounded-md"><BannerCard src="banner2.png" bg="bg-[hsla(220,20%,40%,0.2)]" /></main>

            <main className="rounded-md"><BannerCard src="banner3.png" bg="bg-[hsla(0,50%,40%,0.2)]" /></main>
        </section>
    )
}

