import ItemButton from "./ItemButton";

export default function ButtonList({ items }) {
    return (
        <>
            <div className="button-list">
                {items && items.map((oneItem) => (
                    <ItemButton
                        text={oneItem.text}
                        link={oneItem.link}
                        tab={oneItem.tab}
                    />
                ))}
            </div>
        </>
    )
}