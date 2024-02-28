import { Button } from "@nextui-org/react"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { DollarIcon } from "./SVG Icons/DollarIcon"

export default function ModifyBudgetModal({ id, data }) {
    const pageID = useParams()
    const [allData, setAllData] = useState()
    console.log('pageid', pageID)
    const URL = `https://api.ttguitarnoob.cloud/budgets/${pageID.id}`
    const putURL = `https://api.ttguitarnoob.cloud/budgets/update-unpaid/${pageID.id}`

    async function handleFetch(){
        const options = {
            method: "GET"
        }

        try{
            const response = await fetch(URL, options)
            const data = await response.json()
            setAllData(data)
            console.log("fetched the data from the modal", data)
            return data

        } catch(err) {
            console.log("omg another fetch error from the edit budget item modal thing", err)
        }
    }

    //Pay Bill
    function payBill(){
        const theBill = allData.allData.bills[id].paid
        if (!theBill){
            allData.allData.bills[id].paid = true
        }else {
            allData.allData.bills[id].paid = false
        }
        handlePut()
    }

    //Make the put request
    async function handlePut(){
        console.log('putting it where it belongs', allData.allData)
        const options = {
            method: "PUT",
            body: JSON.stringify(allData.allData),
            mode: "cors",
            headers: {
                "Content-type": "application/json"
            }
        }
        try{
            const updatedItem = await fetch(putURL, options)
            window.location.reload()
        } catch(err) {
            console.log("you broke the put method bro from updating a budget item", err)
        }

    }

     //Call handleFetch
     useEffect(() => {
        handleFetch()
    }, [])




    return (
        <>
            <section>
                <h1 className="text-2xl">Modify This Budget Item</h1>
                
                <Button startContent={<DollarIcon/>} className="mt-10" onClick={payBill}>Update Paid Status</Button>
            </section>
        </>
    )
}