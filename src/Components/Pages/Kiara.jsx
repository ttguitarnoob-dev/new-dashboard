import ButtonList from "../UI Components/ButtonList"

export default function Kiara() {
    const itemList = [
        { text: "Tombstone Stuff", link: "/tombstone", tab: false },
        { text: "School Stuff", link: "/academy", tab: false },

    ]

    return (
        <>
            <h1>Hello Pretty Lady!</h1>
            <ButtonList items={itemList} />
        </>
    )
}