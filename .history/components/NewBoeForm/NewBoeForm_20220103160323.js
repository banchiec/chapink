import { ContainerForm } from "./NewBoeForm.styled"

export const NewBoeForm = () => {

    const handleSubmit = () => {

        console.log("handle")
    }

    return (
        <>
            <ContainerForm>
                <form onSubmit={handleSubmit}>

                </form>
            </ContainerForm>
        </>
    )
}