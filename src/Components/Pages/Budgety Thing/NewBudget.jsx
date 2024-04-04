import { Button, Select, SelectItem } from "@nextui-org/react"
import { useNavigate } from "react-router"

export default function NewBudget() {
    
    const navigate = useNavigate()
    const initialInput = {
        month: ""
    }
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


    async function handleSubmit(e) {
        e.preventDefault()
        const url = "https://api.travisty-creations.com/budgets"
        //const url = "http://localhost:8000/budgets"
        const options = {
            method: "POST",
            body: JSON.stringify(initialInput),
            headers: {
                "Content-type": "application/json"
            }
        }

        try {
            const response = await fetch(url, options)
            const parsed = await response.json()
            navigate("/budget")
            return parsed
        } catch (err){
            console.log("Devastation happened when trying to psot that", err)
        }

    }

    function handleChange(e) {
        console.log('changed?', e.target.value)
        initialInput.month = e.target.value
    }

    return(
        <>
        <section>
            <h1 className="page-title">New Budget</h1>
            <section>
                <form>
                    <Select 
                    label="Select Month"
                    name="chosenMonth"
                    id="chosenMonth"
                    onChange={handleChange}
                    >
                        {months.map((month) => (
                            <SelectItem key={month} value={month.toLowerCase()}>
                                {month}
                            </SelectItem>
                        ))}
                    </Select>
                    <Button className="ml-3 mt-10" onClick={handleSubmit}>Submit</Button>
                </form>
            </section>
        </section>
        </>
    )
}