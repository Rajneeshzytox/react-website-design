import Hr from "../components/Hr"
import ProductCard from "../components/ProductCard"

export default function Products(){

    return(
        <section className="mt-5">
            <h2 className="font-semibold">New Products</h2>
            <Hr my="my-1" />
            <main className="flex gap-12 overflow-clip">
                <ProductCard src="product1.png" />
                <ProductCard src="product1.png" />
                <ProductCard src="product1.png" />
                <ProductCard src="product1.png" />
                <ProductCard src="product1.png" />
                <ProductCard src="product1.png" />
            </main>
        </section>
    )
}