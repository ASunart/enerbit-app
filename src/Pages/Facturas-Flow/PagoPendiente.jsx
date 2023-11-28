import { useState } from "react";
import { AsistenciaBtn } from "../../components/AsistenciaBtn";
import { FacturasFilter } from "../../components/FacturasFilter";
import { NavBar } from "../../components/NavBar";
import { PagadasCard } from "../../components/PagadasCard";
import { FacturaCard } from "../../components/FacturaCard";

export function PagoPendiente() {
    const [filter, setFilter] = useState('pendientes')

    const handleFilterChange = (e) => {
        const { target } = e
        setFilter(target.value)
    }

    return (
        <>
            <header className="w-10/12 items-center mx-auto mt-10">
                <AsistenciaBtn />
            </header>
            <main className="flex flex-col gap-3 w-10/12 mx-auto mt-6 h-[95vh]">
                <p className="font-inter font-semibold text-base text-gray-400">Pagos y facturas - <span className="text-purple">Mi casa</span></p>
                <FacturasFilter filter={filter} onChange={handleFilterChange} />
                {
                    filter === 'pendientes' ? <FacturaCard /> : <PagadasSection />
                }
            </main>
            <NavBar />
        </>
    )
}

function PagadasSection() {
    return (
        <>
                <PagadasCard />
                <PagadasCard />
        </>
    )
}