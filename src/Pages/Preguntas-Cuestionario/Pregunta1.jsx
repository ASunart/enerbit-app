import { PrimaryButton } from "../../components/PrimaryButton";
import { RadioOption } from "../../components/RadioOption";
import { Link } from "react-router-dom";

export function Pregunta1() {
    return (
        <>
            <header className="flex flex-col w-10/12 items-center mx-auto mt-24 gap-8">
                <h1
                    className="font-inter font-regular text-2xl text-gray-500">¿Cuántas veces al mes realizas pagos/compras por internet?</h1>
                <img
                    src="../src/assets/images/pregunta-1.webp"
                    alt="" />
            </header>
            <section className="flex flex-col gap-8 items-center w-10/12 mx-auto mt-16">
                <RadioOption label='Nunca' />
                <RadioOption label='Menos de 3 veces' />
                <RadioOption label='Más de 3 veces' />
                <Link className="w-full " to='/cuestionario/pregunta-2'>
                    <PrimaryButton label='Siguiente' />
                </Link>
            </section>
        </>
    )
}