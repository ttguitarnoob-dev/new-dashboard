import { Button, Input, Textarea } from "@nextui-org/react";
import { useNavigate } from "react-router";

export default function NewCustomer() {
    const navigate = useNavigate()
    const initialInput = {}
    const postURL = "https://api.travisty-creations.com/customers"
    // const postURL = "https://api.ttguitarnoob.cloud/customers"

    async function handleSubmit(e) {
        e.preventDefault()

        const postOptions = {
            method: "POST",
            body: JSON.stringify(initialInput),
            headers: {
                "Content-type": "application/json"
            }
        }
        console.log("Submitted", initialInput)

        const response = await fetch(postURL, postOptions)
        const data = await response.json()
        console.log('submitted data?', data)
        navigate('/tombstone/customers')
        return data
    }

    function handleChange(e) {
        var edited = e.target.name
        initialInput[edited] = e.target.value
    }

    function handleClick(link){
        navigate(link)
    }


    return (
        <>
            <section>
                <h1 className="page-title">Create a New Customer</h1>
                <Button onClick={() => handleClick('/tombstone/customers')} className="ml-8">Back To All Customers</Button>

                <section className="p-8">
                    <form>
                        <div className="mb-5">
                            <Input
                                label="Customer Name"
                                type="text"
                                onChange={handleChange}
                                name="name"
                                id="name"
                                color="secondary"

                            />
                        </div>
                        <div className="mb-5">
                            <Input
                                label="Phone"
                                name="phone"
                                id="phone"
                                type="text"
                                color="secondary"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-5">
                            <Input
                                label="email"
                                type="email"
                                color="secondary"
                                onChange={handleChange}
                                name="email"
                                id="email"
                            />
                        </div>
                        <div className="">
                            <Textarea
                                label="Customer Notes"
                                name="customerNotes"
                                id="customerNotes"
                                placeholder="Enter any other customer information that you need to remember. You can add to this later."
                                color="secondary"
                                onChange={handleChange}
                            />
                        </div>
                    </form>
                </section>


                <Button className="m-8" onClick={handleSubmit} >
                    Submit
                </Button>
            </section>
        </>
    )
}