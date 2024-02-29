const incomesColumns = [
    { name: "SOURCE", key: "source" },
    { name: "AMOUNT", key: "amount" },
]

const expensesColumns = [
    { name: "EXPENSE", key: "billName" },
    { name: "AMOUNT", key: "howMuch" },
    { name: "DUE DATE", key: "dueDate" },
]

const customersColumns = [
    { name: "NAME", key: "name" },
    { name: "CONTACT", key: "phone" }
]
const jobsColumns = [
    { name: "LOCATION", key: "location" },
    { name: "COMPLETE BY", key: "date" }
]



export { incomesColumns, expensesColumns, customersColumns, jobsColumns }