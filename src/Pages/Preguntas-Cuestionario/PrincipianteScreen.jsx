import { PrimaryButton } from "../../components/PrimaryButton";
import { Link } from "react-router-dom";

export function PrincipianteScreen () {
    return (
        <section className="flex flex-col gap-20">
            <p className="text-2xl text-gray-500">Hemos identificado que el mejor para ti es el modo de visualizacion: <strong>Principiante.</strong> Mira la imagen de abajo y entiende las diferencias.</p>
            <img src="../src/assets/images/modoVisualizacion.webp" alt="" />
            <Link className='w-full' to='/cuestionario/resultados'>
                <PrimaryButton label='Siguiente'/>
            </Link>
        </section>
    )
}