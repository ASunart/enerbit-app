export function ConsumoCard() {
    const titleStyle = 'font-inter font-medium text-purple text-2xl'
    const pStyle = 'font-inter font-regular text-gray-500 text-xl'

    return (
        <article className="flex flex-col gap-4 px-4 py-7 shadow-md w-full rounded-xl mb-8">
            <p className="font-inter font-regular text-gray-400 text-base">Miercoles, 13 de Octubre del 2023</p>
            <section className="flex flex-row justify-between">
                <h1 className="font-inter font-extrabold text-orange text-[32px] w-2/3">Reporte mes de octubre</h1>
                <img src="../src/assets/icons/reporte-mes.svg" alt="" />
            </section>
            <hr className="border-gray-500"/>
            <section className="w-[99%] flex flex-col gap-3">
            <h3 className={titleStyle}>Lo que has consumido hasta ahora...</h3>
            <p className={pStyle}>En este mes, desde el dia 01 hasta el dia 13, <span className="font-bold">has consumido <span className="underline underline-offset-4">aproximadamente</span> 13.000 pesos.</span></p>
            </section>
            <hr className="border-gray-500"/>
            <section className="w-[99%] flex flex-col gap-3">
            <h3 className={titleStyle}>Lo que has consumido hasta ahora...</h3>
            <p className={pStyle}>En este mes, desde el dia 01 hasta el dia 13, <span className="font-bold">has consumido <span className="underline underline-offset-4">aproximadamente</span> 13.000 pesos.</span></p>
            </section>
            <hr className="border-gray-500"/><section className="w-[99%] flex flex-col gap-3">
            <h3 className={titleStyle}>Lo que has consumido hasta ahora...</h3>
            <p className={pStyle}>En este mes, desde el dia 01 hasta el dia 13, <span className="font-bold">has consumido <span className="underline underline-offset-4">aproximadamente</span> 13.000 pesos.</span></p>
            </section>
        </article>
    )
}