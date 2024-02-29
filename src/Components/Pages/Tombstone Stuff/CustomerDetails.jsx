import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure, Input, Textarea, CheckboxGroup, Checkbox } from "@nextui-org/react"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import { jobsColumns } from "../../../utils/tableData"
import JobsTable from "../../UI Components/JobsTable"

export default function CustomerDetails() {
    const { id } = useParams()
    const [data, setData] = useState()
    const [services, setServices] = useState()
    const navigate = useNavigate()
    const { isOpen, onOpen, onClose } = useDisclosure()


    //Initial Customer Data Fetch
    async function handleFetch() {
        const getURL = `https://api.ttguitarnoob.cloud/customers/${id}`
        const getOptions = {
            method: "GET"
        }

        const response = await fetch(getURL, getOptions)
        const data = await response.json()
        console.log('thedata', data)
        setData(data)
    }

    //Get Services Data
    async function fetchServices(){
        const URL = "https://api.ttguitarnoob.cloud/prices"
        const options = {
            method: "GET"
        }

        try {
            const response = await fetch(URL, options)
            const data = await response.json()
            console.log('services data', data)
            setServices(data)
        } catch(err) {
            console.log('the world ended when fetching services', err)
        }
    }

    //Navigate Function
    function handleClick(link) {
        navigate(link)
    }

    //Form Handling
    function handleChange(e){
        console.log('changed', e.target.value)
    }

    //Open add job modal and fetch services data
    function addJob(){
        console.log('adding job')
        fetchServices()

        onOpen()
    }


    useEffect(() => {
        handleFetch()
    }, [])

    if (!data) {
        return (
            <>
                <section>
                    <h1>Loading data...{id}</h1>
                </section>
            </>
        )
    }

    return (

        <>
            <section>
                <Button onClick={() => handleClick('/tombstone/customers')}>Back To All Customers</Button>
                <div className="customer-info">
                    <h1>{data.name}</h1>
                    <a href={`tel:${data.phone}`}><p>{data.phone}</p></a>
                    <a href={`mailto:${data.email}`}><p>{data.email}</p></a>
                </div>
                <hr></hr>
                <div className="text-section">
                    <p>{data.customerNotes}</p>
                </div>
                <section>
                    <Button onClick={addJob}>Add Job</Button>
                    <h2>Jobs</h2>
                    table here
                    <JobsTable columns={jobsColumns} rows={data.jobs} />
                </section>
                <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader>
                                    <h2>Add Job For {data.name}</h2>
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
                                            <Checkbox key={oneService._id} value={index}>{oneService.name}</Checkbox>
                                        ))}
                                        </CheckboxGroup>

                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="secondary" onPress={onClose}>
                                        Submit
                                    </Button>
                                    <Button color="danger" variant="light" onPress={onClose}>
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