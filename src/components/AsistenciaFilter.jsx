/* eslint-disable react/prop-types */

import { asistencia } from "../const/asistencia"

export function AsistenciaFilter({ filter, onChange }) {
    return (
        <ul className="grid grid-rows-2 gap-8">
            {
                asistencia.map(({ id, value, content }) => {
                    return (
                        <li key={id}>
                            <input
                                type="radio"
                                id={id}
                                value={value}
                                className="hidden peer"
                                onChange={onChange}
                                checked={(filter === value)}
                                required />
                            <label htmlFor={id} className="flex flex-col justify-center w-full py-8 px-6 text-gray-500 bg-white border-2 shadow-md border-gray-300 rounded-lg peer-checked:border-orange">
                                <p className="text-xl">{content}</p>
                            </label>
                        </li>
                    )
                })
            }
        </ul>
    )
}