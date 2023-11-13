import { Form } from "../components/Form";

export function LoginPage() {
    return (
        <main className="grid grid-rows-2 place-items-center h-screen">
            <h1 className="flex flex-col items-center text-purple font-inter font-medium text-2xl">
                Te damos la bienvenida a
                <img src="./src/assets/icons/enerbit-logo.svg" alt="" />
            </h1>
            <Form/>
        </main>
    )
}