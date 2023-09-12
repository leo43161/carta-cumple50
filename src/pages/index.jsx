import Contador from "@/components/Contador";

export default function index() {
    return (
        <div>
            <header className="flex flex-col items-center text-black relative w-auto h-[67vh] overflow-hidden bg-secondary">
                <img src="img/background.jpg" alt="Habitación" className="absolute inset-0 w-full h-full object-cover z-[1] rounded-b-[20px]" />
                <div className="flex-1 w-full h-full flex justify-center items-center flex-col px-5 z-[5]">
                    <div className="flex justify-center flex-col items-center relative pt-7">
                        <h1 className="font-title text-6xl text-center mb-0">Mis</h1>
                        <h1 className="font-title text-6xl text-center mb-0">15</h1>
                        <h1 className="font-title text-6xl text-center mb-3">Años</h1>
                        <h1 className="font-title text-5xl text-center mb-0">Nixie</h1>
                    </div>
                </div>
            </header>
            <div className='bg-secondary text-center px-6 py-4 mb-4'>
                <h1 className="text-5xl font-title">Estás invitado!</h1>
                <p className="text-xl">Queremos que seas parte de este momento tan especial</p>
            </div>
            <Contador></Contador>
            <div></div>

        </div>
    )
}
