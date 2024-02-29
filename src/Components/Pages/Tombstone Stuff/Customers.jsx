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
        const options = {
            method: "GET"
        }

        try {
            const response = await fetch(URL, options)
            const data = await response.json()
            setCustomers(data)
        } catch (err) {
            console.log("shit happened when fetching that", err)
        }
    }

    //Call handleFetch
    useEffect(() => {
        handleFetch()
    }, [])

    //Loading message
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
                <div className="p-2">
                    <h1 className="page-title">Tombstone Customers</h1>
                    <Button className="mb-10" onClick={() => navigate("/tombstone/customers/new")} >
                        New Customer
                    </Button>
                    <Button onClick={() => navigate('/tombstone')} className="ml-2 mb-10">
                        Back To Tombstone Stuff
                    </Button>
                </div>
                <CustomerListTable columns={customersColumns} rows={customers} />

            </section>
        </>
    )
}