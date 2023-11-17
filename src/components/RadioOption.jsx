/* eslint-disable react/prop-types */
export function RadioOption({ label }) {
    return (
        <div className="flex items-center px-4 border border-gray-200 rounded-md w-full shadow-md">
            <label
                htmlFor="bordered-radio-1"
                className="w-full font-inter font-regular py-4 ms-2 text-xl font-medium text-gray-500">{label}</label>
            <input
                id="bordered-radio-1"
                type="radio"
                value=""
                name="bordered-radio"
                className="w-4 h-4 accent-orange bg-gray-100 border-gray-300 checked:border-orange"
                />
        </div>
    )
}