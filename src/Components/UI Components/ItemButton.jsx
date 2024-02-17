export default function ItemButton({text, link, tab}){

    function newTab(){
        if (tab){
            return "_blank"
        } else {
            return "_self"
        }
    }

    return(
        <>
        <a key={text} target={newTab()} href={link}><div key={text} className="item-button" style={{background: "linear-gradient(113deg, rgba(174,151,255,1) 0%, rgba(172,255,230,1", color: "black", maxWidth: "350px", padding: "2rem", border: "1px solid white", borderRadius: "20px", fontSize: "2rem"}}>
            {text}
        </div></a>
        </>
    )
}