// ----- Variables ----- //
let time = 15
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
    {
        words: ["مزرعة", "زراعة", "مزروع"],
        Root: "زرع"
    },
    {
        words: ["تنظيف", "نظافة", "منظف"],
        Root: "نظف"
    },
    {
        words: ["منظر", "نظارة", "منظار"],
        Root: "نظر"
    },
    {
        words: ["مسكن", "سكان", "إسكان"],
        Root: "سكن"
    },
    {
        words: ["طالب", "مطلوب", "مطالبة"],
        Root: "طلب"
    },
    {
        words: ["مجموعة", "جامعة", "اجتماع"],
        Root: "جمع"
    },
    {
        words: ["تفريق", "فرقة", "افتراق"],
        Root: "فرق"
    },
    {
        words: ["خروج", "مخرج", "إخراج"],
        Root: "خرج"
    },
    {
        words: ["دخول", "مدخل", "تدخل"],
        Root: "دخل"
    },
    {
        words: ["مصنع", "صناعة", "صانع"],
        Root: "صنع"
    },
    {
        words: ["محفظة", "حافظ", "محافظة"],
        Root: "حفظ"
    },
    {
        words: ["شاكر", "مشكور", "شكران"],
        Root: "شكر"
    },
    {
        words: ["رحمة", "رحيم", "مرحوم"],
        Root: "رحم"
    },
    {
        words: ["غفران", "مغفرة", "استغفار"],
        Root: "غفر"
    },
    {
        words: ["عبادة", "معبد", "عابد"],
        Root: "عبد"
    },
    {
        words: ["سجود", "مسجد", "ساجد"],
        Root: "سجد"
    },
    {
        words: ["مشغول", "انشغال", "أشغال"],
        Root: "شغل"
    },
    {
        words: ["سؤال", "مسؤول", "تساؤل"],
        Root: "سأل"
    },
    {
        words: ["قراءة", "قارئ", "مقروء"],
        Root: "قرأ"
    },
    {
        words: ["بداية", "مبتدئ", "ابتداء"],
        Root: "بدأ"
    },
    {
        words: ["هدوء", "تهدئة", "هادئ"],
        Root: "هدأ"
    },
    {
        words: ["نشأة", "إنشاء", "ناشئ"],
        Root: "نشأ"
    },
    {
        words: ["أمان", "مؤمن", "إيمان"],
        Root: "أمن"
    },
    {
        words: ["أمير", "إمارة", "مؤتمر"],
        Root: "أمر"
    },
    {
        words: ["مؤذن", "أذان", "استئذان"],
        Root: "أذن"
    },
    {
        words: ["مأكل", "أكلة", "مأكولات"],
        Root: "أكل"
    },
    {
        words: ["تأسيس", "مؤسسة", "أساس"],
        Root: "أسس"
    },
    {
        words: ["تأثير", "مؤثر", "آثار"],
        Root: "أثر"
    },
    {
        words: ["أديب", "تأديب", "آداب"],
        Root: "أدب"
    },
    {
        words: ["آمال", "مأمول", "تأمل"],
        Root: "أمل"
    },
    {
        words: ["أليم", "مؤلم", "آلام"],
        Root: "ألم"
    },
    {
        words: ["تأخير", "متأخر", "آخرة"],
        Root: "أخر"
    },
    {
        words: ["رئيس", "رئاسة", "مرؤوس"],
        Root: "رأس"
    },
    {
        words: ["جزء", "تجزئة", "أجزاء"],
        Root: "جزأ"
    },
    {
        words: ["امتلاء", "مملوء", "ممتلئ"],
        Root: "ملأ"
    },
    {
        words: ["براءة", "بريء", "تبرئة"],
        Root: "برأ"
    },
    {
        words: ["دفء", "تدفئة", "دافئ"],
        Root: "دفأ"
    },
    {
        words: ["لاجئ", "ملجأ", "التجاء"],
        Root: "لجأ"
    },
    {
        words: ["مفاجأة", "فجأة", "مفاجئ"],
        Root: "فجأ"
    },
    {
        words: ["تهنئة", "هنيء", "تهاني"],
        Root: "هنأ"
    },
    {
        words: ["موعد", "ميعاد", "وعيد"],
        Root: "وعد"
    },
    {
        words: ["مواصلات", "وصلة", "اتصال"],
        Root: "وصل"
    },
    {
        words: ["موقف", "توقف", "موقوف"],
        Root: "وقف"
    },
    {
        words: ["ميلاد", "مولود", "ولادة"],
        Root: "ولد"
    },
    {
        words: ["ميزان", "موازنة", "وزنة"],
        Root: "وزن"
    },
    {
        words: ["وجود", "موجود", "إيجاد"],
        Root: "وجد"
    },
    {
        words: ["واجهة", "مواجهة", "اتجاه"],
        Root: "وجه"
    },
    {
        words: ["مقولة", "أقوال", "قائل"],
        Root: "قول"
    },
    {
        words: ["بائع", "مبيع", "مبايعة"],
        Root: "بيع"
    },
    {
        words: ["منام", "نائم", "تنويم"],
        Root: "نوم"
    },
    {
        words: ["صيام", "صائم", "يصوم"],
        Root: "صوم"
    },
    {
        words: ["مقام", "إقامة", "استقامة"],
        Root: "قوم"
    },
    {
        words: ["زيارة", "زائر", "مزار"],
        Root: "زور"
    },
    {
        words: ["مسيرة", "سيارة", "مسير"],
        Root: "سير"
    },
    {
        words: ["طيران", "طائر", "مطار"],
        Root: "طير"
    },
    {
        words: ["معيشة", "عيشة", "معاش"],
        Root: "عيش"
    },
    {
        words: ["خائف", "مخيف", "تخويف"],
        Root: "خوف"
    },
    {
        words: ["دعاء", "داعية", "دعوة"],
        Root: "دعو"
    },
    {
        words: ["رماية", "مرمى", "رامي"],
        Root: "رمي"
    },
    {
        words: ["ماشي", "ممشى", "مشية"],
        Root: "مشي"
    },
    {
        words: ["ساعي", "مسعى", "مساعي"],
        Root: "سعي"
    },
    {
        words: ["بناء", "بناية", "مبنى"],
        Root: "بني"
    },
    {
        words: ["جريان", "مجرى", "إجراء"],
        Root: "جري"
    },
    {
        words: ["قضاء", "قاضي", "قضية"],
        Root: "قضي"
    },
    {
        words: ["لقاء", "ملتقى", "تلاقي"],
        Root: "لقي"
    },
    {
        words: ["نسيان", "منسي", "ناسي"],
        Root: "نسي"
    },
    {
        words: ["حكاية", "حاكي", "محكي"],
        Root: "حكي"
    },
    {
        words: ["محبة", "حبيب", "أحباب"],
        Root: "حبب"
    },
    {
        words: ["امتداد", "مدة", "ممدود"],
        Root: "مدد"
    },
    {
        words: ["مردود", "ترديد", "ارتداد"],
        Root: "ردد"
    },
    {
        words: ["شديد", "تشديد", "اشتاد"],
        Root: "شدد"
    },
    {
        words: ["حاج", "حجة", "محجة"],
        Root: "حجج"
    },
    {
        words: ["سرور", "مسرة", "سريرة"],
        Root: "سرر"
    },
    {
        words: ["حلال", "محل", "تحليل"],
        Root: "حلل"
    },
    {
        words: ["مرور", "ممر", "استمرار"],
        Root: "مرر"
    },
    {
        words: ["صحة", "تصحيح", "صحيح"],
        Root: "صحح"
    },
    {
        words: ["خاص", "تخصص", "اختصاص"],
        Root: "خصص"
    },
    {
        words: ["حريق", "محرقة", "إحراق"],
        Root: "حرق"
    },
    {
        words: ["مطبعة", "طباعة", "انطباع"],
        Root: "طبع"
    },
    {
        words: ["رسام", "مرسم", "رسومات"],
        Root: "رسم"
    },
    {
        words: ["سباحة", "مسبح", "سابح"],
        Root: "سبح"
    },
    {
        words: ["مركبة", "راكب", "تركيب"],
        Root: "ركب"
    },
    {
        words: ["مسافر", "سفارة", "أسفار"],
        Root: "سفر"
    },
    {
        words: ["ناقلة", "انتقال", "منقول"],
        Root: "نقل"
    },
    {
        words: ["حمال", "محمول", "حملة"],
        Root: "حمل"
    },
    {
        words: ["مرتفع", "ارتفاع", "رافعة"],
        Root: "رفع"
    },
    {
        words: ["منزل", "نزول", "تنزيل"],
        Root: "نزل"
    }
]
// --- cache --- //
const StartButtonElement = document.querySelector('#start-button')
const ExitButtonElement = document.querySelector('#exit-button')
const levelIndicatorElement = document.querySelector('#levelIndicator')
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
        randomize()
        leveling()
        active = true
    }
}
function leveling() {
    console.log("LEVEL " + level)
    levelIndicatorElement.textContent = "LEVEL " + level
    //let RandomNum = getRandomNum(0, questions.length); (old way, not used now)
    console.log("level index" + levelIndex)
    if (level >= 0 && level <= 11) {
        questions[levelIndex].words.sort(() => Math.random() - .5)
        console.log(questions[levelIndex].words.join(" | "))
        questionWordsElement.textContent = questions[levelIndex].words.join(" | ")
    } else if (level >= 11 && level <= 21) {
        questions[levelIndex].words.sort(() => Math.random() - .5)
        console.log(questions[levelIndex].words[0] + " | " + questions[levelIndex].words[1])
        questionWordsElement.textContent = questions[levelIndex].words[0] + " | " + questions[levelIndex].words[1]
    } else if (level >= 21 && level <= 100) {
        questions[levelIndex].words.sort(() => Math.random() - .5)
        console.log(questions[levelIndex].words[0])
        questionWordsElement.textContent = questions[levelIndex].words[0]
    }
        else if (level >=100){
        console.log("You Won !")
        questionWordsElement.textContent = "You Won !"    
        
    }
}
function resetLevel() {
    clearInterval(timeInterval);
    timerElement.textContent = "10"
    level = 0
    levelIndex = 0
    currentTime = time
    active = false
    questionWordsElement.textContent = "click START to start the game"
}
function checkEnter(event) {
    if (event.code == 'Enter') {
        console.log("You just pressed Enter")
        console.log(playerInputElement.value)
        console.log(questions[levelIndex].Root)
        if (playerInputElement.value === questions[levelIndex].Root && active == true) {

            console.log("Your Answer is True")
        
            level = level + 1
            levelIndex++
            if (level >= 0 && level <= 31) {
            currentTime += 3
            }
            else if(level >= 31 && level <= 80) {
            currentTime += 2
            }
            else if(level >= 80) {
            currentTime += 2
            }
            leveling()
        }
        else if (playerInputElement.value != questions[levelIndex].Root && active == true) {
            console.log("Your Answer is Wrong")
        }
        else {
            console.log("You can't answer before starting the game")
        }
        playerInputElement.value = ''
    }
}
// --- event listener --- //
StartButtonElement.addEventListener('click', startFunc)
ExitButtonElement.addEventListener('click', resetLevel)

// document.addEventListener('keydown', (event) => {
//     console.log(event)
// })
document.addEventListener('keydown', checkEnter)


// how to make showing less than 3 words also randomized. done
// add a level indicator as p in html to display text content. done
// when I press enter, I want the input to be empty again, so i don't have to delete my previous answer. done
// when user press start, he can't press it again, done
// also add an exit button, so when the user press exit it exit the main menu. done
// I don't want the same question to repeat again. done


// add more questions. done


