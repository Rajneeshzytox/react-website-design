

export default function BannerCard(props){
    const imgUrl = `/public/assets/${props.src}`;
    const bannerStyle = `w-full h-full min-h-40 relative overflow-clip ${props.bg} rounded-md flex flex-col items-start justify-center text-slate-50`;

    return(
        <div className={bannerStyle}>
          <img src={imgUrl} alt="Random Image" className=" block absolute top-0 right-0 h-full" />
            <div className="w-full h-full absolute opacity-35 bg-slate-900"></div>
          <h3 className="z-10 uppercase ml-10 font-semibold">Banner Text</h3>
          <h2 className="z-10 uppercase text-2xl ml-10 font-bold">Creative Cloths</h2>
        </div>
    )
    
}