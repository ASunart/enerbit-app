/* eslint-disable react/prop-types */
import { PrimaryButton } from "./PrimaryButton"
import { SecondaryButton } from "./SecondaryButton"
import { Link } from "react-router-dom"

export function RefPagoCard({ route }) {
    const titleStyle = 'font-inter font-medium text-purple text-2xl -mb-2'
    const pStyle = 'font-inter font-regular text-gray-500 text-2xl'
    return (
        <article className="flex flex-col gap-4 px-5 py-7 shadow-md w-full rounded-xl">
            <h3 className={titleStyle}>Total a pagar</h3>
            <h2 className="font-inter font-extrabold text-gray-400 text-3xl">$234,000.00</h2>
            <h3 className={titleStyle}>Número de convenio</h3>
            <p className={pStyle}>00000000</p>
            <h3 className={titleStyle}>Referencia</h3>
            <p className={pStyle}>827365421221</p>
            <SecondaryButton label='Compartir' />
            <Link to={route}>
                <PrimaryButton label='Guardar en galería de fotos' />
            </Link>
        </article>
    )
}