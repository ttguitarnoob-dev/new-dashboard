
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue} from "@nextui-org/react";
import { useCallback } from "react";
import { oneBudgetColumns } from "../../utils/tableData";


  // const rows = [
  //   {
  //     billName: 'Rent',
  //     howMuch: 1600,
  //     dueDate: '2024-10-01T05:00:00.000Z',
  //     paidDate: null,
  //     paid: false,
  //     _id: '65d10f6201f56a3f0c4efe0e'
  //   },
  //   {
  //     billName: 'Car',
  //     howMuch: 422,
  //     dueDate: '2024-10-04T05:00:00.000Z',
  //     paidDate: null,
  //     paid: false,
  //     _id: '65d10f6201f56a3f0c4efe0f'
  //   },
  //   {
  //     billName: 'Poohole',
  //     howMuch: 1634400,
  //     dueDate: '2024-10-01T05:00:00.000Z',
  //     paidDate: null,
  //     paid: true,
  //     _id: "65d12077146dfd8baeb52226"
  //   }
  // ]
 

const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

export default function ViewBudgetTable({columns, rows}) {
  const renderCell = useCallback((smell, columnKey) => {
    const cellValue = smell[columnKey];
    console.log('dateme', new Date('2024-10-01T05:00:00.000Z').toLocaleDateString())
    

    switch (columnKey) {
      case "billName":
        return (
          <div>
            <p>{cellValue}</p>
          </div>
        );
      case "howMuch":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">${cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">{smell.paid}</p>
          </div>
        );
      case "dueDate":
        return (
          <div>
            <p>{cellValue}</p>
          </div>
        );
      
      default:
        return cellValue;
    }
  }, []);

  return (
  <Table aria-label="Example table with custom cells">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item._id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
