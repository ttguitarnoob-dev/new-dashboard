import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

export default function Budget() {

    return (
        <>
            <section>
                <h1 className="page-title">Budgety Thing</h1>
                <Table aria-label="Example static collection table">
                    <TableHeader>
                        <TableColumn>MONTH</TableColumn>
                        <TableColumn>UNPAID</TableColumn>
                    </TableHeader>
                    <TableBody>
                        <TableRow key="1">
                            <TableCell>June</TableCell>
                            <TableCell>$230</TableCell>
                        </TableRow>
                        
                    </TableBody>
                </Table>
            </section>
        </>
    )
}