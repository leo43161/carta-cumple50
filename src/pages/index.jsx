import Button from "@/components/Button";
import Contador from "@/components/Contador";
import { GiPartyPopper } from 'react-icons/gi';
import { PiShirtFoldedFill, PiDressBold, PiGift, PiArrowDownLight } from 'react-icons/pi';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

export default function index() {
    return (
        <div>
            <header className="flex flex-col items-center text-black relative w-auto h-[100vh] overflow-hidden bg-secondary">
                <img src="img/background.jpg" alt="Habitación" className="absolute inset-0 w-full h-full object-cover z-[1]" />
                <div className="flex-1 w-full h-full relative flex justify-center items-center flex-col px-5 z-[5]">
                    <div className="flex justify-center flex-col items-center relative pt-7 mb-10">
                        <h1 className="font-title text-7xl text-center mb-0">Mis</h1>
                        <h1 className="font-title text-7xl text-center mb-0">15</h1>
                        <h1 className="font-title text-7xl text-center mb-3">Años</h1>
                        <h1 className="font-title text-6xl text-center mb-0">Nixie</h1>
                    </div>
                    <div className="scroll-down z-40 bottom-0 pb-16">
                        <MdOutlineKeyboardArrowDown className="text-green" size={80} />
                    </div>
                </div>
            </header>
            <div className='bg-secondary text-center px-6 py-4 mb-6'>
                <h1 className="text-5xl font-title">Estás invitado!</h1>
                <p className="text-xl">Queremos que seas parte de este momento tan especial</p>
            </div>
            <div className='bg-light'>
                <Contador />
            </div>
            <div className="py-14 px-6">
                <div className="flex justify-center items-center flex-col">
                    <div className="mb-3">
                        <GiPartyPopper className="text-primary" size={120} />
                    </div>
                    <h1 className="text-6xl font-title">Fiesta</h1>
                    <p className="text-xl text-center mb-5">Ubicaion: Atardecer Del Campo - Manuela Pedraza, Simoca, Tucumán</p>
                    <Button>Ubicacion</Button>
                </div>
            </div>
            <div className="py-14 px-6 bg-primary">
                <div className="flex justify-center items-center flex-col">
                    <div className="mb-3 flex">
                        <PiShirtFoldedFill color="white" size={80} />
                        <PiDressBold color="white" size={80} />
                    </div>
                    <h1 className="text-6xl font-title">Vestimenta</h1>
                    <p className="text-2xl text-center mb-5">Formal</p>
                </div>
            </div>
            <div className="py-14 px-8">
                <div className="flex justify-center items-center flex-col">
                    <div className="mb-3">
                        <PiGift className="text-primary" size={110} />
                    </div>
                    <h1 className="text-6xl font-title">Regalos</h1>
                    <p className="text-xl text-center">Si deseás regalarme algo podés colaborar con mis sueños y anhelos✨
                        <br />
                        En el salón dispondremos de una urna para depositar sobres. ¡Muchas gracias!</p>
                </div>
            </div>
        </div>
    )
}
