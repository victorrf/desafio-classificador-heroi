const bgMusic = document.getElementById("bgMusic");
const toggleButton = document.getElementById("toggleMusic");
let musicStarted = false;
let isPlaying = false;

document.addEventListener("click", function startMusicOnce() {
    if (!musicStarted) {
        bgMusic.volume = 0.5;
        bgMusic.play();
        isPlaying = true;
        musicStarted = true;
        document.removeEventListener("click", startMusicOnce);
    }
});

toggleButton.addEventListener("click", () => {
    if (isPlaying) {
        bgMusic.pause();
        toggleButton.textContent = "▶ Tocar música";
    } else {
        bgMusic.play();
        toggleButton.textContent = "⏸ Pausar música";
    }
    isPlaying = !isPlaying;
});

function verificar(event) {
    event.preventDefault();

    const hero = document.getElementById("nameHero").value;
    const xp = Number(document.getElementById("qntXp").value);

    let level = "";

    if (xp <= 1000) {
        level = "Ferro"
    } else if (xp <= 2000) {
        level = "Bronze"
    } else if (xp <= 5000) {
        level = "Prata"
    } else if (xp <= 7000) {
        level = "Ouro"
    } else if (xp <= 8000) {
        level = "Platina"
    } else if (xp <= 9000) {
        level = "Ascendente"
    } else if (xp <= 10000) {
        level = "Imortal"
    } else {
        level = "Radiante"
    }

    alert(`O Herói de nome ${hero} está no nível de ${level}.`);
}