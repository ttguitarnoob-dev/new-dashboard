
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import { useCallback } from "react";
// import { oneBudgetColumns } from "../../utils/tableData";


// const statusColorMap = {
//   active: "success",
//   paused: "danger",
//   vacation: "warning",
// };

export default function ViewIncomeTable({columns, rows}) {
  const renderCell = useCallback((smell, columnKey) => {
    const cellValue = smell[columnKey];
    

    switch (columnKey) {
      case "source":
        return (
          <div>
            <p>{cellValue}</p>
          </div>
        );
      case "amount":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">${cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">{smell.paid}</p>
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
