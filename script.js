// Pesan yang muncul di tombol "No" setiap kali diklik
const messages = [
  "Yakin?",
  "Coba pikir lagi deh...",
  "Beneran nih?",
  "Please dong...",
  "Aku bakal sedih lho :(",
  "Kasih kesempatan dong",
  "Jangan gitu dong...",
  "Hati aku hancur :'(",
];

let messageIndex = 0;

function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");

  // Ganti teks tombol No
  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  // Perbesar tombol Yes tiap No diklik
  const currentSize = parseFloat(
    window.getComputedStyle(yesButton).fontSize
  );
  yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}

// ===== Tombol No kabur pas didekati mouse =====
const noBtn = document.querySelector(".no-button");

noBtn.addEventListener("mouseenter", function () {
  const x = Math.floor(Math.random() * 160) - 80; // geser -80 sampai +80px
  const y = Math.floor(Math.random() * 100) - 50; // geser -50 sampai +50px
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});