import { PrimaryButton } from "../../components/PrimaryButton";
import { SecondaryButton } from "../../components/SecondaryButton";

export function ResultadoVisualizacion () {
    return (
        <section>
            <div className="flex flex-col gap-3">
                <h1 className="font-bold text-purple text-3xl">¡Muy bien! Has terminado de configurar tu  perfil
                </h1>

                <p className="text-gray-500 text-2xl">Queremos confirmar que todo este correcto</p>
            </div>

            <article className="rounded-xl shadow-lg border border-gray-500 border-opacity-20 mt-10">
                <div className="px-6 py-4 flex flex-col gap-2 border-opacity-20 border-b border-b-gray-500">
                    <h4 className="font-bold text-xl text-purple">Nombre</h4>
                    <p className="text-gray-500 text-2xl font-medium">Darío</p>
                </div>

                <div className="px-6 py-4 flex flex-col gap-2 border-opacity-20 border-b border-b-gray-500">
                    <h4 className="font-bold text-xl text-purple">Modo de visualización</h4>
                    <h6 className="text-gray-500 text-2xl font-medium">Principiante</h6>
                    <p className="text-gray-500 text-xl">Te gusta ir al punto. Con este modo podras acceder rapidamente a tus pagos y consumos sencillamente</p>
                </div>

                <div className="px-6 py-4 flex flex-col gap-2">
                    <h4 className="font-bold text-xl text-purple">Método de pago preferido</h4>
                    <p className="text-gray-500 text-2xl font-medium">Efectivo mediante Corresponsal Bancolombia</p>
                </div>
            </article>

            <div className="flex flex-col gap-4 mt-14">
                <p className="text-gray-500 underline underline-offset-2 text-lg">En caso de querer cambiar algo en el futuro puedes hacerlo en el apartado de ajustes</p>

                <SecondaryButton label='Editar'/>

                <PrimaryButton label="¡Es correcto!"/>
            </div>

        </section>
    )
}