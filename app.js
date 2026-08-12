// ----- Variables ----- //
let time = 20
let currentTime = time
let levelIndex = 0
let level = 0
let active = false
// ----- 

const questions = [
    {
        words: ["كتاب", "مكتبة", "كاتب"],
        Root: "كتب",
    },
    {
        words: ["مدرسة", "تدريس", "مدرس"],
        Root: "درس",
    },
    {
        words: ["عالم", "معلم", "تعليم"],
        Root: "علم",
    },
    {
        words: ["عامل", "معمل", "استعمال"],
        Root: "عمل"
    },
    {
        words: ["ملعب", "لاعب", "لعبة"],
        Root: "لعب"
    },
    {
        words: ["سماع", "مسموع", "مستمع"],
        Root: "سمع"
    },
    {
        words: ["مشروب", "شراب", "شارب"],
        Root: "شرب"
    },
    {
        words: ["مكسور", "كسارة", "انكسار"],
        Root: "كسر"
    },
    {
        words: ["مفتاح", "افتتاح", "فاتحة"],
        Root: "فتح"
    },
    {
        words: ["مجلس", "جالس", "جلسة"],
        Root: "جلس"
    },
    {
        words: ["ضاحك", "مضحك", "ضحكة"],
        Root: "ضحك"
    },
    {
        words: ["مطبخ", "طباخ", "طبخة"],
        Root: "طبخ"
    },
    {
        words: ["خباز", "مخبز", "خبزة"],
        Root: "خبز"
    },
]
// --- cache --- //
const StartButtonElement = document.querySelector('#start-button')
const timerElement = document.querySelector('#timer')
const questionWordsElement = document.querySelector('#questionWords')
const playerInputElement = document.querySelector('#playerInput')


function randomize() {
    questions.sort(() => Math.random() - .5)
}

// --- functions --- //
function currentTimeFunc() {
    currentTime = currentTime - 1
    console.log(currentTime)
    timerElement.textContent = currentTime
    if (currentTime <= 0) {
        clearInterval(timeInterval);
        console.log("Time is up !")
        resetLevel()
        return
    }
}

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function startFunc() {
    console.log("starting the game..")
    if (!active) {
        currentTime = time
        timeInterval = setInterval(currentTimeFunc, 1000);
        leveling()
        active = true
    }
}
function leveling() {
    console.log("LEVEL " + level)
    //let RandomNum = getRandomNum(0, questions.length); (old way, not used now)
    randomize()
    if (level >= 0 && level <= 11) {
        questions.words.sort(() => Math.random() - .5)
        console.log(questions[levelIndex].words.join(" | "))
        questionWordsElement.textContent = questions[levelIndex].words.join(" | ")
    } else if (level >= 11 && level <= 21) {
        questions.words.sort(() => Math.random() - .5)
        questions[levelIndex].words.pop()
        console.log(questions[levelIndex].words.join(" | "))
        questionWordsElement.textContent = questions[levelIndex].words.join(" | ")
    } else if (level >= 21) {
        questions.words.sort(() => Math.random() - .5)
        questions[levelIndex].words.pop()
        questions[levelIndex].words.pop()
        console.log(questions[levelIndex].words[0])
        questionWordsElement.textContent = questions[levelIndex].wordOne
    }
}
function resetLevel() {
    level = 0
    currentTime = time
    active = false
    questionWordsElement.textContent = "click START to start the game"
}
function checkEnter(event) {
    if (event.code == 'Enter') {
        console.log("You just pressed Enter")
        console.log(playerInputElement.value)
        console.log(questions[levelIndex].Root)
        if (playerInputElement.value === questions[levelIndex].Root) {

            console.log("Your Answer is True")
            currentTime += 5
            level = level + 1
            leveling()
        }
        else {
            console.log("Your Answer is Wrong")
        }
        playerInputElement.value = ''
    }
}
// --- event listener --- //
StartButtonElement.addEventListener('click', startFunc)

// document.addEventListener('keydown', (event) => {
//     console.log(event)
// })
document.addEventListener('keydown', checkEnter)


// how to make showing less than 3 words also randomized
// when user press start, he can't press it again, also add an exit button, so when the user press exit it exit the main menu
// when I press enter, I want the input to be empty again, so i don't have to delete my previous answer.
// I don't want the same question to repeat again.
// add a level indicator as p in html to display text content.


