import { useEffect, useState } from "react"
import { Button } from "@nextui-org/react"

export default function Tombstone() {

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
            <h1>Tombstones</h1>
            {items && items.map((oneItem) => (

                <section className="tombstone-item">
                    <div className="center-text">
                        <h2>{oneItem.name}</h2>
                        <p>Email:  <a href={`mailto:${oneItem.email}`}>{oneItem.email}</a></p>
                        <p>Phone:  <a href={`tel:${oneItem.phone}`}>{oneItem.phone}</a></p>
                        <p>Location: {oneItem.location}</p>
                        <p>Inquiry: {oneItem.help}</p>
                    </div>
                </section>

            ))}
        </>
    )
}