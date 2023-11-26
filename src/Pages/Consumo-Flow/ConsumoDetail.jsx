import { AsistenciaBtn } from "../../components/AsistenciaBtn";
import { ConsumoCard } from "../../components/ConsumoCard";
import { NavBar } from "../../components/NavBar";
import { SecondaryButton } from "../../components/SecondaryButton";

export function ConsumoDetail() {
    return (
        <>
            <header className="grid grid-cols-2 w-10/12 items-center mx-auto mt-10">
                <img src="../src/assets/icons/back-icon.svg" alt="Atrás" />
                <AsistenciaBtn />
            </header>
            <main className="flex flex-col w-10/12 gap-4 mx-auto mt-6">
                <p className="font-inter font-semibold text-base text-gray-400">Consumo - <span className="text-purple">Mi casa</span></p>
                <section className="grid grid-cols-3 gap-6">
                    <SecondaryButton label='Hora' />
                    <SecondaryButton label='Día' />
                    <SecondaryButton label='Mes' />
                </section>
                <section className="bg-purple px-5 py-2 rounded-xl flex flex-row items-center justify-between">
                    <p className="font-inter font-regular text-white text-lg"><strong>Este cálculo es aproximado.</strong> <span className="underline">conoce más aquí</span></p>
                    <img src="../src/assets/icons/warning-consumo.svg" alt="Advertencia" />
                </section>
                <ConsumoCard/>
            </main>
            <NavBar/>
        </>
    )
}