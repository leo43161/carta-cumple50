import Button from "@/components/Button";
import Contador from "@/components/Contador";
import { GiPartyPopper } from 'react-icons/gi';
import { PiShirtFoldedFill, PiDressBold, PiGift } from 'react-icons/pi';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import MusicPlayer from "@/components/MusicPlayer";
import { useState } from "react";
export default function Index() {
    const [message, setMessage] = useState({
        nombre: "",
        asistencia: "Si voy a asisitir",
        mensaje: "",
    });

    const sendInvitationHandler = (event) => {
        event.preventDefault();

        const { nombre, asistencia, mensaje } = message;

        const mensajeWhatsApp = `Hola, soy ${nombre} y quiero confirmar mi asistencia a tu fiesta. Mi respuesta es: ${asistencia}. Además, quiero decirte las siguientes palabras: ${mensaje}`;
        const numeroDestino = "5493813343270"; // Reemplaza con el número de WhatsApp de destino, incluyendo el prefijo internacional

        const url = `https://wa.me/${numeroDestino}?text=${encodeURIComponent(
            mensajeWhatsApp
        )}`;

        window.open(url, "_blank");
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setMessage({ ...message, [name]: value });
    };
    return (<>
        <div className="md:w-3/6 md:mx-auto">
            <header className="flex flex-col items-center text-black relative w-auto h-[80vh] overflow-hidden bg-secondary">
                <img src="img/background.jpg" alt="Habitación" className="absolute inset-0 w-full h-full object-cover z-[1]" />
                <div className="flex-1 w-full h-full relative flex justify-center items-center flex-col px-5 z-[5]">
                    <div className="flex justify-center flex-col items-center relative pt-7 mb-10">
                        <h1 className="font-title text-5xl text-center mb-0">Mis</h1>
                        <h1 className="font-title text-8xl text-center mb-0 font-bold text-primary">50</h1>
                        <h1 className="font-title text-7xl text-center mb-3">Años</h1>
                        <h1 className="font-elegant text-6xl text-center mb-3">Beatriz</h1>
                    </div>
                </div>
                <div className="z-40 md:pb-8 bottom-0 pb-16 absolute w-full flex justify-center">
                    <div className="scroll-down w-full">
                        <h1 className="font-title text-2xl text-center mb-3 text-golden">Dale a play</h1>
                    </div>
                </div>
            </header>
            <MusicPlayer></MusicPlayer>
            <div className='bg-white text-center px-6 py-4 mb-4'>
                <h1 className="text-5xl font-title">Estás invitado!</h1>
                <p className="text-xl">Queremos que seas parte de este momento tan especial</p>
            </div>
            <div className='bg-secondary py-7'>
                {/* <Contador /> */}
            </div>
            {/* FIESTA */}
            <div className="py-14 px-8">
                <div className="flex justify-center items-center flex-col">
                    <div className="mb-3">
                        <GiPartyPopper className="text-primary bounce-in" size={120} />
                    </div>
                    <h1 className="text-6xl font-title">Fiesta</h1>
                    <p className="text-xl text-center mb-5">¡Te espero el <span className="text-golden font-bold text-xl">Viernes 13 de Octubre a las 21:00 hs</span>  para festejar este gran momento de mi vida!<br></br>
                    <span className="text-golden font-bold text-xl">Atardecer Del Campo, Manuela Pedraza, Tucumán</span><br></br>
                        Clickeá en el botón de abajo y encontrá las indicaciones para llegar, ¡nos vemos!😉
                    </p>
                    <a href="https://www.google.com/maps/place/Atardecer+Del+Campo/@-27.2226471,-65.3660536,17z/data=!4m14!1m7!3m6!1s0x9423b3e3d249ed0f:0x649ab8fbc28c8122!2sAtardecer+Del+Campo!8m2!3d-27.2226519!4d-65.3634787!16s%2Fg%2F11f3vksp53!3m5!1s0x9423b3e3d249ed0f:0x649ab8fbc28c8122!8m2!3d-27.2226519!4d-65.3634787!16s%2Fg%2F11f3vksp53?entry=ttu">
                        <Button>COMO LLEGAR</Button>
                    </a>
                </div>
            </div>
            {/* VESTIMENTA */}
            <div className="py-14 px-8 bg-primary">
                <div className="flex justify-center items-center flex-col">
                    <div className="mb-3 flex shake">
                        <PiShirtFoldedFill color="white" size={80} />
                        <PiDressBold color="white" size={80} />
                    </div>
                    <h1 className="text-6xl font-title">Vestimenta</h1>
                    <p className="text-2xl text-center mb-5">Formal</p>
                </div>
            </div>
            {/* REGALOS */}
            <div className="py-14 px-8">
                <div className="flex justify-center items-center flex-col">
                    <div className="mb-3">
                        <PiGift className="text-primary animate-bounce" size={110} />
                    </div>
                    <h1 className="text-6xl font-title">Regalos</h1>
                    <p className="text-xl text-center">Si deseás regalarme algo podés colaborar con mis sueños y anhelos✨
                        <br />
                        En el salón dispondremos de una urna para depositar sobres. ¡Muchas gracias!</p>
                </div>
            </div>
            {/* ASISTENCIA */}
            <div className="py-14 px-8 bg-primary">
                <div className="flex justify-center items-center flex-col">
                    <h1 className="text-6xl font-title">Asistencia</h1>
                    <p className="text-xl text-center mb-4">
                        Confirma tu asistencia al evento antes del <strong>3 de octubre</strong>
                    </p>
                    <form className="w-full" onSubmit={sendInvitationHandler}>
                        <div className="w-full mb-5">
                            <input
                                type="text"
                                name="nombre"
                                value={message.nombre}
                                onChange={handleInputChange}
                                className="bg-gray-50 border border-gray-300 
                            text-gray-900 focus:ring-blue-500 
                            focus:border-blue-500 block w-full p-2.5 text-lg mb-4"
                                placeholder="Nombre y Apellido"
                                required
                            />
                            <select
                                name="asistencia"
                                value={message.asistencia}
                                onChange={handleInputChange}
                                className="bg-gray-50 border border-gray-300 
                            text-gray-900 focus:ring-blue-500 
                            focus:border-blue-500 block w-full p-2.5 text-lg mb-4"
                            >
                                <option value="Si voy a asisitir">Si voy a asisitir</option>
                                <option value="No podre asisitir">No podré asistir</option>
                            </select>
                            <textarea
                                name="mensaje"
                                value={message.mensaje}
                                onChange={handleInputChange}
                                rows="4"
                                className="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Escribe un mensaje para la cumpleañera"
                            ></textarea>
                        </div>
                        <div className="flex justify-center">
                            <Button type="submit" white={true}>
                                CONFIRMAR ASISTENCIA
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
            {/* REGALOS */}
            <div className="py-14 px-8">
                <div className="flex justify-center items-center flex-col">
                    <h1 className="text-6xl font-title mb-4">Te esperamos</h1>
                    <p className="text-center text-5xl font-elegant">Beatriz</p>
                </div>
            </div>
        </div>
    </>
    )
}
