import { PrimaryButton } from "../components/PrimaryButton";

export function CuestionarioPage() {
    return (
        <>
            <img src="./src/assets/icons/cuestionario-person.svg"
                alt="Persona de enerBit saludando"
                className="w-full absolute -z-10" />
            <div className="grid grid-rows-2 h-screen items-center w-10/12 m-auto gap-12">
                <section className="mb-40">
                    <h1 className="text-3xl font-inter font-medium text-orange mb-2">¡Hola, <span className="font-bold">Darío</span>!</h1>
                    <p className="font-inter font-regular text-white text-xl">Te damos la Bienvenida a enerBit.</p>
                </section>
                <section className="flex flex-col h-full justify-end gap-32 mb-24">
                    <p className="font-inter font-regular text-gray-500 text-center text-xl">Ahora vamos a realizarte algunas preguntas para conocerte mejor y poder brindarte una experiencia más personalizada.
                    </p>
                    <PrimaryButton label='Continuar' />
                </section>
            </div>
        </>
    )
}