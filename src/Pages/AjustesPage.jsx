import { useNavigate } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { configuracion, soporte } from "../const/ajustesConf";

export function AjustesPage() {
    const h2Style = "font-inter font-semibold text-purple text-2xl mb-4"
    const liStyle = "font-inter font-regular text-gray-500 text-2xl flex justify-between items-center border-b py-4"
    const ulStyle = "flex flex-col gap-2"
    const navigate = useNavigate()

    return (
        <>
            <header className="flex flex-col items-center gap-2 mt-14">
                <img src="../src/assets/icons/profile-img.svg" alt="" />
                <h1 className="font-inter font-semibold text-gray-500 text-2xl">Darío Martinez</h1>
                <p className="font-inter font-regular text-purple text-xl">Visualización principiante</p>
            </header>
            <main className="flex flex-col gap-5 w-10/12 mx-auto mt-10">
                <section>
                    <h2 className={h2Style}>Configuración</h2>
                    <ul className={ulStyle}>
                        {
                            configuracion.map(({ id, label, icon, path }) => {
                                const handleClick = () => {
                                    navigate(path)
                                }
                                return (
                                    <li className={liStyle} key={id} onClick={handleClick}>
                                        <span className="flex items-center gap-3">
                                            <img src={icon} />
                                            {label}
                                        </span>
                                        <img src="../src/assets/icons/right-arrow.svg" alt="" />
                                    </li>
                                )
                            })
                        }
                    </ul>
                </section>
                <section>
                    <h2 className={h2Style}>Soporte</h2>
                    <ul className={ulStyle}>
                        {
                            soporte.map(({ id, label, icon }) => {
                                return (
                                    <li className={liStyle} key={id}>
                                        <span className="flex items-center gap-3">
                                            <img src={icon} alt="" />
                                            {label}
                                        </span>
                                        <img src="../src/assets/icons/right-arrow.svg" />
                                    </li>
                                )
                            })
                        }
                    </ul>
                </section>
            </main>
            <NavBar />
        </>
    )
}