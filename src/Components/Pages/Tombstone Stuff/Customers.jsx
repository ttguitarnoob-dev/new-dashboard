import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router";

export default function Customers() {
    const navigate = useNavigate()

    return(
        <>
        <section>
            <h1 className="page-title">Tombstone Customers</h1>
            <Button onClick={() => navigate("/tombstone/customers/new")} >
                New Customer
            </Button>
        </section>
        </>
    )
}