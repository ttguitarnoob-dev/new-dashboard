import { Button } from "@nextui-org/react"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"

export default function CustomerDetails() {
    const { id } = useParams()
    const [data, setData] = useState()
    const navigate = useNavigate()

    async function handleFetch() {
        const getURL = `https://api.ttguitarnoob.cloud/customers/${id}`
        const getOptions = {
            method: "GET"
        }

        const response = await fetch(getURL, getOptions)
        const data = await response.json()
        setData(data)
    }

    function handleClick(link){
        navigate(link)
    }


    useEffect(() => {
        handleFetch()
    }, [])

    if (!data) {
        return (
            <>
                <section>
                    <h1>Loading data...{id}</h1>
                </section>
            </>
        )
    }

    return (

        <>
            <section>
                <Button onClick={() => handleClick('/tombstone/customers')}>Back To All Customers</Button>
                <div className="customer-info">
                    <h1>{data.name}</h1>
                    <a href={`tel:${data.phone}`}><p>{data.phone}</p></a>
                    <a href={`mailto:${data.email}`}><p>{data.email}</p></a>
                </div>
                <hr></hr>
                <div className="text-section">
                    <p>{data.customerNotes}</p>
                </div>
                <section>
                    <h2>Jobs</h2>
                    <Button>Add Job</Button>
                    table here
                </section>
            </section>
        </>
    )
}