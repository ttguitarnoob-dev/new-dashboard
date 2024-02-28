import { Button, useDisclosure, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import ViewBudgetTable from "../../UI Components/ViewBudgetTable"
import ViewIncomeTable from "../../UI Components/ViewIncomesTable";
import { incomesColumns, expensesColumns } from "../../../utils/tableData";
import NewIncome from "./NewIncome";
import NewBudget from "./NewBudget";
import NewExpense from "./NewExpense";



export default function ViewBudget() {
    const id = useParams()
    const navigate = useNavigate()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [kitty, setRows] = useState()
    const [modal, setModal] = useState()



    function handleClick(url) {
        navigate(url)
    }

    function handleOpen(component) {
        setModal(component)
        onOpen()
    }

    async function handleFetch() {
        const URL = `https://api.ttguitarnoob.cloud/budgets/${id.id}`
        // const URL = `http://localhost:8000/budgets/${id.id}`
        const options = {
            method: "GET"
        }

        try {
            const response = await fetch(URL, options)
            const data = await response.json()
            console.log('data', data)
            setRows(data)
        } catch (err) {
            console.log("shit happened when fetching that", err)
        }
    }

    //Call handleFetch
    useEffect(() => {
        handleFetch()
    }, [])

    //Loading Screen
    if (!kitty) {
        return (
            <section>
                <h1>Loading items</h1>
            </section>
        )
    }

    return (
        <>

            {/* We'll click a row to bring up a modal that has actions such as delete the expense, pay it, or edit it(maybe if I can figure that out lol).  We'll do this by activating "rows actions" on the table, and passing the open modal and the id into the function */}


            <section>
                <section className="p-6">
                    <h1 className="mb-10 text-5xl">{kitty.allData.month}</h1>
                    <Button onPress={() => handleClick("/budget")}>Back to Budgets</Button>

                    {/* Income and Unpaid display section */}
                    <div className="budget-view text-2xl mt-10 mb-10">
                        <p>Total Income: ${kitty.totalIncome}</p>
                        <p>Tithe: ${kitty.allData.tithe}</p>
                        <hr className="mt-3 mb-3"></hr>
                        <p>Total Unpaid: <span style={{ color: "red" }}>${kitty.allData.unpaid}</span></p>
                    </div>

                <div>
                    <Button className="mr-7" onPress={() => handleOpen(<NewExpense id={id} />)}>Add An Expense</Button>
                    <Button onPress={() => handleOpen(<NewIncome id={id} />)}>Add An Income</Button>
                </div>
                </section>

                <div className="mt-10">
                    <h2 className="mb-5 p-5 text-lg">Expenses</h2>
                    <ViewBudgetTable columns={expensesColumns} rows={kitty.expenses} />
                </div>

                <div className="mt-10">
                    <h2 className="mb-5 p-3 text-lg">Income</h2>
                    <ViewIncomeTable columns={incomesColumns} rows={kitty.incomes} />
                </div>

            </section>
            <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            
                            <ModalBody>
                                {modal}
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
        </>
    )
}