

export default function Hr(props){
    const hrStyle = `h-[1px] ${props.my} bg-blue-500 block mx-auto`
    return(
        <span className={hrStyle} ></span>
    )
}