import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure, Input, Textarea, CheckboxGroup, Checkbox, Listbox, ListboxItem, CircularProgress } from "@nextui-org/react"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import { jobsColumns } from "../../../utils/tableData"
import JobsTable from "../../UI Components/JobsTable"
import { ArrowIcon } from "../../UI Components/SVG Icons/ArrowIcon"
import { PhoneIcon } from "../../UI Components/SVG Icons/PhoneIcon"
import { MailIcon } from "../../UI Components/SVG Icons/MailIcon"

export default function CustomerDetails() {
    const { id } = useParams()
    const [customer, setCustomer] = useState()
    const [services, setServices] = useState()
    const [jobs, setJobs] = useState()
    // const [checks, setChecks] = useState([])
    let checks = []
    const navigate = useNavigate()
    const { isOpen, onOpen, onClose } = useDisclosure()
    let initialInput = { services: [], totalPrice: 0 }


    //Initial Customer Data Fetch
    async function handleFetch() {
        // const getURL = `http://localhost:8000/customers/${id}`
        const getURL = `https://api.travisty-creations.com/customers/${id}`
        const getOptions = {
            method: "GET"
        }

        const response = await fetch(getURL, getOptions)
        const data = await response.json()
        console.log('thedata', data)
        setCustomer(data.oneCustomer)
        setJobs(data.jobs)
    }

    //Put fetch
    async function updateCustomerData() {
        // const URL = `https://api.ttguitarnoob.cloud/customers/${id}`
        const URL = `https://api.travisty-creations.com/customers/${id}`
        const options = {
            method: "PUT",
            body: JSON.stringify(customer),
            mode: "cors",
            headers: {
                "Content-type": "application/json"
            }
        }

        try {
            const response = await fetch(URL, options)
            const data = await response.json()
            // onClose()
            window.location.reload()
            return data
        } catch (err) {
            console.log("I can't believe you tried to to a put request man", err)
        }
    }

    //Get Services Data
    async function fetchServices() {
        const URL = "https://api.travisty-creations.com/prices"
        const options = {
            method: "GET"
        }

        try {
            const response = await fetch(URL, options)
            const data = await response.json()
            setServices(data)
        } catch (err) {
            console.log('the world ended when fetching services', err)
        }
    }

    //Navigate Function
    function handleClick(link) {
        navigate(link)
    }

    //Form Handling
    function handleChange(e) {
        const edited = e.target.name
        initialInput[edited] = e.target.value
        console.log('edited', initialInput)
    }

    //State for checkboxes in the new job form
    function handleChecks(e) {

        const checkedIndex = e.target.value
        if (checks.includes(checkedIndex)) {
            const index = checks.indexOf(checkedIndex)
            if (index > -1) {
                checks.splice(index, 1)
            }

        } else {
            // setChecks([...checks, checkedIndex])
            checks.push(checkedIndex)
        }

    }

    //Clear checked state if form is closed
    function cancelForm() {
        checks = []
        onClose()
    }

    //Add prices of checked items in the form
    function addPrices() {
        if (initialInput.totalPrice > 0) {
            initialInput.services.push({ serviceName: "Custom Cleaning Job", price: initialInput.totalPrice })
        } else {
            let totalPrice = 0
            checks.map((oneCheck) => {
                initialInput.services.push({ serviceName: services[oneCheck].name, price: services[oneCheck].price })
                totalPrice += services[oneCheck].price
            })
            initialInput.totalPrice = totalPrice
        }
        customer.jobs.push(initialInput)
        // setJobs([...jobs, initialInput])
        updateCustomerData()
    }

    //Open add job modal and fetch services data
    function addJob() {
        fetchServices()

        onOpen()
    }

    //Initial data fetch call
    useEffect(() => {
        handleFetch()
    }, [])

    //Loading screen
    if (!customer) {
        return (
            <>
                <section className="center-omg mt-20">
                    <CircularProgress color="secondary" label="Loading Customer Data..." />
                </section>
            </>
        )
    }

    return (

        <>
            <section>
                <Button className="ml-5" isIconOnly startContent={<ArrowIcon />} onClick={() => handleClick('/tombstone/customers')}></Button>
                <section className="center-omg">
                    <div className="customer-info">
                        <h1 className="text-5xl mb-5">{customer.name}</h1>
                        <Listbox>
                            <ListboxItem startContent={<PhoneIcon />} href={`tel:${customer.phone}`}>
                                {customer.phone}
                            </ListboxItem>
                            <ListboxItem startContent={<MailIcon />} href={`mailto:${customer.email}`}>
                                {customer.email}
                            </ListboxItem>
                        </Listbox>
                        <p>{customer.customerNotes}</p>
                    </div>
                </section>
                <hr></hr>

                <section className="text-4xl ml-4 mt-10 mb-4">
                    <h2>Jobs</h2>
                </section>
                <JobsTable columns={jobsColumns} rows={jobs} customerID={id} customerData={customer} />
                <Button className="m-4" onClick={addJob}>Add Job</Button>
                <Modal scrollBehavior="inside" backdrop="blur" isOpen={isOpen} onClose={onClose}>
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader>
                                    <h2>Add Job For {customer.name}</h2>
                                </ModalHeader>
                                <ModalBody>
                                    <div className="mb-5">
                                        <Input
                                            label="Location"
                                            type="text"
                                            onChange={handleChange}
                                            name="location"
                                            id="location"
                                            color="secondary"

                                        />
                                    </div>
                                    <div className="mb-5">
                                        <Input
                                            label="Complete By Date"
                                            type="date"
                                            onChange={handleChange}
                                            name="date"
                                            id="date"
                                            color="secondary"

                                        />
                                    </div>
                                    <div className="mb-5">
                                        <Textarea
                                            label="Job Details"
                                            type="text"
                                            onChange={handleChange}
                                            name="jobNotes"
                                            id="jobNotes"
                                            color="secondary"

                                        />
                                    </div>
                                    <div>
                                        <CheckboxGroup
                                            label="Select Services"
                                        >

                                            {services && services.map((oneService, index) => (
                                                <Checkbox onChange={handleChecks} key={oneService._id} value={index}>{oneService.name}</Checkbox>
                                            ))}
                                        </CheckboxGroup>
                                        <div className="mt-5">
                                            <Input
                                                label="Add Custom Price"
                                                type="number"
                                                onChange={handleChange}
                                                name="totalPrice"
                                                id="totalPrice"
                                                color="secondary"

                                            />
                                        </div>

                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="secondary" onPress={addPrices}>
                                        Submit
                                    </Button>
                                    <Button color="danger" variant="light" onPress={cancelForm}>
                                        Close
                                    </Button>

                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            </section>
        </>
    )
}