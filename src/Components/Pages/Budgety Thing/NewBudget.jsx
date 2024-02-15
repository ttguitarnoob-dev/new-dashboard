import { Button, Input, useNavbar } from "@nextui-org/react"
import { useNavigate, useParams } from "react-router"

export default function NewBudget() {
    
    const navigate = useNavigate()
    const initialInput = {
        
    }

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
                </form>
            </section>
        </section>
        </>
    )
}