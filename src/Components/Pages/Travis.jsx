import ButtonList from "../UI Components/ButtonList"

export default function Travis() {
    const itemList = [
        { text: "Proxmox", link: "https://proxmox.travisty-creations.com", tab: true },
        { text: "Guac", link: "https://guacamole.travisty-creations.com", tab: true },
        { text: "PiHole", link: "http://10.24.24.112/admin/login.php", tab: true },
        { text: "PfSense", link: "https://10.24.24.1", tab: true },
        { text: "Schedule", link: "https://docs.google.com/spreadsheets/d/1naOVRBDOi6G_Amtr8U06ITkPpGE9vQC9/edit?usp=sharing&ouid=116033080101945418210&rtpof=true&sd=true", tab: true },
        { text: "Budget", link: "/budget", tab: false },
        { text: "Game Planner", link: "/game-planner", tab: false },

    ]

    return (
        <>
            <section className="page">
                <h1>Hi, it's me</h1>
                <ButtonList items={itemList} />
            </section>
        </>
    )
}