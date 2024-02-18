import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Button} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

let rows = [];

const columns = [
  {
    key: "month",
    label: "MONTH",
  },
  {
    key: "unpaid",
    label: "UNPAID",
  }
];

export default function Budget() {

    const navigate = useNavigate()
    const [budgets, setBudgets] = useState({})
    

    function handleClick(url) {
        navigate(url)
    }

    async function handleFetch(){
        // const URL = "https://api.ttguitarnoob.cloud/budgets"
        const URL = "http://localhost:8000/budgets"
        const options = {
            method: "GET"
        }

        try{
            const response = await fetch(URL, options)
            const data = await response.json()
            rows = data
            setBudgets(data)
        } catch(err){
            console.log("shit happened when fetching that", err)
        }
    }

    //Call handleFetch
    useEffect(() => {
        handleFetch()
    }, [])

console.log("thing", rows)
  return (
    <>
    <h1 className="page-title">Budgety Thing</h1>
                <Button onClick={() => handleClick("/budget/new")}>Add Month</Button>
    <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => <TableCell><Button onClick={() => handleClick(`/budget/${item.key}`)}>{getKeyValue(item, columnKey)}</Button> </TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
    </>
  );
}



// import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button } from "@nextui-org/react";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router";

// export default function Budget() {
//     const navigate = useNavigate()
//     const [budgets, setBudgets] = useState({})

//     function handleClick(url) {
//         navigate(url)
//     }

//     async function handleFetch(){
//         const URL = "https://api.ttguitarnoob.cloud/budgets"
//         const options = {
//             method: "GET"
//         }

//         try{
//             const response = await fetch(URL, options)
//             const data = await response.json()
//             setBudgets(data)
//         } catch(err){
//             console.log("shit happened when fetching that")
//         }
//     }

//     //Call handleFetch
//     useEffect(() => {
//         handleFetch()
//     }, [])

//     // console.log(budgets[3].month, budgets[3].unpaid)

//     return (
//         <>
//             <section>
//                 <h1 className="page-title">Budgety Thing</h1>
//                 <Button onClick={() => handleClick("/budget/new")}>Add Month</Button>
//                 <Table aria-label="Example static collection table">
//                     <TableHeader>
//                         <TableColumn>MONTH</TableColumn>
//                         <TableColumn>UNPAID</TableColumn>
//                     </TableHeader>
//                     <TableBody items={budgets}>
//                         {(oneBudget) => (
//                             <TableRow key={oneBudget._id}>

//                             </TableRow>
//                         )}
                        
//                     </TableBody>
//                 </Table>
//             </section>
//         </>
//     )
// }