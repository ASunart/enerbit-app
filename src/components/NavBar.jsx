/* eslint-disable react/jsx-key */
import { navOptions } from "../const/navOptions"
import { NavLink } from "react-router-dom"

export function NavBar() {

    return (
        <nav className="bottom-0 w-full py-3 bg-[#f4f4f4] fixed">
            <ul className="grid grid-cols-3 place-items-center justify-center items-center">
                {
                    navOptions.map(({ label, image, route }) => {
                        return (
                            <NavLink key={label} to={route}>
                                <li className="flex flex-col items-center">
                                    <img src={image} alt={label} className="w-1/2 stroke-gray-600" />
                                        {label}
                                </li>
                            </NavLink>
                        )
                    })
                }
            </ul>
        </nav>
    )
}