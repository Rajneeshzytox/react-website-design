

export default function BannerCard({data}){
    const imgUrl = `/public/assets/model/${data.src}`;
    const bannerStyle = `w-full h-full min-h-40 relative overflow-clip rounded-md flex flex-col items-start justify-center px-5 text-slate-50`;

    return(
        <div className={bannerStyle} style={{background: data.bg}}>
          <img src={imgUrl} alt="Random Image" className=" block absolute top-0 right-0 h-full" />
           <div className="overlay w-full h-full bg-gradient-to-r from-[rgba(0,0,0,0.4)] to-transparent absolute left-0"></div>
          <h3 className="z-10 uppercase mx-5 font-semibold">{data.subHeading}</h3>
          <h2 className="z-10 uppercase text-2xl mx-5 font-bold">{data.heading}</h2>
        </div>
    )
    
}