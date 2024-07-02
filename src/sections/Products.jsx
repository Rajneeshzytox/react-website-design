import Hr from "../components/Hr"
import ProductCard from "../components/ProductCard"

export default function Products({heading, cards}){
      
    return(
        <section className="mt-8">
            <h2 className="font-bold my-4 text-xl">{heading}</h2>
            <Hr />
            <main className="flex gap-12 overflow-clip">
                {/* <ProductCard detail={cards[3]} /> */}
                {
                    cards.map((card) =>{
                       return <ProductCard key={card.id} detail={card} />
                    })
                }
            </main>
        </section>
    )
}