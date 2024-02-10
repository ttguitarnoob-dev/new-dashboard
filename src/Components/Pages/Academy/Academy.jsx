import ButtonList from "../../UI Components/ButtonList";

export default function Academy() {
    const itemList = [
        { text: "Journals", link: "/academy/journals", tab: false },
        { text: "Quizzes", link: "/academy/quizzes", tab: false },
        { text: "EasyPeasy", link: "https://myepassignments.com/pages/account.html", tab: true },
        { text: "Zearn", link: "https://zearn.org", tab: true },
        { text: "Good And Beautiful", link: "https://goodandbeautiful.com", tab: true },
        { text: "Youtube", link: "https://youtube.com", tab: true },

    ]

    return (
        <>
            <h1 className="page-title">KittyCottage Academy</h1>
            <ButtonList items={itemList} />
        </>
    )
}