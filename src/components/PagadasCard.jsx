import { Link } from "react-router-dom"
import { SecondaryButton } from "./SecondaryButton"

export function PagadasCard() {
    const pStyle = 'font-inter font-regular text-gray-500 text-2xl'
    return (
        <article className="flex flex-col gap-4 px-5 py-7 shadow-md w-full rounded-xl">
            <h1 className="font-inter font-bold text-orange text-2xl">23 de Agosto del 2023</h1>
            <p className={pStyle}>Pagado con: <br /><strong>Efectivo - Corresponsal Bancolombia</strong></p>
            <span className="grid grid-cols-2">
                <p className={pStyle}>por: <span className="text-purple font-semibold">Pedro</span></p>
                <p className='font-inter font-semibold text-purple text-2xl text-right'>$169.000</p>
            </span>
            <Link to='/facturas/pagada-page'>
                <SecondaryButton label='Ver detalle' />
            </Link>
        </article>
    )
}