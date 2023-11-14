import { PrimaryButton } from "../../components/PrimaryButton";
import { RadioOption } from "../../components/RadioOption";

export function Pregunta4() {
    const orangeText = 'text-orange font-medium'
    const labelEfectivo =
        <>
            <img src="../src/assets/images/efectivo.webp" className="w-1/2 relative -top-8 left-6" />
            <p className="relative -top-2">Pagar <span className={orangeText}>en efectivo</span> en <span className={orangeText}>corresponsal Bancolombia</span></p>
        </>

    const labelTarjetas =
        <>
            <img src="../src/assets/images/tarjetas.webp" className="w-1/2 relative -top-8 left-6" />
            <p>Pagar virtual, <span className={orangeText}>PSE</span> ó <span className={orangeText}>tarjeta bancaria</span></p>
        </>

    return (
        <>
            <header className="flex flex-col w-10/12 items-center mx-auto mt-24 gap-8">
                <h1
                    className="font-inter font-regular text-2xl text-gray-500">¿Cómo es más facil para ti entender la información sobre tu consumo de energía?</h1>

            </header>
            <section className="flex flex-col gap-20 items-center w-10/12 mx-auto mt-8">
                <RadioOption label={labelEfectivo} />
                <RadioOption label={labelTarjetas} />
                <PrimaryButton label='Siguiente' />
            </section>
        </>
    )
}