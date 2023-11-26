import { SecondaryButton } from "./SecondaryButton";

export function Card() {
    const regularText = "font-inter font-regular text-gray-500 text-lg"
    return (
        <article className="flex flex-col gap-4 px-5 py-7 shadow-md w-full rounded-xl">
            <span>
                <h2 className="font-inter font-extrabold text-orange text-3xl">Mi casa</h2>
            </span>
            <span>
                <h3 className="font-inter font-semibold text-gray-500 text-lg">Calle 6a #43-25</h3>
                <h4 className={regularText}>Los Cámbulos</h4>
                <h5 className={regularText}>Cali, Valle del Cauca</h5>
            </span>
            <SecondaryButton label='Ver facturas' />
        </article>
    )
}