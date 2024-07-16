import { Button, Image, Link, Progress } from "@nextui-org/react"
import { useEffect, useState } from "react"

export default function SiteUpdater() {

    // fetch route that scans each folder in the site directory and displays an update button for each one
    const URL = 'https://site-updater.travisty-creations.com'
    const [items, setItems] = useState()
    const [selectedApp, setSelectedApp] = useState()
    const [updating, setUpdating] = useState(false)

    async function handleFetch(endpoint) {
        try {
            const options = {
                method: "GET"
            }

            const response = await fetch(`${URL}/${endpoint}`, options)
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

    async function updateApp(endpoint) {
        console.log('updated the app', endpoint)
        setUpdating(true)
        try {
            const response = await fetch(`${URL}/${endpoint}`)
            // const result = await response.json()
            // console.log(result)
            setUpdating(false)
            return 200
        } catch (err) {
            console.log('Tragedy occurred when trying to update the app', err)
        }
    }

    useEffect(() => {
        handleFetch('scan-folders')
    }, [])
    // fetch route that runs the update script based on the button selected


    if (updating){
        return(
            <>
            <section className="center-omg">
                <Progress color="success" isIndeterminate label="Updating the site, please wait..." value={55}  classNames={{
                    base: "max-w-lg",
                    indicator: "bg-gradient-to-r from-purple-500 to-teal-500"
                }} />
            </section>
            </>
        )
    }
    return (
        <>
            <section>
                <h1 className="page">Site Updater!</h1>
                <h2 className="page">Which site would you like to update?</h2>

                <div className="button-list mt-10">
                    {/* <Button>{items[0]}</Button> */}
                    {items && items.map((oneItem, index) => (


                        <Button onClick={() => updateApp(`update-app/${oneItem}`)} className="item-button mr-10 mb-10" style={{background: "linear-gradient(113deg, rgba(174,151,255,1) 0%, rgba(172,255,230,1", color: "black", maxWidth: "350px", padding: "2rem", border: "1px solid white", borderRadius: "20px", fontSize: "2rem"}}>{oneItem}</Button>

                    ))}
                </div>
            </section>
        </>
    )
}
