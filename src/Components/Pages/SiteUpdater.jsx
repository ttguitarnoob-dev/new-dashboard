import { Button, Image, Link, Progress } from "@nextui-org/react"
import { useEffect, useState } from "react"
import { io } from "socket.io-client"

export default function SiteUpdater() {

    const socket = io('https://site-updater.travisty-creations.com')

    const URL = 'https://site-updater.travisty-creations.com'
    const [items, setItems] = useState()
    const [progress, setProgress] = useState(1)
    const [updating, setUpdating] = useState(false)
    const [updateStatus, setUpdateStatus] = useState(["Starting the update"])

    useEffect(() => {
        // Listen for 'update' events from the server
        socket.on('update', (message) => {
            if (message.data === 'Script finished pooass') {
                setUpdating(false)
                setUpdateStatus((prevMessages) => [...prevMessages, message.data]);
                // setUpdateStatus(["Starting the update"])
            } else {
                if (message.data === "pulling repo") {
                    console.log('IT SAYS PULLING REPO', message.data)
                }
                // switch (message) {
                //     case "pulling repo":
                //         console.log('IT SAYS PULLING REPO', message)
                //         setProgress(10)
                //         break;
                //     case "just woke up bro":
                //         setProgress(50)
                // }
                // Update state with new message data
                setUpdateStatus((prevMessages) => [...prevMessages, message.data]);
            }


        });

        // Cleanup function to remove event listener on unmount
        return () => {
            socket.off('update');
        };
    }, [socket]);

    async function handleFetch(endpoint) {
        try {
            const options = {
                method: "GET"
            }
            const response = await fetch(`${URL}/${endpoint}`, options)
            const results = await response.json()
            var array = results.map(item => item)
            setItems(array)

        } catch (err) {
            console.log('something bad happened when fetching', err)

        }

    }

    async function updateApp(endpoint) {
        console.log('updated the app', endpoint)
        const options = {
            method: "POST",
            body: JSON.stringify({ smell: endpoint }),
            headers: {
                "Content-type": "application/json"
            }
        }
        setUpdating(true)
        try {
            // Send endpoint as the POST body
            const response = await fetch(`${URL}/assupdate`, options)
            console.log('repsonese', response)
            const result = await response.json()
            // console.log('result', result)
            if (result) {
                console.log("RESULT HAPPENED")
                setUpdating(false)
            } else {
                console.log("no result but hey it got this far")
            }
            console.log("AFTER WAIT")
            return
        } catch (err) {
            console.log("tried updating the app and you suck at programming", err)
        }

        // try {
        //     const response = await fetch(`${URL}/${endpoint}`)
        //     // const result = await response.json()
        //     // console.log(result)
        //     setUpdating(false)
        //     return 200
        // } catch (err) {
        //     console.log('Tragedy occurred when trying to update the app', err)
        // }
    }

    useEffect(() => {
        handleFetch('scan-folders')
    }, [])
    // fetch route that runs the update script based on the button selected


    if (updating) {
        return (
            <>
                <section className="center-omg p-10">
                    <Progress isIndeterminate label="Updating the site, please wait..." value={progress} classNames={{
                        base: "max-w-lg",
                        indicator: "bg-gradient-to-r from-purple-500 to-teal-500"
                    }} />
                    <section className="output">
                        <div>
                            {/* Render each message in the state */}
                            {updateStatus.map((msg, index) => (
                                <div key={index}>{msg}</div>
                            ))}
                        </div>
                    </section>
                </section>
            </>
        )
    }
    return (
        <>
            <section>
                <h1 className="page">Site Updater!</h1>
                <h2 className="page">Which site would you like to update you asshole?</h2>

                <div className="button-list mt-10">
                    {/* <Button>{items[0]}</Button> */}
                    {items && items.map((oneItem, index) => (


                        <Button key={index} onClick={() => updateApp(oneItem)} className="item-button mr-10 mb-10" style={{ background: "linear-gradient(113deg, rgba(174,151,255,1) 0%, rgba(172,255,230,1", color: "black", maxWidth: "350px", padding: "2rem", border: "1px solid white", borderRadius: "20px", fontSize: "2rem" }}>{oneItem}</Button>

                    ))}
                </div>

            </section>
        </>
    )
}
