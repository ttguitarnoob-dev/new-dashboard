import { Button, CircularProgress } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { customersColumns } from "../../../utils/tableData";
import CustomerListTable from "../../UI Components/CustomerListTable";
import { ArrowIcon } from "../../UI Components/SVG Icons/ArrowIcon";

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
            <section className="center-omg mt-20">
                <CircularProgress color="secondary" label="Loading Customer Data..." />
            </section>
            
        )
    }

    return (
        <>
            <section>

                <div className="p-2">
                <Button isIconOnly startContent={<ArrowIcon />} onClick={() => navigate('/tombstone')} className="ml-2 mb-10"> </Button> 
                    <h1 className="page-title">Tombstone Customers</h1>
                    <Button className="mb-10" onClick={() => navigate("/tombstone/customers/new")} >
                        New Customer
                    </Button>
                    
                </div>
                <CustomerListTable columns={customersColumns} rows={customers} />

            </section>
        </>
    )
}