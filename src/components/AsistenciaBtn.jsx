import { Link } from "react-router-dom";

export function AsistenciaBtn() {
    return (
        <Link to='/asistencia'>
        <button
            className="border border-purple text-purple font-inter font-semibold text-xl w-full rounded-lg flex flex-row items-center justify-center gap-4 py-2"
        >Asistencia <img src="../src/assets/icons/btn-asistencia.svg" /></button>
        </Link>
    )
}