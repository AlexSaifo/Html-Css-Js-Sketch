const sounds = ["Monkey", "Lion", "Elephant", "Mosquito", "Peacock"];

sounds.forEach((sound) => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = sound;
    btn.addEventListener("click", () => {
        stopSounds();
        document.getElementById(sound).play();
    });

    document.getElementById("buttons").appendChild(btn);
});

function stopSounds() {
    sounds.forEach((sound) => {
        const sou = document.getElementById(sound);
        sou.pause();
        sou.currentTime = 0;
    });
}