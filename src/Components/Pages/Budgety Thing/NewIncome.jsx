import { Button, Input } from "@nextui-org/react";

export default function NewIncome({id}) {
const initialInput = {}
    function handleChange(e){
        var edited = e.target.name
        initialInput[edited] = e.target.value
        console.log('omgchanged', initialInput)
    }

    async function handleSubmit(e){
        e.preventDefault()
        
        initialInput.amount = parseFloat(initialInput.amount)
        console.log("adding income", initialInput)
        const URL = `http://localhost:8000/budgets/new-income/${id.id}`
        console.log("the id???", id)
        const options = {
            method: "PUT",
            body: JSON.stringify(initialInput),
            headers: {
                "Content-type": "application/json"
            }
        }
        try{
            const response = await fetch(URL, options)
            const data = await response.json()
            console.log("daata", data)
        } catch(err){
            console.log("somtehing terrible happened when adding income", err)
        }

    }



    return (
        <>
            <h2>Add Income</h2>
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