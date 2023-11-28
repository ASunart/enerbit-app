/* eslint-disable react/prop-types */
import { useState } from "react";
import { AsistenciaBtn } from "../../components/AsistenciaBtn";
import { ConsumoCard } from "../../components/ConsumoCard";
import { ConsumoFilter } from "../../components/ConsumoFilter";
import { NavBar } from "../../components/NavBar";
import { ModalConsumo } from "../../components/ModalConsumo";
import { useNavigate } from "react-router-dom";

export function ConsumoDetail() {
    const [filter, setFilter] = useState('mes')
    const [modal, setModal] = useState(false)

    const handleFilterChange = (e) => {
        const { target } = e
        setFilter(target.value)
    }

    const toggleModal = () => {
        setModal(prevState => !prevState)
    }

    const navigate = useNavigate()
    const previousStep = () => navigate(-1)

    return (
        <>
        <ModalConsumo modal={modal} onClose={toggleModal}/>
            <header className="grid grid-cols-2 w-10/12 items-center mx-auto mt-10">
                <img src="../src/assets/icons/back-icon.svg" alt="Atrás" onClick={previousStep}/>
                <AsistenciaBtn />
            </header>
            <main className="flex flex-col w-10/12 gap-4 mx-auto mt-6 mb-24">
                <p className="font-inter font-semibold text-base text-gray-400">Consumo - <span className="text-purple">Mi casa</span></p>
                <ConsumoFilter filter={filter} onChange={handleFilterChange} />
                <section 
                className="bg-purple px-5 py-2 rounded-xl flex flex-row items-center justify-between"
                onClick={toggleModal}
                >
                    <p className="font-inter font-regular text-white text-lg"><strong>Este cálculo es aproximado.</strong> <span className="underline">conoce más aquí</span></p>
                    <img src="../src/assets/icons/warning-consumo.svg" alt="Advertencia" />
                </section>
                <ConsumoCard filter={filter} />
            </main>
            <NavBar />
        </>
    )
}
