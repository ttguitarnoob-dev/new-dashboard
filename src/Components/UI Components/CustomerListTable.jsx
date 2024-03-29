
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import { useCallback } from "react";




export default function CustomerListTable({columns, rows}) {
  const renderCell = useCallback((smell, columnKey) => {
    const cellValue = smell[columnKey];
    

    switch (columnKey) {
      case "name":
        return (
          <div>
            <a href={`/tombstone/customers/${smell._id}`}><p>{cellValue}</p></a>
          </div>
        );
      case "phone":
        return (
          <div className="flex flex-col">
            <a href={`tel:${cellValue}`}><p className="text-bold text-sm capitalize">{cellValue}</p></a>
            <a href={`mailto:${smell.email}`}><p className="text-bold text-sm capitalize text-default-400">{smell.email}</p></a>
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
      <TableBody  emptyContent={"No Incomes added yet."} items={rows}>
        {(item) => (
          <TableRow key={item._id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );

}
