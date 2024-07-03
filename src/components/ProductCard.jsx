

export default function ProductCard({detail}){
    // const ProductUrl = `/public/assets/${detail.src}`;
    const ProductUrl = detail.src;

    
    return(
        <div className="CardWidth w-52 min-w-52 max-w-52 min-h-60 flex flex-col items-center gap-2 overflow-clip flex-nowrap">
            <img className="bg-slate-100 w-full object-cover h-52 object-center" src={ProductUrl}/>

            <p className=" text-center text-sm ">
            {detail.disc}
            </p>

            <div className="price flex items-end gap-3 font-bold">
                <strike className="text-xs text-red-500">
                    {detail.prePrice}
                </strike>
                <p>
                    {detail.newPrice}
                </p>
            </div>

            <button className="px-2 py-1 bg-slate-800 hover:bg-blue-500 font-semibold text-white text-xs flex items-center gap-2"><span className="material-symbols-outlined">
                shopping_cart
            </span>Add to Cart</button>
        </div>
    )
}