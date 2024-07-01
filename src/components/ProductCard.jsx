

export default function ProductCard(props){
    const ProductUrl = `/public/assets/${props.src}`;
    return(
        <div className="min-w-48 min-h-60 flex flex-col items-center gap-2 overflow-clip">
            <img className=" w-full object-cover h-52 object-center" src={ProductUrl}/>

            <p className=" text-center text-sm ">Lorem ipsum dolor sit amet consectetur</p>

            <div className="price flex items-end gap-3 font-bold">
                <strike className="text-xs text-red-500">$67.99</strike>
                <p>$56.99</p>
            </div>

            <button className="px-2 py-1 bg-slate-800 hover:bg-blue-500 font-semibold text-white text-xs flex items-center gap-2"><span class="material-symbols-outlined">
                shopping_cart
            </span>Add to Cart</button>
        </div>
    )
}