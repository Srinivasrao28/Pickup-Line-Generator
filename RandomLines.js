
const lines = [
    "Are you a magician? Because whenever I look at you, everyone else disappears",
   " Are you made of copper and tellurium? Because you are Cu-Te",
    "Do you have a map? I keep getting lost in your eyes",
    "If you were a vegetable, you'd be a cute-cumber!",
    "Are you a WiFi signal? Because I'm feeling a connection.",
    "Are you a camera? Every time I see you, I smile.",
    "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
    "If beauty were time, you'd be an eternity.",
   " Are you a campfire? Because you're hot and I want s'more.",
    "Do you believe in love at first sight, or should I walk by again?",
    "Are you a parking ticket? Because you've got 'Fine' written all over you.",
    "Do you have a sunburn, or are you always this hot?",
   " If you were a cat, you'd purr-fect.",
    "Are you a time traveler? Because I can't imagine my future without you.",
    "Excuse me, but I think the stars tonight are outshone by your beauty.",
    "Can I follow you home? Cause my parents always told me to follow my dreams.",
   " Are you a bank loan? Because you have my interest!",
    "If beauty were a crime, you'd be serving a life sentence.",
    "Is your name Google? Because you have everything I've been searching for.",
    "Do you have a sunburn or are you always this hot?",
    "If you were words on a page, you'd be fine print.",
   " Do you have a name, or can I call you mine?",
   " If you were words on a page, you'd be what they call FINE print.",
    "Are you a time traveler? Because I can see you in my future.",
   " Do you have a Band-Aid? Because I just scraped my knee falling for you.",
    "Are you made of copper and tellurium? Because you're Cu-Te.",
    "Can I take a picture of you so I can show Santa exactly what I want for Christmas?",
   " Are you a magician? Because whenever I look at you, everyone else disappears.",
    "Do you have a sun map? I keep getting lost in your sunshine.",
    "Are you a parking ticket? Because you've got “fine” written all over you.",
];

let array = [];

function reloadOnce() {
    let randomline = Math.floor(Math.random() * 30);
    let arandom = lines[randomline];
    ranlines.innerHTML = arandom;
    let previouslines = array.unshift(arandom);
}
console.log(array);
newone.addEventListener('click', reloadOnce);
console.log(array);

function previousLine() {
    if (array.length == 0) {
        ranlines.innerHTML = 'You Have To Genarate Atleast Two Lines';
    }else if (array.length == 1) {
        ranlines.innerHTML = array[0];
    } else {
        ranlines.innerHTML = array[1];
    }
}
previous.addEventListener('click', previousLine);

const images = ['img-1','img-2','img-3','img-4','img-5','img-6','img-7','img-8','img-9','img-10',
];

