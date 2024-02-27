import { Button } from "@nextui-org/react"
import { useEffect, useState } from "react"
import { useParams } from "react-router"

export default function ModifyBudgetModal({ id, data }) {
    const pageID = useParams()
    const [allData, setAllData] = useState()
    console.log('pageid', pageID)
    const URL = `https://api.ttguitarnoob.cloud/budgets/${pageID.id}`

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
            const updatedItem = await fetch(URL, options)
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
                <h1>Modify This Budget Item</h1>
                <p>{id}</p>
                <p>{pageID.id}</p>
                <Button onClick={payBill}>Update Paid Status</Button>
            </section>
        </>
    )
}