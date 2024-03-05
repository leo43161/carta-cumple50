import React from 'react'
import Countdown from 'react-countdown';

const CountDown = ({ hours, minutes, seconds, completed,days }) => {
    if (completed) {
        // Render a completed state
        return <h1 className="font-title">Es mi cumpleaños!</h1>;
    } else {
        // Render a countdown
        return <div className="flex justify-around">
            <div className="flex flex-col justify-center items-center gap-2">
                <div className="rounded-full bg-primary p-4 text-xl h-14 w-14 flex justify-center items-center">
                    {days}
                </div>
                <div>
                    Dias
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
                <div className="rounded-full bg-primary p-4 text-xl h-14 w-14 flex justify-center items-center">
                    {hours}
                </div>
                <div>
                    Horas
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
                <div className="rounded-full bg-primary p-4 text-xl h-14 w-14 flex justify-center items-center">
                    {minutes}
                </div>
                <div>
                    Minutos
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
                <div className="rounded-full bg-primary p-4 text-xl h-14 w-14 flex justify-center items-center">
                    {seconds}
                </div>
                <div>
                    Segundos
                </div>
            </div>
        </div>;
    }
}

export default function Contador() {
    return (
        <Countdown
            date={'2024-03-10T21:00:00'}
            renderer={CountDown}
        />
    )
}
