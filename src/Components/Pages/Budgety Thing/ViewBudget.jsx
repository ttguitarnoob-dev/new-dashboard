import { Button, useNavbar } from "@nextui-org/react"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router"

export default function ViewBudget() {
    const id = useParams()
    const navigate = useNavigate()
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    function handleClick(url){
        navigate(url)
    }

    async function handleFetch(){
        // const URL = `https://api.ttguitarnoob.cloud/budgets/${id}`
        const URL = `http://localhost:8000/budgets/${id.id}`
        const options = {
            method: "GET"
        }

        try{
            const response = await fetch(URL, options)
            const data = await response.json()
            console.log('got dada', data)
            // rows = data
            // setBudgets(data)
        } catch(err){
            console.log("shit happened when fetching that", err)
        }
    }

    //Call handleFetch
    useEffect(() => {
        handleFetch()
    }, [])

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