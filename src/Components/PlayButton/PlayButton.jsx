import { useState, useEffect, useRef } from "react";
import "./PlayButton.css";
// Asegúrate de importar el CSS
import PauseIcon from "../../assets/pause-icon.svg";
import MatildeLinaAudio from "../../assets/audio/matilde-lina.mp3";

import JSConfetti from "js-confetti";

const jsConfetti = new JSConfetti();

const Reproductor = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(new Audio(MatildeLinaAudio));
  const confetti = useRef(false);
  const confettiIndex = useRef(0);

  useEffect(() => {
    const audio = audioRef.current;

    // Actualizar el progreso cada vez que cambia la posición de la música
    const updateProgress = () => {
      const duration = audio.duration;
      const currentTime = audio.currentTime;
      if (currentTime > 1 && confetti.current === false) {
        jsConfetti.addConfetti();
        jsConfetti.addConfetti();
        jsConfetti.addConfetti();
        confetti.current = true;
      }
      const progress = (currentTime / duration) * 100;
      const progressParsed = parseInt(progress);
      if (progressParsed === 100 && confettiIndex.current < 10) {
        jsConfetti.addConfetti();
        confettiIndex.current = confettiIndex.current + 1;
      }

      setProgress(progress);
    };

    if (isPlaying) {
      audio.play();
      const interval = setInterval(updateProgress, 100);
      return () => clearInterval(interval);
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="play-container">
      <button className="play-button" onClick={handlePlayPause}>
        {!isPlaying ? (
          <div className="play-icon"></div>
        ) : (
          <div className="pause-icon">
            <img src={PauseIcon} />
          </div>
        )}
      </button>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default Reproductor;
