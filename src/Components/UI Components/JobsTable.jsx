
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button, Popover, PopoverTrigger, PopoverContent, useDisclosure, Modal, ModalContent, ModalBody, ModalFooter, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, DropdownSection } from "@nextui-org/react";
import { useCallback, useState } from "react";
import { VerticalDotsIcon } from "./SVG Icons/VerticalDotsIcon";
import CloseJob from "../Pages/Tombstone Stuff/CloseJob";
import { EditIcon } from "./SVG Icons/EditIcon";
import { DeleteIcon } from "./SVG Icons/DeleteIcon";
import { CheckIcon } from "./SVG Icons/CheckIcon";





export default function JobsTable({ columns, rows, customerID, customerData }) {
  //Modal Things
  const [modal, setModal] = useState()
  const [popoverOpen, setPopoverOpen] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const updateURL = `https://api.ttguitarnoob.cloud/customers/${customerID}`
  let data = customerData

  //Fetch Customer Data

  //Confirm Delete Job
  function handleConfirm(index) {
    const youSure = window.confirm(`Are you sure you want to delete the job for ${data.jobs[index].location}?`)
    if (youSure) {
      handleDelete(index)
    }
  }

  //Remove job from array and call update fetch
  function handleDelete(index) {
    console.log('removing job', data.jobs[index].location)
    if (index > -1) {
      data.jobs.splice(index, 1)
    }
    handleUpdateCustomer()
  }

  //Update Customer
  async function handleUpdateCustomer() {
    const options = {
      method: "PUT",
      body: JSON.stringify(data),
      mode: "cors",
      headers: {
        "Content-type": "application/json"
      }
    }

    console.log(`updating job `, data)
    try {
      const response = await fetch(updateURL, options)
      const updatedItem = await response.json()
      window.location.reload()
      return updatedItem

    } catch (err) {
      console.log('How many times i gotta tell you dont send put reqeusts from the jobs table', err)
    }
  }

  function openModal(component) {
    setModal(component)
    onOpen()
  }

  // Modal Component
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

  //Render dynamic table
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

            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly size="sm" variant="dark">
                  <VerticalDotsIcon className="text-default-300" />
                </Button>

              </DropdownTrigger>
              <DropdownMenu variant="faded" aria-label="Actions Dropsdown">
                <DropdownSection title="Actions" showDivider>
                  
                    <DropdownItem
                      key="close"
                      description="Options for finishing the job"
                      startContent={<CheckIcon />}
                      onClick={() => openModal(<CloseJob customerData={customerData} jobIndex={smell.key} />)}
                    >
                      Close Job
                    </DropdownItem>
                  
                  <DropdownItem
                    key="edit"
                    description="Edit the job details"
                    startContent={<EditIcon />}

                  >
                    Edit
                  </DropdownItem>
                </DropdownSection>
                <DropdownSection>
                  <DropdownItem
                    key="delete"
                    description="Delete this job permanently"
                    color="danger"
                    startContent={<DeleteIcon />}
                    onClick={() => handleConfirm(smell.key)}
                  >
                    Delete
                  </DropdownItem>
                </DropdownSection>
              </DropdownMenu>
            </Dropdown>

      
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
        <Modal placement="center" variant="dark" backdrop="blur" isOpen={isOpen} onClose={onClose}>
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
