a = document.getElementById("Yakuza");
b = document.getElementById("INFO");

function addShimano() {
  a.src = "images/ShimanoFULL.png";
}
function addHaruka() {
  a.src = "images/HarukaFULL.png";
}
function addMajima() {
  a.src = "images/MajimaFULL.png";
}
function addKazama() {
  a.src = "images/KazamaPU.png";
}
function addKiryu() {
  a.src = "images/KiryuFULL.png";
}
function addNishiki() {
  a.src = "images/NishikiFULL.png";
}

function kiryuText() {
  b.innerText =
    "Kazuma Kiryu, also known as The Dragon of Dojima is the former primary protagonist of the Like a Dragon (formerly Yakuza) series. Kiryu is the stoic dreamer of the dark yakuza world, living by a strict code of honor and has a very strong sense of justice.";
  b.classList.add("h1");
}
function nishikiText() {
  b.innerText =
    "Akira Nishikiyama, often shortened to Nishiki, is a major supporting character featured in Yakuza 0 and the main antagonist of Yakuza/Yakuza Kiwami. He was best friends with Kazuma Kiryu, originally a member of the Dojima Family and he goes on to become the patriarch of the Nishikiyama Family.";
  b.classList.add("h1");
}
function kazamaText() {
  b.innerText =
    "Shintaro Kazama, a recurring character in the Yakuza series is the captain of the Dojima Family, patriarch of the Kazama Family, which became a direct subsidiary of the Tojo Clan and the proprietor of Sunflower Orphanage. He is a man of dignity who is highly trusted and respected by his men, as well as those who he takes into his care. He was a role model to both Kiryu and Nishiki, being the reason the two wished to become Yakuza, in which Kazama disapproved of. ";
  b.classList.add("h1");
}
function majimaText() {
  b.innerText =
    "Goro Majima, also known as The Mad Dog of Shimano, is a former patriarch of the Majima Family, the founder and former president of Majima Construction, and the former vice-chairman of the Tojo Clan. He is a resourceful, charismatic, and commanding man who has gained the respect of friend and foe alike, often due to his ferocity";
  b.classList.add("h1");
}
function harukaText() {
  b.innerText =
    "Haruka Sawamura is a main character featured in the Like a Dragon series. She is the adoptive daughter of Kazuma Kiryu, whom she first meets and becomes close to during the events of Yakuza/Yakuza Kiwami. Haruka resides in Okinawa at the Morning Glory Orphanage along with eight other children Kiryu has taken in. She acts as an elder sister figure to the rest of the kids.";
  b.classList.add("h1");
}
function shimanoText() {
  b.innerText =
    "Futoshi Shimano, one of the main antaganists featured in Yakuza 0 and Yakuza/Yakuza Kiwami, with flashback appearances in Yakuza 2/Yakuza Kiwami 2. He is the patriarch of the Shimano Family and has a reputation for his ruthless, violent nature. He is short-tempered and is a firm believer in enforcing discipline.";
  b.classList.add("h1");
}

//https://www.w3schools.com/jsref/met_audio_play.asp
function playSfx() {
  document.getElementById("Moshi").play();
}
function playSfx2() {
  document.getElementById("KiryuChan").play();
}
function playSfx3() {
  document.getElementById("Haha").play();
}
function playSfx4() {
  document.getElementById("Bullet").play();
}
function playSfx5() {
  document.getElementById("Yay").play();
}
function playSfx6() {
  document.getElementById("Easter").play();
}

function toggleImage(imageid, fullImageSrc, regularImageSrc) {
  let imageElement = document.getElementById(imageid);

  if (imageElement.src.includes("KiryuFULL.png")) {
    stopSongs();
    document.getElementById("MIT").play();
    document.getElementById("Yakuza").src = "images/KiryuPU.png";
  } else if (imageElement.src.includes("MajimaFULL.png")) {
    stopSongs();
    document.getElementById("24").play();
    document.getElementById("Yakuza").src = "images/MajimaPU.png";
  } else if (imageElement.src.includes("NishikiFULL.png")) {
    stopSongs();
    document.getElementById("JUDGE").play();
    document.getElementById("Yakuza").src = "images/NishikiPU.png";
  } else if (imageElement.src.includes("KazamaPU.png")) {
    stopSongs();
    document.getElementById("KAZ").play();
    document.getElementById("Yakuza").src = "images/KazamaFULL.png";
  } else if (imageElement.src.includes("HarukaFULL.png")) {
    stopSongs();
    document.getElementById("HAR").play();
    document.getElementById("Yakuza").src = "images/HarukaPU.png";
  } else if (imageElement.src.includes("ShimanoFULL.png")) {
    stopSongs();
    document.getElementById("SHI").play();
    document.getElementById("Yakuza").src = "images/ShimanoPU.png";
  }
}

function stopSongs() {
  document.getElementById("24").pause();
  document.getElementById("JUDGE").pause();
  document.getElementById("KAZ").pause();
  document.getElementById("HAR").pause();
  document.getElementById("SHI").pause();
  document.getElementById("MIT").pause();
}

document.getElementById("Yakuza").addEventListener("click", function () {
  toggleImage("Yakuza", "images/KiryuFULL.png", "images/KiryuPU.png");
});
