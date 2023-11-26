import { AsistenciaBtn } from "../../components/AsistenciaBtn"
import { NavBar } from "../../components/NavBar"
import { RefPagoCard } from "../../components/RefPagoCard"

export function RefPagoPage() {
    const pStyle = 'font-inter font-regular text-gray-500 text-2xl'
    return (
        <>
            <header className="grid grid-cols-2 w-10/12 items-center mx-auto mt-10">
                <img src="../src/assets/icons/back-icon.svg" alt="Atrás" />
                <AsistenciaBtn />
            </header>
            <main className="flex flex-col gap-3 w-10/12 mx-auto mt-6">
                <p className="font-inter font-semibold text-base text-gray-400">Pagos y facturas - <span className="text-purple">Mi casa</span></p>
                <h1 className="font-inter font-extrabold text-orange text-[32px]">Referencia de pago </h1>
                <p className={pStyle}><strong>¡Guarda estos datos!</strong> Te los pediran en tu corresponsal Bancolombia más cercano</p>
                <RefPagoCard/>
            </main>
            <NavBar />
        </>
    )
}