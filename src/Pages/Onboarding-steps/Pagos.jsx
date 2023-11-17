import { Link } from "react-router-dom";
import { PrimaryButton } from "../../components/PrimaryButton";

export function OnboardingPagos() {
    return (
        <main className="flex flex-col h-screen bg-purple justify-end relative">
            <img
                src="../src/assets/images/onboarding-pagos.webp"
                alt="Sección de pagos ampliada"
                className="absolute w-5/6 top-0 right-0" />
            <section className="grid grid-rows-3 bg-white h-1/2 rounded-t-[50px] relative">
                <img
                    src="../src/assets/icons/facturas-icon.svg"
                    alt="Icono de facturas"
                    className="self-center m-auto" />
                <div>
                    <h1 className="font-inter font-bold text-3xl ml-7 w-min text-orange relative">
                        Pagos
                    </h1>
                    <p
                        className="font-inter font-regular text-purple text-2xl mx-7 mt-4">
                        Realiza tus pagos y consulta tus facturas.
                    </p>
                </div>

                <div className="flex flex-col gap-2 w-10/12 m-auto">
                    <Link to='/onboarding/consumo'>
                    <PrimaryButton label='Continuar' />
                    </Link>  
                </div>
            </section>
        </main>
    )
}