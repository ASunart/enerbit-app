import { PrimaryButton } from "./PrimaryButton"

export function FacturaCard() {
    const titleStyle = 'font-inter font-medium text-purple text-2xl -mb-2'
    const pStyle = 'font-inter font-regular text-gray-500 text-2xl'
    return (
        <article className="flex flex-col gap-4 px-5 py-7 shadow-md w-full rounded-xl">
            <h1 className="font-inter font-extrabold text-orange text-[32px]">Factura Octubre</h1>
            <h3 className={titleStyle}>Total a pagar</h3>
            <h2 className="font-inter font-extrabold text-gray-400 text-3xl">$234,000.00</h2>
            <h3 className={titleStyle}>Fecha de vencimiento</h3>
            <p className={pStyle}>Octubre 12 de 2023</p>
            <h3 className={titleStyle}>Método de pago</h3>
            <p className={pStyle}>Efectivo - Corresponsal Bancolombia</p>
            <PrimaryButton label='Continuar' />
        </article>
    )

}