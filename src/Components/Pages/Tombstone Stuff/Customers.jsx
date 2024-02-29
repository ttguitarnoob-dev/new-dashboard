import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { customersColumns } from "../../../utils/tableData";
import CustomerListTable from "../../UI Components/CustomerListTable";

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

    if (!customers) {
        return (
            <section>
                <h1>Loading items</h1>
            </section>
        )
    }

    return (
        <>
            <section>
                <div className="p-4">
                    <h1 className="page-title">Tombstone Customers</h1>
                    <Button className="mb-10" onClick={() => navigate("/tombstone/customers/new")} >
                        New Customer
                    </Button>
                    <Button className="ml-1 mb-10">Back To Tombstone Stuff</Button>
                </div>
                <CustomerListTable columns={customersColumns} rows={customers} />
                {/* {customers && customers.map((oneCustomer) => (
            <>
            <section>
                {oneCustomer.name}
            </section>
            </>
        ))} */}
            </section>
        </>
    )
}