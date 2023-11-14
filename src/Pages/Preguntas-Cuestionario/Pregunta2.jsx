import { PrimaryButton } from "../../components/PrimaryButton";
import { RadioOption } from "../../components/RadioOption";

export function Pregunta2() {
    return (
        <>
            <header className="flex flex-col w-10/12 items-center mx-auto mt-24 gap-8">
                <h1
                    className="font-inter font-regular text-2xl text-gray-500">¿Conoces términos técnicos relacionados con el uso de la energía, como kilovatios o energía reactiva?</h1>
                <img
                    src="../src/assets/images/pregunta-2.webp"
                    alt=""
                    className="w-3/4" />
            </header>
            <section className="flex flex-col gap-8 items-center w-10/12 mx-auto mt-16">
                <RadioOption label='No tengo conocimiento' />
                <RadioOption label='Entiendo parcialmente' />
                <RadioOption label='Sí conozco del tema' />
                <PrimaryButton label='Siguiente' />
            </section>
        </>
    )
}