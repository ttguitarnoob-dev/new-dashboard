import { Button, Input } from "@nextui-org/react"
import { useNavigate } from "react-router"

export default function NewExpense({ id }) {

    const initialInput = {}
    const navigate = useNavigate()

    function handleChange(e) {
        var edited = e.target.name
        if (edited === "dueDate") {
            initialInput["dueDate"] = new Date(e.target.value)
        } else {
            initialInput[edited] = e.target.value
        }

    }

    async function handleSubmit(e) {
        e.preventDefault()
        initialInput.howMuch = parseFloat(initialInput.howMuch)
        const URL = `http://localhost:8000/budgets/new-expense/${id.id}`
        const options = {
            method: "PUT",
            body: JSON.stringify(initialInput),
            headers: {
                "Content-type": "application/json"
            }
        }
        console.log('submitted', initialInput)
        try {
            const response = await fetch(URL, options)
            const data = await response.json()
            navigate(`/budget`)
            return data
        } catch (err) {
            console.log("We couldn't add the expense so I guess we just won't pay it", err)
        }
    }

    return (
        <>
            <h2>Add An Expense</h2>
            <Input
                name="billName"
                label="Add An Expense"
                id="billName"
                type="text"
                onChange={handleChange}
            />
            <Input
                name="dueDate"
                label="Due Date"
                id="dueDate"
                type="date"
                onChange={handleChange}
            />
            <Input
                name="howMuch"
                label="Amount"
                id="howMuch"
                type="number"
                placeholder="$"
                onChange={handleChange}
            />
            <Button onClick={handleSubmit}>Empty The Account Further</Button>
        </>
    )
}