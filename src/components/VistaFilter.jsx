/* eslint-disable react/prop-types */

import { filterVista } from "../const/filterVista"

export function VistaFilter({ filter, onChange }) {
    return (
        <ul className="grid grid-rows-2 gap-8">
            {
                filterVista.map(({ id, title, value, label }) => {
                    return (
                        <li key={id}>
                            <input
                                type="radio"
                                id={label}
                                value={value}
                                className="hidden peer"
                                onChange={onChange}
                                checked={(filter === value)}
                                required />
                            <label htmlFor={label} className="flex flex-col justify-center w-full py-8 px-6 text-gray-500 bg-white border-2 shadow-md border-gray-300 rounded-lg peer-checked:border-orange">
                                <h1 className="font-inter font-extrabold text-[32px] text-orange">{title}</h1>
                                <p className="text-xl">{label}</p>
                            </label>
                        </li>
                    )
                })
            }
        </ul>
    )
}