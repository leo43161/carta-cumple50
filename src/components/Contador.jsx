import React from 'react'

export default function Contador() {
    return (
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
    )
}
