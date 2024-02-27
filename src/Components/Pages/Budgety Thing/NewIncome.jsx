import { Button, Input } from "@nextui-org/react";
import { useNavigate } from "react-router";

export default function NewIncome({ id }) {
    const navigate = useNavigate()
    const initialInput = {}
    
    function handleChange(e) {
        var edited = e.target.name
        initialInput[edited] = e.target.value
    }

    async function handleSubmit(e) {
        e.preventDefault()

        initialInput.amount = parseFloat(initialInput.amount)
        const URL = `https://api.ttguitarnoob.cloud/budgets/new-income/${id.id}`
        const options = {
            method: "PUT",
            body: JSON.stringify(initialInput),
            headers: {
                "Content-type": "application/json"
            }
        }
        try {
            const response = await fetch(URL, options)
            const data = await response.json()
            navigate(`/budget`)
            return data
        } catch (err) {
            console.log("somtehing terrible happened when adding income", err)
        }

    }



    return (
        <>
            <h2 className="text-3xl p-3">Add Income</h2>
            <Input
                name="source"
                label="Income Source"
                id="source"
                type="text"
                onChange={handleChange}
            />
            <Input
                name="amount"
                label="Income Amount"
                id="amount"
                type="number"
                placeholder="$"
                onChange={handleChange}
            />
            <Button onClick={handleSubmit}>Make It Rain Baby</Button>
        </>
    )
}