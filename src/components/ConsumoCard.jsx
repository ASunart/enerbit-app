/* eslint-disable react/prop-types */
export function ConsumoCard({ filter }) {
    switch (filter) {
        case 'mes':
            return <ConsumoMes />

        case 'hora':
            return <ConsumoHora />

        case 'dia':
            return <ConsumoDia />

        default:
            break;
    }
}

function ConsumoMes() {
    const titleStyle = 'font-inter font-medium text-purple text-2xl'
    const pStyle = 'font-inter font-regular text-gray-500 text-xl'
    return (
        <article className="flex flex-col gap-4 px-4 py-7 shadow-md w-full rounded-xl mb-8">
            <p className="font-inter font-regular text-gray-400 text-base">Miercoles, 13 de Octubre del 2023</p>
            <section className="flex flex-row justify-between">
                <h1 className="font-inter font-extrabold text-orange text-[32px] w-2/3">Reporte mes de octubre</h1>
                <img src="../src/assets/icons/reporte-mes.svg" alt="" />
            </section>
            <hr className="border-gray-500" />
            <section className="w-[99%] flex flex-col gap-3">
                <h3 className={titleStyle}>Lo que has consumido hasta ahora...</h3>
                <p className={pStyle}>En este mes, desde el dia 01 hasta el dia 13, <span className="font-bold">has consumido <span className="underline underline-offset-4">aproximadamente</span> $13.000 pesos.</span></p>
            </section>
            <hr className="border-gray-500" />
            <section className="w-[99%] flex flex-col gap-3">
                <h3 className={titleStyle}>Comparación mes pasado</h3>
                <p className={pStyle}>Tu consumo tuvo un aumento de <span className="font-bold underline underline-offset-4">aprox.</span><span className="font-bold">de $12.000 pesos,</span> un <span className="text-[#FF303C] font-bold"> 15% más que el mes anterior</span></p>
            </section>
            <hr className="border-gray-500" /><section className="w-[99%] flex flex-col gap-3">
                <h3 className={titleStyle}>Estimación de costo mensual</h3>
                <p className={pStyle}>De seguir con el consumo actual, tu <span className="font-bold">tarifa mensual podría ser de <span className="underline underline-offset-4">aproximadamente</span> $165.000 pesos.</span></p>
            </section>
        </article>
    )
}

function ConsumoHora() {
    const titleStyle = 'font-inter font-medium text-purple text-2xl'
    const pStyle = 'font-inter font-regular text-gray-500 text-xl'
    return (
        <article className="flex flex-col gap-4 px-4 py-7 shadow-md w-full rounded-xl mb-8">
            <p className="font-inter font-regular text-gray-400 text-base">Hoy, 13 de Octubre del 2023</p>
            <section className="flex flex-row justify-between">
                <h1 className="font-inter font-extrabold text-orange text-[32px] w-2/3">Reporte por hora</h1>
                <img src="../src/assets/icons/reporte-hora.svg" alt="" />
            </section>
            <hr className="border-gray-500" />
            <section className="w-[99%] flex flex-col gap-3">
                <h3 className={titleStyle}>En este rango de horas
                    has consumido...</h3>
                <p className={pStyle}>Desde las 9:00am y las 10:00am, <span className="font-bold">has consumido <span className="underline underline-offset-4">aproximadamente</span> $5.000 pesos.</span></p>
            </section>
            <hr className="border-gray-500" />
            <section className="w-[99%] flex flex-col gap-3">
                <h3 className={titleStyle}>Hora de menos consumo</h3>
                <p className={pStyle}>Entre las 6:00am y las 9:00am fue <span className="font-bold underline underline-offset-4">aprox.</span><span className="font-bold"> de $2.000 pesos,</span> un <span className="text-[#249C30] font-bold"> 23% menos que la hora promedio</span></p>
            </section>
            <hr className="border-gray-500" /><section className="w-[99%] flex flex-col gap-3">
                <h3 className={titleStyle}>Estimación del costo de esta hora</h3>
                <p className={pStyle}>De seguir con el consumo actual, tu <span className="font-bold">tarifa de 9:00am a 10:00am podría ser de  <span className="underline underline-offset-4">aproximadamente</span> $23.400 pesos.</span></p>
            </section>
        </article>
    )
}

function ConsumoDia() {
    const titleStyle = 'font-inter font-medium text-purple text-2xl'
    const pStyle = 'font-inter font-regular text-gray-500 text-xl'
    return (
        <article className="flex flex-col gap-4 px-4 py-7 shadow-md w-full rounded-xl mb-8">
        <p className="font-inter font-regular text-gray-400 text-base">Miércoles, 13 de Octubre del 2023</p>
        <section className="flex flex-row justify-between">
            <h1 className="font-inter font-extrabold text-orange text-[32px] w-2/3">Reporte por día</h1>
            <img src="../src/assets/icons/reporte-dia.svg" alt="" />
        </section>
        <hr className="border-gray-500" />
        <section className="w-[99%] flex flex-col gap-3">
            <h3 className={titleStyle}>En el día de hoy
                has consumido...</h3>
            <p className={pStyle}>El día 13 de octubre del 2023, <span className="font-bold">has consumido <span className="underline underline-offset-4">aproximadamente</span> $5.000 pesos.</span></p>
        </section>
        <hr className="border-gray-500" />
        <section className="w-[99%] flex flex-col gap-3">
            <h3 className={titleStyle}>Día de menos consumo</h3>
            <p className={pStyle}>El lunes 11 de octubre el consumo fue <span className="font-bold underline underline-offset-4">aprox.</span><span className="font-bold"> de $9.500 pesos,</span> un <span className="text-[#249C30] font-bold"> 31% menos que el día promedio</span></p>
        </section>
        <hr className="border-gray-500" /><section className="w-[99%] flex flex-col gap-3">
            <h3 className={titleStyle}>Estimación del costo del día</h3>
            <p className={pStyle}>De seguir con el consumo actual, tu <span className="font-bold">tarifa de hoy podría ser de  <span className="underline underline-offset-4">aproximadamente</span> $23.400 pesos.</span></p>
        </section>
    </article>
    )
}