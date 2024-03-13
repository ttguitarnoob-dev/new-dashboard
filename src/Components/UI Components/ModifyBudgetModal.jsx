import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, useDisclosure } from "@nextui-org/react"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { DollarIcon } from "./SVG Icons/DollarIcon"

export default function ModifyBudgetModal({ id, data }) {
    const pageID = useParams()
    const [allData, setAllData] = useState()
    const URL = `https://api.ttguitarnoob.cloud/budgets/${pageID.id}`
    const unpaidURL = `https://api.ttguitarnoob.cloud/budgets/update-unpaid/${pageID.id}`
    const putURL = `https://api.ttguitarnoob.cloud/budgets/edit-expense/${pageID.id}`
    // const putURL = `http://localhost:8000/budgets/edit-expense/${pageID.id}`
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [editChanges, setEditChanges] = useState({})

    async function handleFetch() {
        const options = {
            method: "GET"
        }

        try {
            const response = await fetch(URL, options)
            const data = await response.json()
            setAllData(data)
            setEditChanges(data.allData.bills[id])
            return data

        } catch (err) {
            console.log("omg another fetch error from the edit budget item modal thing", err)
        }
    }

    //Pay Bill
    function payBill() {
        const theBill = allData.allData.bills[id].paid
        if (!theBill) {
            allData.allData.bills[id].paid = true
            allData.allData.bills[id].paidDate = new Date()
        } else {
            allData.allData.bills[id].paid = false
            allData.allData.bills[id].paidDate = null
        }
        handlePut(unpaidURL)
    }

    //Edit the expense details
    function handleEdit() {
        allData.allData.bills[id] = editChanges
        handlePut(putURL)



    }

    //Setting default expense values before editing, and then open modal
    function prepareEdit(expense){
        console.log("should be the state", editChanges)
        setEditChanges(expense)
        
        onOpen()
    }

    //Changing the Edit Values
    function handleChange(e){
        console.log("before edited", editChanges)
        const edited = e.target.name
        editChanges[edited] = e.target.value
        console.log("edited", editChanges)
    }

    //Make the put request
    async function handlePut(thisUrl) {
        const options = {
            method: "PUT",
            body: JSON.stringify(allData.allData),
            mode: "cors",
            headers: {
                "Content-type": "application/json"
            }
        }
        try {
            const updatedItem = await fetch(thisUrl, options)
            console.log('url', thisUrl)
            console.log('data', allData.allData)
            window.location.reload()
            return updatedItem
        } catch (err) {
            console.log("you broke the put method bro from updating a budget item", err)
        }

    }

    //Call handleFetch
    useEffect(() => {
        handleFetch()
    }, [])


    if (!allData) {
        return (
            <>
                <section>
                <h1 className="text-2xl">Modify This Expense</h1>
                <div className="flex">
                    <Button startContent={<DollarIcon />} className="mt-10">Update Paid</Button>
                    <Button startContent={<DollarIcon />} className="ml-2 mt-10">Edit This Bill</Button>
                </div>
                </section>
            </>
        )
    }

    return (
        <>
            <section>
                <h1 className="text-2xl">Modify {allData.allData.bills[id].billName}</h1>
                <div className="flex">
                    <Button startContent={<DollarIcon />} className="mt-10" onClick={payBill}>Update Paid</Button>
                    <Button startContent={<DollarIcon />} className="ml-2 mt-10" onClick={() => prepareEdit(allData.allData.bills[id])}>Edit {allData.allData.bills[id].billName}</Button>
                </div>
                <Modal placement="center" backdrop="blur" isOpen={isOpen} onClose={onClose}>
                    <ModalContent>
                        {(onClose) => (
                            <>

                                <ModalBody>
                                    <h2>Edit The Item</h2>
                                    <Input
                                        name="billName"
                                        label="Expense"
                                        id="billName"
                                        defaultValue={allData.allData.bills[id].billName}
                                        type="text"
                                        onChange={handleChange}
                                    />
                                    <Input
                                        name="howMuch"
                                        label="Amount"
                                        id="howMuch"
                                        defaultValue={allData.allData.bills[id].howMuch}
                                        type="text"
                                        onChange={handleChange}
                                    />
                                    <Input
                                        name="dueDate"
                                        label="Due Date"
                                        id="dueDate"
                                        defaultValue={allData.allData.bills[id].dueDate}
                                        type="date"
                                        onChange={handleChange}
                                    />

                                    <Button onClick={handleEdit}>Fix Your Mistake</Button>
                                </ModalBody>
                                <ModalFooter>
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