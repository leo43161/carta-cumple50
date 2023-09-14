import Button from "@/components/Button";
import Contador from "@/components/Contador";
import { GiPartyPopper } from 'react-icons/gi';
import { PiShirtFoldedFill, PiDressBold, PiGift, PiArrowDownLight } from 'react-icons/pi';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import MusicPlayer from "@/components/MusicPlayer";

export default function index() {
    return (
        <div className="md:w-3/6 md:mx-auto">
            <header className="flex flex-col items-center text-black relative w-auto h-[100vh] overflow-hidden bg-secondary">
                <img src="img/background.jpg" alt="Habitación" className="absolute inset-0 w-full h-full object-cover z-[1]" />
                <div className="flex-1 w-full h-full relative flex justify-center items-center flex-col px-5 z-[5]">
                    <div className="flex justify-center flex-col items-center relative pt-7 mb-10">
                        <h1 className="font-title text-7xl text-center mb-0">Mis</h1>
                        <h1 className="font-title text-7xl text-center mb-0">15</h1>
                        <h1 className="font-title text-7xl text-center mb-3">Años</h1>
                        <h1 className="font-title text-6xl text-center mb-0">Nixie</h1>
                    </div>
                    <div className="scroll-down z-40 md:pb-8 bottom-1 pb-16">
                        <MdOutlineKeyboardArrowDown className="text-green" size={80} />
                    </div>
                </div>
            </header>
            <MusicPlayer></MusicPlayer>
            <div className='bg-secondary text-center px-6 py-4 mb-6'>
                <h1 className="text-5xl font-title">Estás invitado!</h1>
                <p className="text-xl">Queremos que seas parte de este momento tan especial</p>
            </div>
            <div className='bg-light'>
                <Contador />
            </div>
            {/* FIESTA */}
            <div className="py-14 px-8">
                <div className="flex justify-center items-center flex-col">
                    <div className="mb-3">
                        <GiPartyPopper className="text-primary bounce-in" size={120} />
                    </div>
                    <h1 className="text-6xl font-title">Fiesta</h1>
                    <p className="text-xl text-center mb-5">¡Te espero el Viernes 13 de Octubre a las 21:00 hs para festejar este gran momento de mi vida!<br></br>
                        Atardecer Del Campo, Manuela Pedraza, Tucumán<br></br>
                        Clickeá en el botón de abajo y encontrá las indicaciones para llegar, ¡nos vemos!😉
                    </p>
                    <Button>COMO LLEGAR</Button>
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
                    <p className="text-xl text-center mb-4">Confirma tu asistencia al evento antes de el 3 de octubre</p>
                    <div className="w-full mb-5">
                        <input
                            type="text"
                            id="first_name"
                            className="bg-gray-50 border border-gray-300 
                            text-gray-900 focus:ring-blue-500 
                            focus:border-blue-500 block w-full p-2.5 text-lg mb-4"
                            placeholder="Nombre y Apellido"
                            required
                        />
                        <textarea id="message" rows="4" className="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Escribe un mensaje para la cumpleañera"></textarea>
                    </div>
                    <Button white={true}>CONFIRMAR ASISTENCIA</Button>
                </div>
            </div>
            {/* REGALOS */}
            <div className="py-14 px-8">
                <div className="flex justify-center items-center flex-col">
                    <h1 className="text-6xl font-title">Te esperamos</h1>
                    <p className="text-xl text-center">Nixie</p>
                </div>
            </div>
        </div>
    )
}
