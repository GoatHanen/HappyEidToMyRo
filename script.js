// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

// Logic to move the NO btn

noBtn.addEventListener("mouseover", () => {
    const min = 200;
    const max = 200;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Logic to make YES btn to grow

// let yesScale = 1;

// yesBtn.style.position = "relative"
// yesBtn.style.transformOrigin = "center center";
// yesBtn.style.transition = "transform 0.3s ease";

// noBtn.addEventListener("click", () => {
//     yesScale += 2;

//     if (yesBtn.style.position !== "fixed") {
//         yesBtn.style.position = "fixed";
//         yesBtn.style.top = "50%";
//         yesBtn.style.left = "50%";
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }else{
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }
// });

// YES is clicked

yesBtn.addEventListener("click", () => {
   title.innerHTML = "you are so smart <br> how this is possible";

    catImg.src = "happy.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";
});







window.addEventListener('load', () => {
    // تحديد الحجم بناءً على عرض الشاشة (إذا أصغر من 600 بكسل يعني جوال)
    const isMobile = window.innerWidth < 600;

    confetti({
        particleCount: isMobile ? 80 : 150, // عدد أقل للجوال عشان ما يعلق
        spread: 70,
        origin: { y: 0.6 },
        scalar: isMobile ? 0.8 : 1.2, // هنا الحجم: 0.8 للجوال و 1.2 للكمبيوتر
        colors: ['#ff0000', '#000000', '#8b0000', '#ffffff']
    });
});

document.addEventListener('mousedown', (e) => {
    const isMobile = window.innerWidth < 600;
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    confetti({
        particleCount: isMobile ? 40 : 60,
        spread: 50,
        origin: { x: x, y: y },
        scalar: isMobile ? 0.7 : 1, // تصغير الحجم عند الضغط في الجوال
        colors: ['#ff0000', '#000000', '#ffffff']
    });
});

