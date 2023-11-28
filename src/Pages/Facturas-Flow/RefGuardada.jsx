import { PrimaryButton } from "../../components/PrimaryButton";

export function RefGuardada () {
    return (
        <div className="w-screen h-screen grid place-items-center bg-purple">
            <div className="flex flex-col items-center text-center text-white gap-8 px-10">
                <img className="w-44" src="../src/assets/icons/checkedIcon.svg" alt="" />
                <h1 className="text-2xl">
                    Se ha guardado tu referencia de pago de <span className="font-bold">Factura Septiembre</span> en tu galeria de fotos
                </h1>
                <div className="w-full flex flex-col gap-4">
                    <PrimaryButton label='Terminar'/>
                    <button className="font-inter font-medium text-lg text-orange bg-white w-full py-3 rounded-lg">Abrir galeria de fotos</button>
                </div>
            </div>
        </div>
    )
}