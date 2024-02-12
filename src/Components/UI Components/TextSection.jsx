export default function TextSection({ title, text, index }) {

    function bgDetermine() {
        if (index % 2 === 0) {
            return "linear-gradient(148deg, rgba(255,255,255,1) 0%, rgba(255,182,253,1) 100%)"
        } else {
            return "linear-gradient(148deg, rgba(255,255,255,1) 0%, rgba(182,199,255,1) 100%)"
        }
    }

    return (
        <>
            <div style={{background: bgDetermine()}} className="w-screen p-20 text-black ">
                <h1 className="text-3xl font-bold mb-6">{title}</h1>
                <p className="text-lg">{text}</p>
            </div>
        </>
    )
}