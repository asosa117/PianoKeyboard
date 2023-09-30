
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

keysCheckbox.addEventListener("click", hideKeys);
volumeSlider.addEventListener("input", handleVolume);
powerBox.addEventListener("click", power);
document.addEventListener("click", pressedKey);

/*
const showK = async function (event) {
  const pKeys = document.querySelectorAll(".pKeys .key"),
    volumeSlider = document.querySelector(".volume-slider input"),
    keysCheckbox = document.querySelector(".keys-checkbox input"),
    powerBox = document.querySelector(".power input"),
    blackscreen = document.querySelector(".blackScreen");
  const hideKeys = () => {
    pKeys.forEach((key) => key.classList.toggle("hide"));
  };
};
const powerB = async function (event) {
  const pKeys = document.querySelectorAll(".pKeys .key"),
    volumeSlider = document.querySelector(".volume-slider input"),
    keysCheckbox = document.querySelector(".keys-checkbox input"),
    powerBox = document.querySelector(".power input"),
    blackscreen = document.querySelector(".blackScreen");
  const power = () => {
    blackscreen.classList.toggle("hide");
  };
};

const volumeS = async function (event) {
  let audio = new Audio(`Psamples/C2.ogg`);
  const handleVolume = (e) => {
  audio.volume = e.target.value;
};
}

const keysC = async function (event) {
  const pKeys = document.querySelectorAll(".pKeys .key");
  
  let allKeys = [],
    audio = new Audio(`Psamples/C2.ogg`);
  const playTune = (key) => {
    audio.src = `Psamples/${key}.ogg`;
    audio.play();
  };
  pKeys.forEach((key) => {
    allKeys.push(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key));
  });
  const pressedKey = (e) => {
    if (allKeys.includes(e.key)) playTune(e.key);
  };
};


window.onload = function () {
  const sKey = document.querySelector(".keys-checkbox input");
  sKey.onclick = showK;

  const pButton = document.querySelector(".power input");
  pButton.onclick = powerB;
  
  const vSlider = document.querySelector(".volume-slider input");
  vSlider.onclick = volumeS;

  const keysClicked = document.querySelectorAll(".pKeys .key");
  keysClicked.onclick = keysC;
};*/
