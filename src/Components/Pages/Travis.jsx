import ButtonList from "../UI Components/ButtonList"

export default function Travis(){
    const itemList = [
        { text: "Proxmox", link: "https://proxmox.ttguitarnoob.cloud", tab: true },
        { text: "PiHole", link: "http://10.24.24.112/admin/login.php", tab: true },
        { text: "Schedule", link: "https://docs.google.com/spreadsheets/d/1naOVRBDOi6G_Amtr8U06ITkPpGE9vQC9/edit?usp=sharing&ouid=116033080101945418210&rtpof=true&sd=true", tab: true },
        { text: "Budget", link: "/budget", tab: false },

    ]

    return(
        <>
        <h1>Hi, it's me</h1>
        <ButtonList items={itemList} />
        </>
    )
}