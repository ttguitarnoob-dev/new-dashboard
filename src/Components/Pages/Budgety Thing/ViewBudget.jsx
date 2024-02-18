import { Button, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"

let rows = []

const columns = [
    {
        key: "billName",
        label: "EXPENSE",
    },
    {
        key: "amount",
        label: "AMOUNT",
    },
    {
        key: "dueDate",
        label: "DUE DATE",
    },
    {
        key: "paid",
        label: "PAID",
    }
];

export default function ViewBudget() {
    const id = useParams()
    const navigate = useNavigate()
    const [state, setRows] = useState()
    // let rows = [
    //     {
    //         key: "234",
    //         billName: "TAscos",
    //         amount: 20,
    //         dueDate: "yesterday",
    //         paid: "Nope"
    //     }
    // ]
    
    

    function handleClick(url) {
        navigate(url)
    }

    async function handleFetch() {
        // const URL = `https://api.ttguitarnoob.cloud/budgets/${id.id}`
        const URL = `http://localhost:8000/budgets/${id.id}`
        const options = {
            method: "GET"
        }

        try {
            const response = await fetch(URL, options)
            const data = await response.json()
            rows = data
            setRows(data)
        } catch (err) {
            console.log("shit happened when fetching that", err)
        }
    }

    //Call handleFetch
    useEffect(() => {
        handleFetch()
    }, [])

    return (
        <>
            <section>
                <h1>View Budget for {}</h1>
                <Button onClick={() => handleClick("/budget")}>Back to Budgets</Button>
                <Table aria-label="Example table with dynamic content">
                    <TableHeader columns={columns}>
                        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                    </TableHeader>
                    <TableBody items={rows}>
                        {(item) => (
                            <TableRow key={item.key}>
                                {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </section>
        </>
    )
}