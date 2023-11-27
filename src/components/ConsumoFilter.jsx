/* eslint-disable react/prop-types */
import { filtersConsumo } from "../const/filtersConsumo"

export function ConsumoFilter({filter, onChange}) {

    return (
        <ul className="grid grid-cols-3 gap-6">
            {
                filtersConsumo.map(({ id, value, label }) => {
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
                            <label htmlFor={label} className="inline-flex items-center justify-center w-full py-2 text-gray-300 bg-white border border-gray-300 rounded-lg peer-checked:border-orange peer-checked:text-orange">
                                <h2>{label}</h2>
                            </label>
                        </li>
                    )
                })
            }
        </ul>
    )
}

