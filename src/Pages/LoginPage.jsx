export function LoginPage() {
    const labelStyle = 'flex flex-col text-orange text-lg font-regular gap-4'
    const inputStyle = 'border border-[#878787] rounded-lg px-4 py-2 text-left text-black'
    return (
        <main className="flex flex-col justify-center items-center gap-40 h-screen">
            <h1 className="flex flex-col items-center text-purple font-inter font-medium text-2xl">
                Te damos la bienvenida a
                <img src="./src/assets/icons/enerbit-logo.svg" alt="" />
            </h1>
            <form className="flex flex-col w-10/12 gap-8">
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

                <fieldset className="flex flex-col gap-2">
                    <p className="font-inter text-gray-500 m-auto text-sm">Enerbit v2 19.1</p>
                    <button className="font-inter font-medium text-lg text-white bg-gray-400 w-full py-2 rounded-lg">Iniciar Sesión</button>
                    <button className="font-inter font-medium text-lg text-white bg-gray-400 w-full py-2 rounded-lg">Iniciar Sesión</button>
                </fieldset>
            </form>
        </main>
    )
}