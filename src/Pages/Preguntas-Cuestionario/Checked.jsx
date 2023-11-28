/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export function Checked () {

    const navigate = useNavigate()
    
    useEffect(() => {
        setTimeout(() => {
            navigate('/onboarding')
        }, 3000)
    }, [])

    return (
        <section className="w-screen h-screen bg-purple grid place-items-center">
            <div className="flex flex-col gap-6 items-center">
                <img className="w-44" src="../src/assets/icons/checkedIcon.svg" alt="" />
                <h1 className="font-bold text-white text-center text-xl">¡Perfecto, Vamos a empezar!</h1>
            </div>
        </section>
    )
}