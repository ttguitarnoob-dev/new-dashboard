import { Button, } from "@nextui-org/react"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import ViewBudgetTable from "../../UI Components/ViewBudgetTable"

const columns = [
    { name: "EXPENSE", uid: "billName" },
    { name: "AMOUNT", uid: "howMuch" },
    { name: "DUE DATE", uid: "dueDate" },
];

const users = [
    {
        id: 1,
        name: "Tony Reichert",
        role: "CEO",
        team: "Management",
        status: "active",
        age: "29",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        email: "tony.reichert@example.com",
    },
    {
        id: 2,
        name: "Zoey Lang",
        role: "Technical Lead",
        team: "Development",
        status: "paused",
        age: "25",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        email: "zoey.lang@example.com",
    },
    {
        id: 3,
        name: "Jane Fisher",
        role: "Senior Developer",
        team: "Development",
        status: "active",
        age: "22",
        avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
        email: "jane.fisher@example.com",
    },
    {
        id: 4,
        name: "William Howard",
        role: "Community Manager",
        team: "Marketing",
        status: "vacation",
        age: "28",
        avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
        email: "william.howard@example.com",
    },
    {
        id: 5,
        name: "Kristen Copper",
        role: "Sales Manager",
        team: "Sales",
        status: "active",
        age: "24",
        avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
        email: "kristen.cooper@example.com",
    },
];

export default function ViewBudget() {
    const id = useParams()
    const navigate = useNavigate()
    const [pooass, setRows] = useState()
    let rows = []
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
    if (!pooass) {
        return (
            <section>
                <h1>Loading items</h1>
            </section>
        )
    }

    return (
        <>
            <section>
                <h1>View Budget for {pooass.month}</h1>
                <Button onClick={() => handleClick("/budget")}>Back to Budgets</Button>
                <ViewBudgetTable columns={columns} rows={pooass.expenses} />
                
            </section>
        </>
    )
}