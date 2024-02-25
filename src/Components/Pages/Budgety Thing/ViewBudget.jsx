import { Button, } from "@nextui-org/react"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import ViewBudgetTable from "../../UI Components/ViewBudgetTable"
import ViewIncomeTable from "../../UI Components/ViewIncomesTable";
import { incomesColumns, expensesColumns } from "../../../utils/tableData";
import NewIncome from "./NewIncome";
import NewBudget from "./NewBudget";
import NewExpense from "./NewExpense";



export default function ViewBudget() {
    const id = useParams()
    const navigate = useNavigate()
    const [kitty, setRows] = useState()
   


    function handleClick(url) {
        navigate(url)
    }

    async function handleFetch() {
        const URL = `https://api.ttguitarnoob.cloud/budgets/${id.id}`
        // const URL = `http://localhost:8000/budgets/${id.id}`
        const options = {
            method: "GET"
        }

        try {
            const response = await fetch(URL, options)
            const data = await response.json()
            setRows(data)
        } catch (err) {
            console.log("shit happened when fetching that", err)
        }
    }

    //Call handleFetch
    useEffect(() => {
        handleFetch()
    }, [])

    //Loading Screen
    if (!kitty) {
        return (
            <section>
                <h1>Loading items</h1>
            </section>
        )
    }

    return (
        <>
            <section>
                <h1>View Budget for {kitty.allData.month}</h1>
                <Button onClick={() => handleClick("/budget")}>Back to Budgets</Button>
                <Button onClick={() => handleClick("/budget/add-expense")}>Add An Expense</Button>
                <NewExpense />
                <ViewBudgetTable columns={expensesColumns} rows={kitty.expenses} />
                <h2>Income</h2>
                <NewIncome id={id} />
                <ViewIncomeTable columns={incomesColumns} rows={kitty.incomes} />
                
            </section>
        </>
    )
}