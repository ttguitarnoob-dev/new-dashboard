
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import { useCallback } from "react";




export default function CustomerListTable({columns, rows}) {
    console.log("columns and rows man", columns, rows)
  const renderCell = useCallback((smell, columnKey) => {
    const cellValue = smell[columnKey];
    

    switch (columnKey) {
      case "name":
        return (
          <div>
            <p>{cellValue}</p>
          </div>
        );
      case "phone":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">{smell.email}</p>
          </div>
        );
      
      default:
        return cellValue;
    }
  }, []);

  return (
  <Table isStriped aria-label="View Incomes Table">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={"No Incomes added yet."} items={rows}>
        {(item) => (
          <TableRow key={item._id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );

}
