import ButtonList from "../UI Components/ButtonList";

export default function TombstoneStuff(){

    const itemList = [
        { text: "Inquiries", link: "/tombstone/inquiries", tab: false },
        { text: "Your Site", link: "https://majestic-monuments.ttguitarnoob.cloud", tab: true },

    ]

    return(
        <>
        <h1 className="page-title">Tombstone Stuff</h1>
        <ButtonList items={itemList} />
        </>
    )
}