
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
            <div className="flex justify-around">
                <div className="flex flex-col justify-center items-center gap-2">
                    <div className="rounded-full bg-primary p-4 text-xl h-14 w-14 flex justify-center items-center">
                        02
                    </div>
                    <div>
                        Dias
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <div className="rounded-full bg-primary p-4 text-xl h-14 w-14 flex justify-center items-center">
                        12
                    </div>
                    <div>
                        Horas
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <div className="rounded-full bg-primary p-4 text-xl h-14 w-14 flex justify-center items-center">
                        22
                    </div>
                    <div>
                        Minutos
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <div className="rounded-full bg-primary p-4 text-xl h-14 w-14 flex justify-center items-center">
                        01
                    </div>
                    <div>
                        Segundos
                    </div>
                </div>
            </div>
        </div>
    )
}
