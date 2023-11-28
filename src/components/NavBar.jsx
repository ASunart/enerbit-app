/* eslint-disable react/jsx-key */
import { navOptions } from "../const/navOptions"
import { NavLink } from "react-router-dom"

export function NavBar() {
    
    return (
        <nav className="bottom-0 w-full py-3 bg-[#f4f4f4] fixed">
            <ul className="grid grid-cols-3 place-items-center items-center">
                {
                    navOptions.map(({ label, image, route, active }) => {
                        const textColor = window.location.pathname === route ? 'text-orange' : 'text-gray-400'
                        const navStyle =`flex flex-col items-center font-inter font-regular ${textColor} text-base gap-2`
                        const imageColor = window.location.pathname === route ? active : image
                        return (
                            <NavLink key={label} to={route}>
                                <li className={navStyle}>
                                    <img src={imageColor} alt={label} />
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