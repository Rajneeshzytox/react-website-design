const h3Style = "text-xl font-semibold mb-8";
const aStyle = "font-semibold text-slate-600 hover:text-black";

export default function Footer(){
    return(
        <footer className="flex flex-col lg:flex-row-reverse xl:flex-row-reverse gap-6 justify-between px-4">
            <div className="links flex gap-12 flex-wrap">
                <div >
                    <h3 className={h3Style}>Introduction</h3>
                    <ul>
                        <li><a href="#" className={aStyle}>About Us</a></li>
                        <li><a href="#" className={aStyle}>Custoemer Services</a></li>
                        <li><a href="#" className={aStyle}>My Cart</a></li>
                        <li><a href="#" className={aStyle}>Search product</a></li>
                        <li><a href="#" className={aStyle}>Contact</a></li>
                        
                    </ul>
                </div>
                <div>
                    <h3 className={h3Style}>Why Us</h3>
                    <ul>
                        <li><a href="#" className={aStyle}>Shipping</a></li>
                        <li><a href="#" className={aStyle}>Shipping Solution</a></li>
                        <li><a href="#" className={aStyle}>Partners & Brands</a></li>
                        <li><a href="#" className={aStyle}>Reviews</a></li>

                    </ul>
                </div>
                <div>
                    <h3 className={h3Style}>MY Account</h3>
                    <ul>
                        <li><a href="#" className={aStyle}>Sign In</a></li>
                        <li><a href="#" className={aStyle}>View Cart</a></li>
                        <li><a href="#" className={aStyle}>My Account</a></li>
                        <li><a href="#" className={aStyle}>Transaction History</a></li>
                       
                    </ul>
                </div>
            </div>
            <div className="links flex flex-col gap-2">
                <h3 className="text-3xl font-semibold uppercase my-6">Clothz Store</h3>
                <div title="portfolio, other works" className="flex items-center gap-2">
                <span className="material-symbols-outlined">
                    public
                    </span>
                    <a href="rajneeshzytox.github.io/portfolio" >Portfolio</a>
                </div>
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined">
                        mail
                    </span>
                    <a href="mailto:kumarrajneesh.work@gmail.com" title="contact me">kumarrajneesh.work@gmail.com</a>
                </div>
              
            </div>
        </footer>
    )
}