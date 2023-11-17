import { Link, useNavigate } from "react-router-dom";
import { PrimaryButton } from "../../components/PrimaryButton";

export function OnboardingMetodo() {
    const navigate = useNavigate()
    const previousStep = () => navigate(-1)
    return (
        <main className="flex flex-col items-center h-screen bg-purple justify-end relative">
            <img
                src="../src/assets/images/onboarding-metodo.webp"
                alt="Sección de pagos ampliada"
                className="absolute top-0 w-11/12 left-0" />
            <section className="grid grid-rows-3 bg-white h-1/2 rounded-t-[50px] relative">
                <img
                    src="../src/assets/icons/metodo-icon.svg"
                    alt="Icono de método de pago"
                    className="self-center m-auto" />
                <div>
                    <h1 className="font-inter font-bold text-3xl mx-7 text-orange relative">
                    Cambia tu método de pago
                    </h1>
                    <p
                        className="font-inter font-regular text-purple text-2xl mx-7 mt-4">
                        Escoge tu método predeterminado para pagar tus facturas.
                    </p>
                </div>

                <div className="grid grid-cols-2 items-center w-10/12 m-auto">
                    <img src="../src/assets/icons/back-icon.svg" alt="Flecha volver atrás" onClick={previousStep}/>
                    <Link to='/onboarding/asistencia'>
                        <PrimaryButton label='Continuar' />
                    </Link>
                </div>
            </section>
        </main>
    )
}