import { Button, Input, Textarea } from "@nextui-org/react";
import { useNavigate } from "react-router";

export default function NewCustomer() {
    const navigate = useNavigate()
    const initialInput = {}

    function handleSubmit(e) {
        e.preventDefault()
        console.log("Submitted", initialInput)
    }

    function handleChange(e) {
        var edited = e.target.name
        initialInput[edited] = e.target.value
    }

    return (
        <>
            <section>
                <h1 className="page-title">Create a New Customer</h1>

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


                <Button onClick={handleSubmit} >
                    Submit
                </Button>
            </section>
        </>
    )
}