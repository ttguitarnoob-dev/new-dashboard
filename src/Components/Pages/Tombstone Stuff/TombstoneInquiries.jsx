import { useEffect, useState } from "react"
import TombstoneSection from "../../UI Components/TombstoneSection"
import { Button } from "@nextui-org/react"
import { useNavigate } from "react-router"

export default function TombstoneInquiries() {

    const URL = "https://api.ttguitarnoob.cloud/majestics"
    const [items, setItems] = useState()
    const navigate = useNavigate()

    async function handleFetch() {
        try {
            const options = {
                method: "GET"
            }

            const response = await fetch(URL, options)
            const results = await response.json()
            console.log('resutlts', results)
            var array = results.map(item => item)
            console.log("poohole", array)

            setItems(array)

        } catch (err) {
            console.log('something bad happened when fetching', err)
        }

    }

    useEffect(() => {
        handleFetch()
    }, [])



    // console.log('items', items[0].name)
    return (

        <>
            <div className="mb-10">
                <h1 className="page-title">Tombstones</h1>
                <Button onClick={() => navigate("/tombstone")}>
                    Back to Tombstone Stuff
                </Button>
            </div>
            {items && items.map((oneItem, index) => (


                <TombstoneSection oneItem={oneItem} index={index} />

            ))}
        </>
    )
}