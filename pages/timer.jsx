import React, { useState, useEffect, useRef } from "react";
import HPHeader from '../components/Homepage/HPHeader';
import StickyWaitingList from '../components/StickyWaitingList';

const Timer = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [currentDuration, setCurrentDuration] = useState(null);
  const [prevCustomMinutes, setPrevCustomMinutes] = useState("00");
  const [customMinutes, setCustomMinutes] = useState(null);
  const [countdownInterval, setCountdownInterval] = useState(null);
  const [remainingTime, setRemainingTime] = useState(0);
  const countdownElementRef = useRef(null);
  const bellSound1Ref = useRef(null);
  const bellSoundRef = useRef(null);
  const breakDuration = 300;

  const getFormattedTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const startCountdown = (duration) => {
    clearInterval(countdownInterval);
    setRemainingTime(duration);
    const newInterval = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime <= 0 && !isBreak) {
          setIsBreak(true);
          bellSoundRef.current.play();
          return breakDuration;
        } else if (prevTime <= 0 && isBreak) {
          clearInterval(newInterval);
          bellSoundRef.current.play();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    setCountdownInterval(newInterval);
  };

  const pauseCountdown = () => {
    clearInterval(countdownInterval);
  };

  const resetCountdown = () => {
    setIsBreak(false);
    clearInterval(countdownInterval);
    if (currentDuration === "custom") {
      setRemainingTime(customMinutes * 60);
    } else {
      setRemainingTime(parseInt(currentDuration));
    }
    setCurrentDuration(parseInt(timerSelect.value));
  };

  const handleCountdownInput = (event) => {
    const inputValue = event.target.innerText;
    const minutes = inputValue.split(":")[0];
    if (parseInt(minutes) != minutes) {
      event.target.innerText = `${prevCustomMinutes}:00`;
      return;
    }
    if (minutes.length > 3) {
      event.target.innerText = `${prevCustomMinutes}:00`;
      return;
    }
    setPrevCustomMinutes(minutes);
  };

  const handleTimerSelectChange = (event) => {
    if (event.target.value === "custom") {
      countdownElementRef.current.contentEditable = true;
      countdownElementRef.current.textContent = "";
      countdownElementRef.current.focus();
      return;
    }
    setRemainingTime(parseInt(event.target.value));
    setCurrentDuration(event.target.value);
    pauseCountdown();
  };

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const handlePlayClick = () => {
    countdownElementRef.current.contentEditable = false;
    const selectedTime = parseInt(
      currentDuration === undefined ? timerSelect.value : currentDuration
    );
    if (Number.isNaN(selectedTime)) startCountdown(customMinutes * 60);
    else startCountdown(selectedTime);
  };

  const handlePauseClick = () => {
    pauseCountdown();
  };

  const handleResetClick = () => {
    resetCountdown();
  };

  const handleAudioSelectChange = (event) => {
    const selectedAudio = event.target.value;
    let audioSource;
    switch (selectedAudio) {
      case "binauralbeats":
        audioSource =
          "https://NeuroNotionPullZonw.b-cdn.net/90min_Binaural_Beats.mp3";
        break;
      case "whitenoise":
        audioSource =
          "https://neuronotionpullzonw.b-cdn.net/onlymp3.to_-_ADHD_ADD_Relief_WHITE_NOISE_Natural_Sound_For_Better_Focus_And_Sleep_Proven_by_Science_-NWlFKrzvsm0-192k-1701018887.mp3";
        break;
      case "brownnoise":
        audioSource =
          "https://NeuroNotionPullZonw.b-cdn.net/onlymp3.to_-_brown_noise_for_studying_with_alpha_beta_wave_isochronic_tones-1ZxJfdghjs4-192k-1701018882.mp3";
        break;
      case "lofibeats":
        audioSource =
          "https://NeuroNotionPullZonw.b-cdn.net/onlymp3.to%20-%20Best%20of%20lofi%20hip%20hop%202023%20beats%20to%20relax%20study%20to-mmKguZohAck-192k-1709122744.mp3";
        break;
      default:
        audioSource = "";
    }
    bellSound1Ref.current.src = audioSource;
    bellSound1Ref.current.pause();
  };

  const handlePlayAudioClick = () => {
    bellSound1Ref.current.play();
  };

  const handleStopAudioClick = () => {
    bellSound1Ref.current.pause();
  };

  useEffect(() => {
    bellSound1Ref.current.addEventListener("ended", () => {
      bellSound1Ref.current.currentTime = 0;
    });
  }, []);

  return (
    <div
      className="transition duration-150 h-screen flex items-center justify-center"
      style={{ backgroundColor: isDarkMode ? "#191919" : "#ffffff" }}
    >
      <div className="text-center px-4 overflow-hidden">
        <div className="flex flex-row justify-center flex-wrap md:flex-nowrap items-center space-y-0 md:space-x-5">
          <div className="flex flex-row md:flex-col order-2 md:order-1">
            <div
              id="playdiv"
              onClick={handlePlayClick}
              className="cursor-pointer"
            >
              <img
                id="img_play"
                className="w-10 h-10"
                src={
                  isDarkMode
                    ? "https://raw.githubusercontent.com/joshiebudd/neuronotion/main/assets/dark_play.png"
                    : "https://raw.githubusercontent.com/joshiebudd/neuronotion/main/assets/play.png"
                }
                alt="Play"
              />
            </div>
            <div
              id="themeToggle"
              onClick={toggleTheme}
              className="cursor-pointer"
            >
              <img
                id="img_themeToggle"
                className="w-10 h-10"
                src={
                  isDarkMode
                    ? "https://raw.githubusercontent.com/joshiebudd/neuronotion/main/assets/lmtoggle.png"
                    : "https://raw.githubusercontent.com/joshiebudd/neuronotion/main/assets/lmdm.png"
                }
                alt="Toggle Theme"
              />
            </div>
          </div>
          <div
            id="countdown"
            className={`text-4xl md:text-6xl italic min-w-full md:min-w-0 font-bold order-1 md:order-2 focus:outline-none ${
              isDarkMode ? "text-gray-50" : ""
            }`}
            ref={countdownElementRef}
            contentEditable={customMinutes !== null}
            onInput={handleCountdownInput}
            suppressContentEditableWarning={true}
          >
            {getFormattedTime(remainingTime)}
          </div>

          <div className="flex flex-row md:flex-col order-3">
            <div
              id="pausediv"
              onClick={handlePauseClick}
              className={`cursor-pointer ${
                countdownInterval ? "" : "pointer-events-none opacity-50"
              }`}
            >
              <img
                id="img_pause"
                className="w-10 h-10"
                src={
                  isDarkMode
                    ? "https://raw.githubusercontent.com/joshiebudd/neuronotion/main/assets/dark_pause.png"
                    : "https://raw.githubusercontent.com/joshiebudd/neuronotion/main/assets/pause.png"
                }
                alt="Pause"
              />
            </div>
            <div
              id="resetdiv"
              onClick={handleResetClick}
              className="cursor-pointer"
            >
              <img
                id="img_reset"
                className="w-10 h-10"
                src={
                  isDarkMode
                    ? "https://raw.githubusercontent.com/joshiebudd/neuronotion/main/assets/dark_reset.png"
                    : "https://raw.githubusercontent.com/joshiebudd/neuronotion/main/assets/reset.png"
                }
                alt="Reset"
              />
            </div>
          </div>
        </div>
        <div className="text-xs flex relative inline-block pt-3 pb-3">
          <select
            id="timerSelect"
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleTimerSelectChange}
          >
            <option value="0">
              Please select the length of your study lesson
            </option>
            <option value="1500">25 Mins</option>
            <option value="3600">60 Mins</option>
            <option value="5400">90 Mins</option>
            <option value="custom">Custom</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4 mt-3 mb-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M14.293 6.293a1 1 0 0 0-1.414 0L10 9.586 7.707 7.293a1 1 0 1 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0 0-1.414z" />
            </svg>
          </div>
        </div>
        <div className="text-xs flex flex-wrap md:flex-nowrap items-center justify-center">
          <div className="flex relative flex-col md:min-w-0 overflow-auto will-change-scroll flex-grow">
            <select
              id="audioSelect"
              className="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleAudioSelectChange}
            >
              <option value="bell">Please choose focus sounds</option>
              <option value="binauralbeats">Binaural Beats</option>
              <option value="whitenoise">White Noise</option>
              <option value="brownnoise">Brown Noise</option>
              <option value="lofibeats">Lofi Beats</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M14.293 6.293a1 1 0 0 0-1.414 0L10 9.586 7.707 7.293a1 1 0 1 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0 0-1.414z" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col">
            <div
              id="playAudiodiv"
              onClick={handlePlayAudioClick}
              className="cursor-pointer"
            >
              <img
                id="audio_play"
                className="w-10 h-10"
                src={
                  isDarkMode
                    ? "https://raw.githubusercontent.com/joshiebudd/neuronotion/main/assets/dark_play.png"
                    : "https://raw.githubusercontent.com/joshiebudd/neuronotion/main/assets/play.png"
                }
                alt="Play"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div
              id="stopAudiodiv"
              onClick={handleStopAudioClick}
              className="cursor-pointer"
            >
              <img
                id="audio_stop"
                className="w-10 h-10"
                src={
                  isDarkMode
                    ? "https://raw.githubusercontent.com/joshiebudd/neuronotion/main/assets/dark_pause.png"
                    : "https://raw.githubusercontent.com/joshiebudd/neuronotion/main/assets/pause.png"
                }
                alt="Stop"
              />
            </div>
          </div>
        </div>
        <div className="mt-5 flex justify-center w-full">
          <a
            href="https://www.neuro-notion.com"
            className="flex items-center"
            style={{ textDecoration: "none" }}
          >
            <div style={{ minWidth: "40px" }}>
              <img
                className="w-10 h-10"
                src="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/Bubbles.svg"
                alt="Avatar"
              />
            </div>
            <div
              className={`ml-2 md:text-base text-xs ${
                isDarkMode ? "text-gray-50" : ""
              }`}
              id="dev"
            >
              Made by Neuro Notion © 2024
            </div>
          </a>
        </div>
      </div>
      <audio
        ref={bellSound1Ref}
        src="https://NeuroNotionPullZonw.b-cdn.net/bell%20(1).mp3"
      />
      <audio
        ref={bellSoundRef}
        src="https://NeuroNotionPullZonw.b-cdn.net/bell%20(1).mp3"
      />
    </div>
  );
};

export default Timer;
