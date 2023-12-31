/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { PrimaryButton } from "./PrimaryButton"

export function FacturaCard({ warning }) {
    const titleStyle = 'font-inter font-medium text-purple text-2xl -mb-2'
    const pStyle = 'font-inter font-regular text-gray-500 text-2xl'
    return (
        <article className="flex flex-col gap-4 px-5 py-7 shadow-md w-full rounded-xl">
            <h1 className="font-inter font-extrabold text-orange text-[32px]">Factura Octubre</h1>
            <section className="bg-[#ffe5e5] px-4 py-3 rounded-xl flex flex-row justify-between items-center">
                <h3 className="font-inter font-medium text-[#E50505] text-2xl w-10/12">{warning}</h3>
                <img src="../src/assets/icons/warning-pago.svg" />
            </section>
            <h3 className={titleStyle}>Total a pagar</h3>
            <h2 className="font-inter font-extrabold text-gray-400 text-3xl">$234,000.00</h2>
            <h3 className={titleStyle}>Fecha de vencimiento</h3>
            <p className={pStyle}>Octubre 12 de 2023</p>
            <h3 className={titleStyle}>Método de pago</h3>
            <p className={pStyle}>Efectivo - Corresponsal Bancolombia</p>
            <Link to='/facturas/detalle-factura'>
                <PrimaryButton label='Continuar' />
            </Link>
        </article>
    )

}