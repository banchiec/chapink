import { get } from "mongoose"
import { useEffect, useState } from "react"
import { ContainerForm } from "./NewBoeForm.styled"

export const NewBoeForm = () => {

    const [street, setStreet] = useState("")
    const [number, setNumber] = useState("")
    const [strais, setStrais] = useState("")
    const [plant, setPlant] = useState("")
    const [door, setDoor] = useState("")
    const [typeProperty, setTypeProperty] = useState(" ")
    const [propertyPrice, setPropertyPrice] = useState("")
    const [broker, setBroker] = useState("")
    const [licenseAndFees, setLicenseAndFees] = useState("")
    const [reform, setReform] = useState("")
    const [interiorDesign, setInteriorDesign] = useState("")


    const [holdingCost, setHoldingCost] = useState("")

    const [costAcquistion, setCostAcquisition] = useState(0)
    const [subtotal, getSubtotal] = useState()



    const handleSubmit = () => {

        console.log("handle")
    }
    const getSubtotalPrice = () => {
        let result = 0
        result = Number.parseFloat(propertyPrice, 2) + Number.parseFloat(costAcquistion, 2) + Number.parseFloat(reform, 2) +
            Number.parseFloat(broker, 2) + Number.parseFloat(licenseAndFees, 2) + Number.parseFloat(holdingCost, 2) + Number.parseFloat(interiorDesign, 2)

        return result
    }
    const onChange = (e) => {

        const { value, name } = e.target
        switch (name) {
            case "street":
                setStreet(value)
                break;
            case "number":
                setNumber(value)
                break;
            case "strais":
                setStrais(value)
                break;
            case "plant":
                setPlant(value)
                break;
            case "door":
                setDoor(value)
                break;
            case "select":
                setTypeProperty(value)
                break;
            case "propertyPrice":
                setPropertyPrice(value)
                break;
            case "broker":
                setBroker(value)
                break;
            case "licenseAndFees":
                setLicenseAndFees(value)
                break;
            case "reform":
                setReform(value)
                break;
            case "holdingCost":
                setHoldingCost(value)
                break;
            case "interiorDesign":
                setInteriorDesign(value)
                break;
            default:
                break;
        }
    }

    const getCostAcqusition = () => {
        console.log(object)

    }
    // console.log(typeProperty)
    // console.log(propertyPrice)
    // console.log(licenseAndFees)
    // console.log(reform)
    // console.log(holdingCost)
    // console.log(interiorDesign)
    console.log(costAcquistion)

    return (
        <>
            <ContainerForm>
                <form onSubmit={handleSubmit}>
                    <label>Calle: </label>
                    <input type="text" name="street" onChange={(e) => onChange(e)} value={street} />
                    <label>Número: </label>
                    <input type="text" name="number" onChange={(e) => onChange(e)} value={number} />
                    <label>Escalera: </label>
                    <input type="text" name="strais" onChange={(e) => onChange(e)} value={strais} />
                    <label>Planta: </label>
                    <input type="text" name="plant" onChange={(e) => onChange(e)} value={plant} />
                    <label>Puerta: </label>
                    <input type="text" name="door" onChange={(e) => onChange(e)} value={door} />

                    <label>Tipo de inmueble actual: </label>

                    <select name="select" onChange={(e) => onChange(e)} defaultValue={'DEFAULT'}>
                        <option value="DEFAULT" disabled>seleccione una opcion ... </option>
                        <option value="oficina" >Oficina</option>
                        <option value="local" >Local</option>
                        <option value="piso">Piso</option>
                        <option value="chalet">Chalet</option>
                    </select>

                    <label>Precio del inmueble: </label>
                    <input type="text" name="propertyPrice" onChange={(e) => onChange(e)} value={propertyPrice} />

                    <label>Coste de adquisición:
                        {
                            typeProperty === "oficina" || typeProperty === "local" ?
                                propertyPrice && <p> 7.10% {(propertyPrice * 7.1) / 100}</p> :
                                <p> 3.2% {(propertyPrice * 0.32) / 100}</p>
                        }
                    </label>

                    <label>Broker: </label>
                    <input type="text" name="broker" onChange={(e) => onChange(e)} value={broker} />

                    <label>Licencia y tasas: </label>
                    <input type="text" name="licenseAndFees" onChange={(e) => onChange(e)} value={licenseAndFees} />

                    <label>Reforma: </label>
                    <input type="text" name="reform" onChange={(e) => onChange(e)} value={reform} />

                    <label>Holding cost: </label>
                    <input type="text" name="holdingCost" onChange={(e) => onChange(e)} value={holdingCost} />

                    <label>Interiorismo y muebles: </label>
                    <input type="text" name="interiorDesign" onChange={(e) => onChange(e)} value={interiorDesign} />

                    <label>Subtotal: {
                        getSubtotalPrice()
                    }</label>

                </form>
            </ContainerForm>
        </>
    )
}