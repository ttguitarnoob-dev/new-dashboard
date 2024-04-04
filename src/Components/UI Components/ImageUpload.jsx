import { Input } from "@nextui-org/react";
import { useState } from "react";
import axios, { Axios } from "axios";


export default function ImageUpload() {
    const [files, setFiles] = useState(null)

    function handlePhotoChange(e) {
        setFiles(e.target.files)

    }


    async function handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('file', files[0])
        console.log("defiles", files[0])
        await axios.post('http://localhost:3005/photos', formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    }
    return (
        <>
            <section>
                <form onSubmit={handleSubmit}>
                    <Input
                        type="file"
                        name="file"
                        onChange={handlePhotoChange}
                    />
                    <button>Submit</button>
                </form>
            </section>
        </>
    )
}