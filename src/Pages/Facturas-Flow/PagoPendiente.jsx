import { AsistenciaBtn } from "../../components/AsistenciaBtn";
import { NavBar } from "../../components/NavBar";
import { PagadasCard } from "../../components/PagadasCard";
import { SecondaryButton } from "../../components/SecondaryButton";

export function PagoPendiente() {
    return(
        <>
            <header className="w-10/12 items-center mx-auto mt-10">
                <AsistenciaBtn />
            </header>
            <main className="flex flex-col gap-3 w-10/12 mx-auto mt-6">
            <p className="font-inter font-semibold text-base text-gray-400">Pagos y facturas - <span className="text-purple">Mi casa</span></p>
                <section className="grid grid-cols-2 gap-6 mt-3">
                    <SecondaryButton label='Pendientes'/>
                    <SecondaryButton label='Pagadas'/>
                </section>
                {/* <FacturaCard/> */}
                <PagadasCard />
            </main>
            <NavBar />
        </>
    )
}