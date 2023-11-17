import { PrimaryButton } from "../../components/PrimaryButton";
import { RadioOption } from "../../components/RadioOption";
import { Link } from "react-router-dom";

export function Pregunta3() {
    const cuadrosComparativos = <img src="../src/assets/images/cuadros-comparativos.webp" className="w-3/4" />
    const graficosBarras = <img src="../src/assets/images/grafico-barras.webp" className="w-3/4" />
    const articleStyle = 'flex flex-col gap-4'
    return (
        <>
            <header className="flex flex-col w-10/12 items-center mx-auto mt-24 gap-8">
                <h1
                    className="font-inter font-regular text-2xl text-gray-500">¿Cómo es más facil para ti entender la información sobre tu consumo de energía?</h1>

            </header>
            <section className="flex flex-col gap-8 items-center w-10/12 mx-auto mt-8">
                <article className={articleStyle}>
                    <RadioOption label={cuadrosComparativos} />
                    <p className="font-inter font-regular text-xl text-purple">Los cuadros comparativos presentan solo los datos claves de tu consumo.</p>
                </article>
                <article className={articleStyle}>
                    <RadioOption label={graficosBarras} />
                    <p className="font-inter font-regular text-xl text-purple">Con los gráficos avanzados podrás ver datos más exactos sobre tu consumo.</p>
                </article>
                <Link className='w-full' to='/cuestionario/pregunta-4'>
                    <PrimaryButton label='Siguiente' />
                </Link>
            </section>
        </>
    )
}