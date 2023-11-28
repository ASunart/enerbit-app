import { useNavigate } from "react-router-dom";
import { AsistenciaBtn } from "../../components/AsistenciaBtn";
import { NavBar } from "../../components/NavBar";
import { VistaFilter } from "../../components/VistaFilter";
import { useState } from "react";

export function CambiarVisualizacion() {
    const [filter, setFilter] = useState('principiante')

    const handleFilterChange = (e) => {
        const { target } = e
        setFilter(target.value)
    }

    const navigate = useNavigate()
    const previousStep = () => navigate(-1)
    return (
        <>
            <header className="grid grid-cols-2 w-10/12 items-center mx-auto mt-10">
                <img src="../src/assets/icons/back-icon.svg" alt="Atrás" onClick={previousStep} />
                <AsistenciaBtn />
            </header>
            <main className="flex flex-col gap-3 w-10/12 mx-auto mt-12">
                <VistaFilter filter={filter} onChange={handleFilterChange}/>
            </main>
            <NavBar />
        </>
    )
}