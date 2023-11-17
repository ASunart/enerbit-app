import { useState } from "react"
import { Link } from "react-router-dom"

export function Form() {
    const [emailValue, setEmailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')

    const handleEmailChange = (e) => {
        setEmailValue(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPasswordValue(e.target.value)
    }

    let formValidation = 'font-inter font-medium text-lg text-white bg-gray-400 w-full py-2 rounded-lg'

    if (emailValue != '' && passwordValue != '') {
        formValidation = 'font-inter font-medium text-lg text-white bg-orange w-full py-2 rounded-lg'
    }

    const labelStyle = 'flex flex-col text-orange text-lg font-regular gap-4'
    const inputStyle = 'border border-[#878787] rounded-lg px-4 py-2 text-left text-black focus:outline-orange'
    return (
        <form className="flex flex-col w-10/12 gap-8 mb-48">
            <label htmlFor="email"
                className={labelStyle}>
                Correo
                <input type="email"
                    name="email"
                    required
                    placeholder="usuario@enerbit.com"
                    value={emailValue}
                    onChange={handleEmailChange}
                    className={inputStyle} />
            </label>
            <label htmlFor="password"
                className={labelStyle}>
                Contraseña
                <input type="password"
                    required
                    name="password"
                    placeholder="contraseña"
                    value={passwordValue}
                    onChange={handlePasswordChange}
                    className={inputStyle} />
            </label>
            <p className="font-inter text-gray-500 m-auto text-sm">¿Olvidaste tu contraseña?</p>

            <fieldset className="flex flex-col gap-2 mt-10">
                <p className="font-inter text-gray-500 m-auto text-sm">Enerbit v2 19.1</p>
                <Link to='/cuestionario'>
                    <button type="submit" className={formValidation}>
                        Iniciar Sesión
                    </button>
                </Link>
                <button className="flex flex-col items-center font-inter font-semibold text-lg text-orange w-full py-2 rounded-lg border border-orange">No tengo acceso <span className="font-regular text-base">vengo de otra empresa de energia (QI ó DICEL)</span></button>
            </fieldset>
        </form>
    )
}