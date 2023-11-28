import { Link } from "react-router-dom"
import { PrimaryButton } from "./PrimaryButton"
import { SecondaryButton } from "./SecondaryButton"
import { pagadaDetalle } from "../const/pagadaDetalle"

export function DetallePagada() {
    const pStyle = 'font-inter font-regular text-gray-500 text-2xl'
    return (
        <article className="flex flex-col gap-4 px-5 py-7 shadow-md w-full rounded-xl">
            <h1 className="font-inter font-extrabold text-orange text-[32px]">Factura 23 de agosto 2023</h1>
            <p className={pStyle}>Pagado con: <span className="font-bold">Efectivo - Corresponsal Bancolombia</span></p>
            <section>
                <ul className="flex flex-col gap-3">
                    {
                        pagadaDetalle.map(({ id, image, title, price }) => {
                            return (
                                <li className="flex gap-3 bg-gray-100 py-3 px-3 rounded-lg" key={id}>
                                    <img src={image} />
                                    <span className="whitespace-nowrap overflow-hidden">
                                        <h4 className="font-inter font-medium text-gray-400 text-xl text-ellipsis overflow-hidden">{title}</h4>
                                        <p className="font-inter font-bold text-gray-800 text-lg">{price}</p>
                                    </span>
                                </li>
                            )
                        })
                    }

                </ul>
            </section>
            <SecondaryButton label='Ver completa' />
            <Link to='/facturas/detalle-factura'>
                <PrimaryButton label='Continuar' />
            </Link>
        </article>
    )
}