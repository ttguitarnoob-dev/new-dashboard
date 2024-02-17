import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const rows = [
  {
    key: "1",
    month: "June",
    unpaid: 123,
  },
  {
    key: "2",
    month: "July",
    unpaid: 234,
  },
  {
    key: "3",
    month: "Septober",
    unpaid: 645,
  },
  {
    key: "4",
    month: "August",
    unpaid: 12334,
  },
];

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

export default function App() {

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
            setBudgets(data)
        } catch(err){
            console.log("shit happened when fetching that")
        }
    }

    //Call handleFetch
    useEffect(() => {
        handleFetch()
    }, [])

console.log("thing", budgets)
  return (
    <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={budgets}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
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