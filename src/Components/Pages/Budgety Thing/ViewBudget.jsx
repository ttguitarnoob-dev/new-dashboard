import { Button, useNavbar } from "@nextui-org/react"
import { useNavigate, useParams } from "react-router"

export default function ViewBudget() {
    const id = useParams()
    const navigate = useNavigate()
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    function handleClick(url){
        navigate(url)
    }

    return(
        <>
        <section>
            <h1>View Budget</h1>
            <Button onClick={() => handleClick("/budget")}>Back to Budgets</Button>
            <p>on page {id.id}</p>
        </section>
        </>
    )
}