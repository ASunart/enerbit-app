import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { NavBar } from "../components/NavBar";
import { AsistenciaFilter } from "../components/AsistenciaFilter";
import { PrimaryButton } from "../components/PrimaryButton";

export function AsistenciaPage() {
    const [filter, setFilter] = useState('null')

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
            </header>
            <main className="flex flex-col gap-3 w-10/12 mx-auto mt-12">
                <h1 className="font-inter font-extrabold text-orange text-[32px]">Aquí estamos para ayudarte</h1>
                <p className="font-inter font-regular text-gray-500 text-2xl">¿El problema que estas teniendo es referente a la pantalla donde hundiste el botón de asistencia?</p>
                <section className="mt-5 flex flex-col gap-3">
                <AsistenciaFilter filter={filter} onChange={handleFilterChange} />
                <PrimaryButton label='Continuar'/>
                </section>
            </main>
            <NavBar />
        </>
    )
}