
//job data will be present, so if there is already an invoice link, generate invoice will not display. It will say Invoice already present, click here to view
//boolean variable for each checkbox, true if checked
//function for each checkbox:
//generate invoice will make a post request to the correct route, which will create teh invoice db entry and then update the job from emailLink: null to emailLink: "thelink"
//email function will simply send an email, however I decide to do that, probably another backend route
//update paid will just do a post request to update that job
//submit button will trigger its own function that has if generate = true, then run its function, etc

import { Button, Checkbox, CheckboxGroup } from "@nextui-org/react"

export default function CloseJob({customerData, jobIndex}) {
    let isChecked = [false, false, false]

    function checkTheChecks(index) {
        if (!isChecked[index]) {
            isChecked[index] = true
        } else {
            isChecked[index] = false
        }
    }

    //Generate invoice, linked to isChecked[0]
    async function generateInvoice() {
        console.log('yo im generating an invoice now', customerData._id, jobIndex)
    }

    //Send Email, linked to isChecked[1]
    async function sendEmail() {
        console.log('sending email now')
    }

    //Update paid, linked to isChecked[2]
    async function updatePaid() {
        console.log('updating paid')
    }

    //Chose which functions to run when submit button is clicked, based on which checks were checkededed
    function handleSubmit() {
        
        //Putting paid first so that all the others can have the correct paid status
        if (isChecked[2]) {
            updatePaid()
        }

        if (isChecked[0]){
            generateInvoice()
        }

        if (isChecked[1]) {
            sendEmail()
        }


        console.log('function done')

    }

    return(
        <>
        <section>
            <CheckboxGroup label="Select An Action">
                <Checkbox value={'invoice'} onChange={() => checkTheChecks(0)}>Generate Invoice</Checkbox>
                <Checkbox value={'email'} onChange={() => checkTheChecks(1)}>Send Invoice Email</Checkbox>
                <Checkbox value={'paid'} onChange={() => checkTheChecks(2)}>Update Paid</Checkbox>
            </CheckboxGroup>
            <Button onClick={handleSubmit}>Submit</Button>
        </section>
        </>
    )
}