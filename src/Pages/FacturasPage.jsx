import { AsistenciaBtn } from "../components/AsistenciaBtn";
import { Card } from "../components/Card";
import { NavBar } from "../components/NavBar";

export function FacturasPage() {
    return (
        <>
            <header className="w-10/12 m-auto mt-8">
                <AsistenciaBtn />
            </header>
            <main className="flex flex-col gap-5 w-10/12 mx-auto mt-6">
                <p className="font-inter font-semibold text-base text-gray-400">Pagos y facturas</p>
                <h1 className="font-inter font-medium text-gray-500 text-2xl w-10/12">Selecciona una dirección para ver tu factura</h1>
                <Card title='Mi Casa' button='Ver facturas' route='/facturas/pago-pendiente'/>
                <Card title='Mi Finca' button='Ver facturas'/>
            </main>
            <NavBar/>
        </>
    )
}