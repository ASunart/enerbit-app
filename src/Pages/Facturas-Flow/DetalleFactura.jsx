import { AsistenciaBtn } from "../../components/AsistenciaBtn";
import { NavBar } from "../../components/NavBar";
import { PrimaryButton } from "../../components/PrimaryButton";
import { SecondaryButton } from "../../components/SecondaryButton";
import { detalleFactura } from "../../const/detalleFactura";

export function DetalleFactura() {
    const pStyle = 'font-inter font-regular text-gray-500 text-2xl'
    const priceStyle = 'font-inter font-regular text-purple text-2xl'
    return (
        <>
            <header className="grid grid-cols-2 w-10/12 items-center mx-auto mt-10">
                <img src="../src/assets/icons/back-icon.svg" alt="Atrás" />
                <AsistenciaBtn />
            </header>
            <main className="flex flex-col w-10/12 mx-auto mt-6">
                <p className="font-inter font-semibold text-base text-gray-400">Pagos y facturas</p>
                <h1 className="font-inter font-extrabold text-orange text-[32px]">Detalle Factura</h1>
                <p className={pStyle}>Enviaremos la factura con todos los detalles al siguiente correo <span className="text-purple">dario22@enerbit.com</span></p>
                <h2 className="font-inter font-extrabold text-purple text-4xl">$234,000.00</h2>
                {
                    detalleFactura.map(({ price, label }) => {
                        return <span key={label} className="my-6 ml-8">
                            <h4 className={priceStyle}>{price}</h4>
                            <p className={pStyle}>{label}</p>
                        </span>
                    })
                }
                <SecondaryButton label='Ver más detalles' />
                <PrimaryButton label='Continuar' />
            </main>
            <NavBar/>
        </>
    )
}