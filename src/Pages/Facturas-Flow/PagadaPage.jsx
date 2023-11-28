import { useNavigate } from "react-router-dom";
import { AsistenciaBtn } from "../../components/AsistenciaBtn";
import { DetallePagada } from "../../components/DetallePagada";

export function PagadaPage() {
    const navigate = useNavigate()
    const previousStep = () => navigate(-1)
    return (
        <>
            <header className="grid grid-cols-2 w-10/12 items-center mx-auto mt-10">
                <img src="../src/assets/icons/back-icon.svg" alt="Atrás" onClick={previousStep} />
                <AsistenciaBtn />
            </header>
            <main className="flex flex-col gap-3 w-10/12 mx-auto mt-6">
                <DetallePagada />
            </main>
        </>
    )
}