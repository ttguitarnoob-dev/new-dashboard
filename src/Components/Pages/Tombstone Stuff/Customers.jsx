import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function Customers() {
    const navigate = useNavigate()
    const [customers, setCustomers] = useState()

    async function handleFetch() {
        const URL = `https://api.ttguitarnoob.cloud/customers`
        // const URL = `http://localhost:8000/budgets/${id.id}`
        const options = {
            method: "GET"
        }

        try {
            const response = await fetch(URL, options)
            const data = await response.json()
            console.log('data', data)
            setCustomers(data)
        } catch (err) {
            console.log("shit happened when fetching that", err)
        }
    }

    //Call handleFetch
    useEffect(() => {
        handleFetch()
    }, [])

    return(
        <>
        <section>
            <h1 className="page-title">Tombstone Customers</h1>
            <Button onClick={() => navigate("/tombstone/customers/new")} >
                New Customer
            </Button>
        {customers && customers.map((oneCustomer) => (
            <>
            <section>
                {oneCustomer.name}
            </section>
            </>
        ))}
        </section>
        </>
    )
}