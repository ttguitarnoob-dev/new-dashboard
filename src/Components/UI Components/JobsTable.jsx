
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, useDisclosure, Modal, ModalContent, ModalBody, ModalFooter, Button, Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { useCallback, useState } from "react";
import { VerticalDotsIcon } from "./SVG Icons/VerticalDotsIcon";




export default function JobsTable({ columns, rows }) {
  //Modal Things
  const [modal, setModal] = useState()
  const { isOpen, onOpen, onClose } = useDisclosure()
  // function openModal(component) {
  //   setModal(component)
  //   onOpen()
  // }

  //Modal Component
  // function EditJobsModal({ clickedItem }) {
  //   console.log('job', rows[clickedItem])
  //   return (
  //     <>
  //       <section>
  //         <h1>{rows[clickedItem].location}</h1>
  //         <p>here is the index: {clickedItem}</p>
  //       </section>
  //     </>
  //   )
  // }

  const renderCell = useCallback((smell, columnKey) => {
    const cellValue = smell[columnKey];


    switch (columnKey) {
      case "location":
        return (
          <div>
            {/* <a href={`/tombstone/customers/${smell._id}`}><p>{cellValue}</p></a> */}
            <p>{cellValue}</p>
          </div>
        );
      case "date":
        return (
          <div className="flex flex-col">

            <p>{new Date(cellValue).toLocaleDateString()}</p>
          </div>
        );
      case "actions":
        return (
          <div className="flex flex-col">

            <Popover variant="dark" placement="left" showArrow={true}>
              <PopoverTrigger>
                <Button isIconOnly size="sm" variant="dark">
                  <VerticalDotsIcon className="text-default-300"/>
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="px-1 py-2">
                  <Button color="secondary" onPress={() => console.log('hello number', smell.key)} className="mr-2">Close Job</Button>
                  <Button className="mr-2">Edit Job</Button>
                  <Button color="danger">Delete Job</Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        );

      default:
        return cellValue;
    }
  }, []);



  return (
    <>
      <section>
        <Table
          isStriped
          aria-label="View Incomes Table"
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody emptyContent={"No jobs for this customer yet."} items={rows}>
            {(item) => (


              <TableRow key={item.key}>
                {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
              </TableRow>
            )}
          </TableBody>
        </Table>
        <Modal variant="dark" backdrop="blur" isOpen={isOpen} onClose={onClose}>
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
      </section>
    </>
  );
}
