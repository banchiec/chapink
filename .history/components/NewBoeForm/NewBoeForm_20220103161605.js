import { useState } from "react"
import { ContainerForm } from "./NewBoeForm.styled"

export const NewBoeForm = () => {

    const [street, setStreet] = useState()
    const [number, setNumber] = useState()
    const [strais, setStrais] = useState()
    const [plant, setPlant] = useState()
    const [door, setDoor] = useState()

    const handleSubmit = () => {

        console.log("handle")
    }
    const onChange = (e) => {
        const { value, name } = e.target
        switch (name) {
            case street:
                setStreet(value)
                break;
            case number:
                setNumber(value)
                break;

            default:
                break;
        }
        setState({
            ...this.state,
            [name]: value
        })
    }

    return (
        <>
            <ContainerForm>
                <form onSubmit={handleSubmit}>
                    <label>Calle: </label>
                    <input type="text" name="street" onChange={(e) => onChange(e)} />
                    <label>Número: </label>
                    <input type="text" name="number" />
                    <label>Escalera: </label>
                    <input type="text" name="strais" />
                    <label>Planta: </label>
                    <input type="text" name="plant" />
                    <label>Puerta: </label>
                    <input type="text" name="door" />
                </form>
            </ContainerForm>
        </>
    )
}