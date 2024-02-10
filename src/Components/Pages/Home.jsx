import ButtonList from "../UI Components/ButtonList";

export default function Home() {
    const listItems = [
        {text: "Travis", link: "/Travis", tab: false}, 
        {text: "Kiara", link: "/Kiara", tab: false}
    ]

    return (
        <>

            <h1 className="page-title">Hello You Gorgeous People</h1>
            <h2>Who are you?</h2>
            <ButtonList items={listItems} />
        </>
    )
}