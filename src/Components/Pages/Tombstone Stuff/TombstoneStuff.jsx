import ButtonList from "../../UI Components/ButtonList";

export default function TombstoneStuff(){

    const itemList = [
        { text: "Inquiries", link: "/tombstone/inquiries", tab: false },
        { text: "Your Site", link: "https://majesticmonuments.org", tab: true },
        { text: "Customer Database", link: "/tombstone/customers", tab: false },

    ]

    return(
        <>
        <h1 className="page-title">Tombstone Stuff</h1>
        <ButtonList items={itemList} />
        </>
    )
}