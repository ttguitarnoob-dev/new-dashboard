export default function TombstoneSection({ oneItem, index }) {

    function bgDetermine() {
        if (index % 2 == 0) {
            return "linear-gradient(148deg, rgba(255,255,255,1) 0%, rgba(255,182,253,1) 100%)"
        } else {
            return "linear-gradient(148deg, rgba(255,255,255,1) 0%, rgba(182,199,255,1) 100%)"
        }
    }

    return (
        <>
            <section style={{ background: bgDetermine() }} className="tombstone-item">
                <div style={{color: "black"}} className="center-text">
                    <h2>{oneItem.name}</h2>
                    <p>Email:  <a style={{textDecoration: "underline"}} href={`mailto:${oneItem.email}`}>{oneItem.email}</a></p>
                    <p>Phone:  <a style={{textDecoration: "underline"}} href={`tel:${oneItem.phone}`}>{oneItem.phone}</a></p>
                    <p>Location: {oneItem.location}</p>
                    <p>Inquiry: {oneItem.help}</p>
                </div>
            </section>
        </>
    )
}