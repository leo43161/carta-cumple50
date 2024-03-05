import React, { useState, useRef, useEffect } from 'react';
import { BsPlayFill, BsPauseFill } from 'react-icons/bs';

function MusicPlayer() {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const playPauseToggle = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = () => {
        // Actualiza la barra de progreso de reproducción según el tiempo actual
        const progressBar = document.getElementById('progress-bar');
        const currentTime = audioRef.current.currentTime;
        const duration = audioRef.current.duration;
        const percentage = (currentTime / duration) * 100;
        progressBar.style.width = percentage + '%';
    };
    useEffect(()=> {
        if (audioRef) {
            playPauseToggle();
        }
    },[])
    return (
        <div className="bg-primary text-center px-5 py-3">
            <audio
                ref={audioRef}
                src="music/A Thousand Years.mp3"
                onTimeUpdate={handleTimeUpdate}
                autoPlay={true}
            ></audio>
            <div className="flex items-center gap-3">
                <button className="shrink-0" onClick={playPauseToggle}>
                    {isPlaying ? <BsPauseFill size={35} /> : <BsPlayFill size={35} />}
                </button>
                <div className="progress-bar flex-1">
                    <div className='bg-golden' id="progress-bar"></div>
                </div>
            </div>
        </div>
    );
}

export default MusicPlayer;