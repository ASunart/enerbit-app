/* eslint-disable react/prop-types */
export function ModalConsumo({ modal, onClose }) {
    const pStyle = "font-inter font-medium text-white text-xl"

    if (modal) {
        return (
            <div className="sticky left-0 top-0 right-0 bottom-0 h-screen bg-zinc-400 bg-opacity-50 flex items-center justify-center py-12 z-10">
                <article className="py-16 px-12 bg-purple rounded-2xl flex flex-col gap-6 w-11/12 h-min">
                    <section className="flex flex-row items-center justify-between mb-8">
                        <img src="../src/assets/icons/modal-icon.svg" />
                        <img src="../src/assets/icons/close-modal.svg" onClick={onClose} />
                    </section>
                    <h1 className="font-inter font-bold text-2xl text-white">El cálculo de tu consumo por hora es un <span className="text-[#F6AE71]">aproximado</span>, no un valor exacto.</h1>
                    <p className={pStyle}>El precio de la energía no es un valor estático, este tiene diferentes variantes que pueden afectarlo.</p>
                    <p className={pStyle}>Por lo tanto, usamos datos estimados basados en meses anteriores y pronósticos de expertos para dar un precio final estimado.</p>
                    <p className={pStyle}>El precio final a pagar puede variar por cambios externos o según tu consumo.</p>
                </article>
            </div>
        )
    }

}