
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, useDisclosure, ModalContent, Modal, ModalBody, ModalFooter, button, Button } from "@nextui-org/react";
import { click } from "@testing-library/user-event/dist/click";
import { useCallback, useState } from "react";
import ModifyBudgetModal from "./ModifyBudgetModal";
// import { oneBudgetColumns } from "../../utils/tableData";


// const statusColorMap = {
//   active: "success",
//   paused: "danger",
//   vacation: "warning",
// };

export default function ViewBudgetTable({ columns, rows }) {

  const renderCell = useCallback((smell, columnKey) => {
    const cellValue = smell[columnKey];





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
            <p className="text-bold text-sm capitalize text-default-400"><span style={{ color: choosePaidColor(smell.paid) }}>{smell.paid}</span></p>
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

  function choosePaidColor(paid) {
    console.log("paidcolor", paid)
    if (paid === "Paid") {
      return "green"
    } else {
      return "red"
    }

  }

  // Modal stuff

  const [modal, setModal] = useState()
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  function openModal(clickedItem, component) {
    setModal(component)
    onOpen()
    console.log('hello modal', clickedItem)
  }

  return (
    <>
      <Table
        isStriped
        aria-label="View Budget Table"
        selectionBehavior="toggle"
        onRowAction={(index) => openModal(index, <ModifyBudgetModal id={index} />)}
      >
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
      <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>

              <ModalBody>
                {modal}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>

              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
