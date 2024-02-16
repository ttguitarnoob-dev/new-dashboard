import { Button, Input, Select, SelectItem, useNavbar } from "@nextui-org/react"
import { useNavigate, useParams } from "react-router"

export default function NewBudget() {
    
    const navigate = useNavigate()
    const initialInput = {
        
    }
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    function handleClick(url){
        navigate(url)
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log("Submitted", initialInput)
    }

    function handleChange(e) {
        var edited = e.target.name
        initialInput[edited] = e.target.value
    }

    return(
        <>
        <section>
            <h1 className="page-title">New Budget</h1>
            <section>
                <form>
                    <Input 
                    label="Month"
                    name="chosenMonth"
                    id="chosenMonth"
                    onClick={handleClick}
                    />
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
                </form>
            </section>
        </section>
        </>
    )
}