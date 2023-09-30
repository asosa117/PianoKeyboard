
  const pKeys = document.querySelectorAll(".pKeys .key"),
    volumeSlider = document.querySelector(".volume-slider input"),
    keysCheckbox = document.querySelector(".keys-checkbox input"),
    powerBox = document.querySelector(".power input"),
    blackscreen = document.querySelector(".blackScreen");


let allKeys = [],
    audio = new Audio(`Psamples/C2.ogg`);

pKeys.forEach((key) => {
    allKeys.push(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key));
  });

const playTune = (key) => {
    audio.src = `Psamples/${key}.ogg`;
    audio.play();
  const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => { 
        clickedKey.classList.remove("active");
    }, 150);
  };

  const pressedKey = (e) => {
    if (allKeys.includes(e.key)) playTune(e.key);
  };

  const hideKeys = () => {
    pKeys.forEach((key) => key.classList.toggle("hide"));
  };

  const power = () => {
    blackscreen.classList.toggle("hide");
  };

  const handleVolume = (e) => {
  audio.volume = e.target.value;
};

document.addEventListener("click", pressedKey);
keysCheckbox.addEventListener("click", hideKeys);
volumeSlider.addEventListener("input", handleVolume);
powerBox.addEventListener("click", power);

