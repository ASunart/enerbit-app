import { Link } from "react-router-dom";
import { PrimaryButton } from "../components/PrimaryButton";

export function OnboardingPage() {
    return (
        <main className="flex flex-col h-screen bg-purple justify-end">
            <section className="grid grid-rows-3 gap-12 bg-white h-5/6 rounded-t-[50px] relative">
                <img src="../src/assets/icons/onboarding-initial.svg"
                    className="absolute rounded-tl-[50px]"
                />
                <h1 className="font-inter font-regular text-3xl mt-56 ml-7 w-min text-orange relative">¡Bienvenido, <span className="font-bold">Darío</span>!</h1>
                <p
                    className="font-inter font-regular text-purple text-2xl ml-7 mt-24"
                >Antes de comenzar, quisiéramos contarte un poco de todo lo que podrás hacer con enerBit.</p>
                <div className="flex flex-col gap-4 w-10/12 m-auto">
                    <Link to='/onboarding/pagos'>
                        <PrimaryButton label='Continuar' />
                    </Link>
                    <Link to='/'>
                        <p className="font-inter font-bold text-xl text-orange border-b border-b-orange w-max m-auto">Omitir tutorial</p>
                    </Link>
                </div>
            </section>
        </main>
    )
}