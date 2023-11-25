import { navOptions } from "../const/navOptions"

export function FacturasPage() {
    return (
        <>
            <h1>Facturas</h1>
            <nav className="absolute bottom-0 w-full py-3 bg-[#f4f4f4]">
                <ul className="grid grid-cols-3 place-items-center justify-center">
                    {
                        navOptions.map(({ label, image }) => {
                            return <li key={label} className="flex flex-col items-center"><img src={image} alt={label} className="w-1/2 stroke-gray-600"/> {label}</li>
                        })
                    }
                </ul>
            </nav>
        </>
    )
}