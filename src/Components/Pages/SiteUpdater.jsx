import { Button, Image, Link } from "@nextui-org/react"
import { useState } from "react"

export default function SiteUpdater() {

    // fetch route that scans each folder in the site directory and displays an update button for each one

    // fetch route that runs the update script based on the button selected
    

    return(
        <>
        <section>
            <h1 className="page">Site Updater!</h1>
            
            <div className="page mt-10">
                <Button onClick={() => setNumero(numero + 1)}>Next</Button>
            </div>
        </section>
        </>
    )
}