export default function ItemButton({text, link}){

    return(
        <>
        <a href={link}><div className="item-button" style={{background: "linear-gradient(113deg, rgba(174,151,255,1) 0%, rgba(172,255,230,1", color: "black", maxWidth: "350px", padding: "2rem", border: "1px solid white", borderRadius: "20px", fontSize: "2rem"}}>
            {text}
        </div></a>
        </>
    )
}