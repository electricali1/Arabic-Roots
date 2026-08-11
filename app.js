// ----- Variables ----- //
let time = 20
let currentTime = time
// ----- 

const questions = [
    {
        wordOne: "كتاب",
        wordTwo: "مكتبة",
        wordThree: "كاتب",
        Root: "كتب",
    },
    {
        wordOne: "مدرسة",
        wordTwo: "تدريس",
        wordThree: "مدرس",
        Root: "درس",
    },
    {
        wordOne: "عالم",
        wordTwo: "معلم",
        wordThree: "تعليم ",
        Root: "علم",
    },
    {
        wordOne: "عامل",
        wordTwo: "معمل",
        wordThree: "استعمال",
        Root: "عمل"
    },
    {
        wordOne: "ملعب",
        wordTwo: "لاعب",
        wordThree: "لعبة",
        Root: "لعب"
    },
    {
        wordOne: "سماع",
        wordTwo: "مسموع",
        wordThree: "مستمع",
        Root: "سمع"
    },
    {
        wordOne: "مشروب",
        wordTwo: "شراب",
        wordThree: "شارب",
        Root: "شرب"
    },
    {
        wordOne: "مكسور",
        wordTwo: "كسارة",
        wordThree: "انكسار",
        Root: "كسر"
    },
    {
        wordOne: "مفتاح",
        wordTwo: "افتتاح",
        wordThree: "فاتحة",
        Root: "فتح"
    },
    {
        wordOne: "مجلس",
        wordTwo: "جالس",
        wordThree: "جلسة",
        Root: "جلس"
    },
    {
        wordOne: "ضاحك",
        wordTwo: "مضحك",
        wordThree: "ضحكة",
        Root: "ضحك"
    },
    {
        wordOne: "مطبخ",
        wordTwo: "طباخ",
        wordThree: "طبخة",
        Root: "طبخ"
    },
    {
        wordOne: "خباز",
        wordTwo: "مخبز",
        wordThree: "خبزة",
        Root: "خبز"
    },
]
// --- cache --- //
const StartButtonElement = document.querySelector('#start-button')
const timerElement = document.querySelector('#timer')
const questionWordsElement = document.querySelector('#questionWords')
const playerInputElement = document.querySelector('#playerInput')

// --- functions --- //
function currentTimeFunc() {
    currentTime = currentTime - 1
    console.log(currentTime)
    timerElement.textContent = currentTime
    if (currentTime <= 0) {
        clearInterval(timeInterval);
        console.log("Time is up !")
        return
    }
}

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function startFunc() {
    console.log("starting the game..")
    timeInterval = setInterval(currentTimeFunc, 1000);
    let RandomNum = getRandomNum(0, questions.length);
    console.log(questions[RandomNum].wordOne + " | " + questions[RandomNum].wordTwo + " | " + questions[RandomNum].wordThree)
    questionWordsElement.textContent = questions[RandomNum].wordOne + " | " + questions[RandomNum].wordTwo + " | " + questions[RandomNum].wordThree
}

// --- event listener --- //
StartButtonElement.addEventListener('click', startFunc)

