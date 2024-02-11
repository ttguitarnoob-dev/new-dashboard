import { useEffect, useState } from "react"
import TombstoneSection from "../UI Components/TombstoneSection"

export default function TombstoneInquiries() {

    const URL = "https://api.ttguitarnoob.cloud/majestics"
    const [items, setItems] = useState()

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
            <h1 className="page-title">Tombstones</h1>
            {items && items.map((oneItem, index) => (

                <TombstoneSection oneItem={oneItem} index={index} />

            ))}
        </>
    )
}