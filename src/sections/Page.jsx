import Nav from "./Nav"


export default function Page(props){
    return(
        <section className="max-w-[100%] md:max-w-[90%] lg:max-w-[80%] bg-slate-50 mx-auto min-h-[100vh] rounded-md px-8">
            {props.children}
        </section>
    )
}