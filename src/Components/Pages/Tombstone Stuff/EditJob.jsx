import { Button, Input, Textarea } from "@nextui-org/react";

export default function EditJob({jobDetails, id}) {
    let initialInput = {
        location: jobDetails.location,
        date: jobDetails.date,
        jobNotes: jobDetails.jobNotes,
        index: jobDetails.key,
        customerID: id
    }

    function handleChange(e) {
        var edited = e.target.name
        initialInput[edited] = e.target.value
    }

    async function handleSubmit() {
        console.log('submitted', initialInput)
    }

    console.log('details', jobDetails)

    return(
        <>
        <section>
            <h1>Edit Job Details for {jobDetails.location}</h1>
            <Input
                name="location"
                label="Location"
                id="location"
                type="text"
                onChange={handleChange}
                defaultValue={jobDetails.location}
            />
            <Input
                name="date"
                label="Date"
                id="date"
                type="date"
                onChange={handleChange}
                defaultValue={jobDetails.date}
            />
            <Textarea
                name="jobNotes"
                label="Job Details"
                id="jobNotes"
                type="textarea"
                onChange={handleChange}
                defaultValue={jobDetails.jobNotes}
            />
            
            <Button onPress={handleSubmit} className="mt-5">
                Submit
            </Button>
            
        </section>
        </>
    )
}