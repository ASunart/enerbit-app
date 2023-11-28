import { NavBar } from "../components/NavBar";

export function AjustesPage() {
    return (
        <>
        <header className="flex flex-col items-center gap-2">
            <img src="../src/assets/icons/profile-img.svg" alt="" />
            <h1>Darío Martinez</h1>
            <p>Visualización principiante</p>
        </header>
            <section>
                <h2>Configuración</h2>
                <ul>
                    <li>Tus grupos</li>
                </ul>
            </section>
            <section>
                <h2>Soporte</h2>
                <ul>
                    <li>Habla con nosotros</li>
                </ul>
            </section>
            <NavBar />
        </>
    )
}