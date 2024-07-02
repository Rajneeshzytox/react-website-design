const logo = "/public/assets/logo.png"


export default function Header(){
    return(
        <header className="max-w-screen-lg flex justify-between items-center px-5 py-3 mx-auto my-10 max-h-14">

            <div className="logo-containerb bg-slate-200 w-1/3">
                <img src={logo} className="max-w-full"/>
            </div>

            <div className="w-1/3 min-w-56 flex justify-center items-cente rounded-md overflow-clip text-sm">
                <input type="search" placeholder="search" className="px-2 py-1 w-full bg-slate-50 outline-none"/>

                <button className=" bg-blue-500 px-2 py-1 flex justify-center items-center "><span className="material-symbols-outlined text-white">search</span></button>
            </div>
        </header>
    )
}