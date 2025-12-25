"use strict";

const note = document.querySelector(".note");
const frequency = document.querySelector(".frequency");
const button = document.querySelector(".start-tuning");

function init() {
    button.addEventListener("click", () => {
        getLocalStream();
    });
}

function getLocalStream() {
    navigator.mediaDevices
        .getUserMedia({video: false, audio: true})
        .then(stream => {
            window.localStream = stream;
            window.localAudio.srcObject = stream;
            window.localAudio.autoplay = true;
        })
        .catch((error) => {
            console.log(error);
        });
}

init();