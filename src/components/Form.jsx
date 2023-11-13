export function Form() {
    const labelStyle = 'flex flex-col text-orange text-lg font-regular gap-4'
    const inputStyle = 'border border-[#878787] rounded-lg px-4 py-2 text-left text-black'
    return (
        <form className="flex flex-col w-10/12 gap-8 mb-48">
            <label htmlFor="email"
                className={labelStyle}>
                Correo
                <input type="email"
                    name="email"
                    placeholder="usuario@enerbit.com"
                    className="border border-[#878787] rounded-lg px-4 py-2 text-left text-black" />
            </label>
            <label htmlFor="password"
                className={labelStyle}>
                Contraseña
                <input type="password"
                    name="password"
                    placeholder="contraseña"
                    className={inputStyle} />
            </label>
            <p className="font-inter text-gray-500 m-auto text-sm">¿Olvidaste tu contraseña?</p>

            <fieldset className="flex flex-col gap-2 mt-10">
                <p className="font-inter text-gray-500 m-auto text-sm">Enerbit v2 19.1</p>
                <button className="font-inter font-medium text-lg text-white bg-gray-400 w-full py-2 rounded-lg">Iniciar Sesión</button>
                <button className="flex flex-col items-center font-inter font-semibold text-lg text-orange w-full py-2 rounded-lg border border-orange">No tengo acceso <span className="font-regular text-base">vengo de otra empresa de energia (QI ó DICEL)</span></button>
            </fieldset>
        </form>
    )
}