import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button } from "@nextui-org/react";
import { useNavigate } from "react-router";

export default function Budget() {
    const navigate = useNavigate()

    function handleClick(url) {
        navigate(url)
    }

    return (
        <>
            <section>
                <h1 className="page-title">Budgety Thing</h1>
                <Button onClick={() => handleClick("/budget/new")}>Add Month</Button>
                <Table aria-label="Example static collection table">
                    <TableHeader>
                        <TableColumn>MONTH</TableColumn>
                        <TableColumn>UNPAID</TableColumn>
                    </TableHeader>
                    <TableBody>
                        <TableRow key="1">
                            <TableCell><Button onClick={() => handleClick("/budget/234")}>June</Button></TableCell>
                            <TableCell>$230</TableCell>
                        </TableRow>
                        
                    </TableBody>
                </Table>
            </section>
        </>
    )
}