import ButtonList from "../UI Components/ButtonList";
import ItemButton from "../UI Components/ItemButton";

export default function Home() {
    const listItems = [{text: "Travis", link: "/Travis"}, {text: "Kiara", link: "/Kiara"}]

    return (
        <>

            <h1 className="page-title">Hello You Gorgeous People</h1>
            <h2>Who are you?</h2>
            <ButtonList items={listItems} />
        </>
    )
}