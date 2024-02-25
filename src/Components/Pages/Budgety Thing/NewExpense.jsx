import { Button, Input } from "@nextui-org/react"

export default function NewExpense() {

    const initialInput = {}

    function handleChange(e) {
        var edited = e.target.name
        if (edited === "dueDate") {
            initialInput["dueDate"] = new Date(e.target.value)
        } else {
            initialInput[edited] = e.target.value
        }

    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log('submitted', initialInput)
    }

    return (
        <>
            <h2>Add An Expense</h2>
            <Input
                name="billName"
                label="Expense Name"
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