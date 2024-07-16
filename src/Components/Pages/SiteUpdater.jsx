import { Button, Image, Link } from "@nextui-org/react"
import { useEffect, useState } from "react"

export default function SiteUpdater() {

    // fetch route that scans each folder in the site directory and displays an update button for each one
    const URL = 'http://127.0.0.1:5000/scan-folders'
    const [items, setItems] = useState()

    async function handleFetch() {
        try {
            const options = {
                method: "GET"
            }

            const response = await fetch(URL, options)
            console.log('omg', response)
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
    // fetch route that runs the update script based on the button selected


    return (
        <>
            <section>
                <h1 className="page">Site Updater!</h1>

                <div className="page mt-10">
                    {/* <Button>{items[0]}</Button> */}
                    {items && items.map((oneItem, index) => (


                        <Button>{oneItem}</Button>

                    ))}
                </div>
            </section>
        </>
    )
}