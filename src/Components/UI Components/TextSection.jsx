export default function TextSection({ title, text }) {

    return (
        <>
            <div className="text-section">
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        </>
    )
}