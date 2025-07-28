document.addEventListener('DOMContentLoaded', () => {

    // SECTION DES DONNÉES DU JEU
 const gameData = [
        {
            word: 'Billy',
            image: 'images/ikea/billy.jpeg',
            description: 'BILLY bookcase is a beloved icon that never goes out of style. Thanks to its versatility you can use it in many different ways at home – regardless of whether you store books or everyday items in it.',
            type: 'ikea'
        },
        {
            word: 'Päron',
            image: 'images/word/paron.png',
            description: 'Pear are fruits produced and consumed around the world, growing on a tree and are harvested in late summer into mid-autumn.',
            type: 'swedish'
        },
        {
            word: 'Kallax',
            image: 'images/ikea/kallax.jpeg',
            description: 'Standing or lying – the KALLAX series adapts to taste, space and budget. Personalize the shelving unit with inserts and boxes to make it suit your needs.',
            type: 'ikea'
        },
        {
            word: 'Uppvärmning',
            image: 'images/word/uppvarmning.jpeg',
            description: 'A heating system is a mechanism designed to maintain a desired temperature in a space by adding thermal energy.',
            type: 'swedish'
        },
        {
            word: 'Småhagel',
            image: 'images/ikea/smahagel.jpeg',
            description: 'Charge up to 3 devices at the same time with this USB charger and spend less time looking for available chargers. This SMÅHAGEL supports your electrical needs and gives you power where you need it.',
            type: 'ikea'
        },
        {
            word: 'Anka',
            image: 'images/word/anka.jpeg',
            description: 'Duck is the common name for numerous species of waterfowl in the family Anatidae. Ducks are generally smaller and shorter-necked than swans and geese, which are members of the same family. ',
            type: 'swedish'
        },
        {
            word: 'Poäng',
            image: 'images/ikea/poaeng.jpeg',
            description: 'POÄNG armchair has stylish curved lines in bentwood, providing nice support for the neck and comfy resilience. It’s been in our range for several decades and is still just as popular. Want to try it too?',
            type: 'ikea'
        },

        {
            word: 'Boka',
            image: 'images/word/boka.jpg',
            description: 'A book is a structured presentation of recorded information, primarily verbal and graphical, through a medium. Originally physical, electronic books and audiobooks are now existent.',
            type: 'swedish'
        },
        {
            word: 'Virklund',
            image: 'images/ikea/virklund.jpeg',
            description: 'A versatile rug with classic stripes that goes just about anywhere - indoors or outdoors. If you want a new look after a while, just flip it over and use the compatible pattern on the reverse side.',
            type: 'ikea'
        },
        {
            word: 'SD-kort',
            image: 'images/word/sd-kort.png',
            description: 'The SD card is a proprietary, non-volatile, flash memory card format developed by the SD Association (SDA). They come in three physical forms: the full-size SD, the smaller miniSD (now obsolete), and the smallest, microSD.',
            type: 'swedish'
        },
       {
            word: 'Rådmansö',
            image: 'images/ikea/radmansoe.jpeg',
            description: 'The RÅDMANSÖ series is inspired by mid-century design with sleek lines, great functionality and a warm walnut tone. This wardrobe has space for both hanging and folded clothes – and a smart sliding door too.',
            type: 'ikea'
        },
        {
            word: 'kanin',
            image: 'images/word/kanin.jpg',
            description: 'Rabbits or bunnies are small mammals in the family Leporidae (which also includes the hares), which is in the order Lagomorpha (which also includes pikas).',
            type: 'swedish'
        },
       {
            word: 'Tonstad',
            image: 'images/ikea/tonstad.jpeg',
            description: 'Classic design meets a graceful finish in the TONSTAD series in off-white, giving the furniture a solid sense of quality. This bed frame has a modern style with a timeless look – easy to love for years.',
            type: 'ikea'
        },
        {
            word: 'Bil',
            image: 'images/word/bil.jpg',
            description: 'A car, or an automobile, is a motor vehicle with wheels. Most definitions of cars state that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people rather than cargo.',
            type: 'swedish'
        },
       {
            word: 'Blåhaj',
            image: 'images/ikea/blahaj.jpeg',
            description: 'Big and safe to have by your side if you want to discover the world below the surface of the ocean. The blue shark can swim very far, dive really deep and hear noises from almost 250 meters away. 🏳️‍⚧️',
            type: 'ikea'
        },
        




































































































        
        

            
    ];
    // DOM
    const startScreen = document.getElementById('start-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const resultsScreen = document.getElementById('results-screen');
    const startButton = document.getElementById('start-button');
    const restartButton = document.getElementById('restart-button');
    const shareButton = document.getElementById('share-button');
    const progressBarFill = document.getElementById('progress-bar-fill');
    const wordDisplay = document.getElementById('word-display');
    const answerButtons = document.getElementById('answer-buttons');
    const feedback = document.getElementById('feedback');
    const nextQuestionButton = document.getElementById('next-question-button');
    const timerDisplay = document.createElement('div');
    timerDisplay.id = 'timer';
    quizScreen.insertBefore(timerDisplay, answerButtons);

    // VAR
    let currentQuestionIndex = 0;
    let score = 0;
    let startTime;
    let questions = [];
    const QUESTION_TIME = 15;
    let questionTimer;
    let timeLeft = QUESTION_TIME;
    let currentStreak = 0;
    let bestStreak = 0;
    let timeTaken = 0;

    // FUN
    function triggerConfetti() {
        var end = Date.now() + (3 * 1000);
        var colors = ['#FBD913', '#0158A3'];
        (function frame() {
            confetti({ particleCount: 2, angle: 60, spread: 55, origin: { x: 0 }, colors: colors });
            confetti({ particleCount: 2, angle: 120, spread: 55, origin: { x: 1 }, colors: colors });
            if (Date.now() < end) { requestAnimationFrame(frame); }
        }());
    }

    function setupQuestions() {
        const questionCount = Math.min(10, gameData.length);
        questions = [...gameData].sort(() => 0.5 - Math.random()).slice(0, questionCount);
    }

    function startGame() {
        setupQuestions();
        currentQuestionIndex = 0;
        score = 0;
        currentStreak = 0;
        bestStreak = 0;
        startTime = new Date();
        // CORRECTION : On réinitialise la largeur de la barre
        progressBarFill.style.width = '0%';
        progressBarFill.style.backgroundColor = '#00ff08'; // Couleur par défaut
        startScreen.classList.remove('active');
        resultsScreen.classList.remove('active');
        quizScreen.classList.add('active');
        showQuestion();
    }

    function showQuestion() {
        clearInterval(questionTimer);
        const feedbackContent = feedback.querySelector('.feedback-content');
        if (feedbackContent) feedbackContent.remove();
        nextQuestionButton.style.display = 'none';
        answerButtons.style.display = 'block';
        quizScreen.classList.remove('feedback-mode');
        if (currentQuestionIndex < questions.length) {
            const question = questions[currentQuestionIndex];
            wordDisplay.textContent = question.word;
            timeLeft = QUESTION_TIME;
            timerDisplay.textContent = timeLeft;
            questionTimer = setInterval(updateTimer, 1000);
        } else {
            showResults();
        }
    }

    function updateTimer() {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
        if (timeLeft <= 0) { checkAnswer(null); }
    }

    function checkAnswer(selectedChoice) {
        clearInterval(questionTimer);
        quizScreen.classList.add('feedback-mode');
        const question = questions[currentQuestionIndex];
        const isCorrect = selectedChoice !== null && selectedChoice === question.type;
        const newWidth = ((currentQuestionIndex + 1) / questions.length) * 100;
        progressBarFill.style.width = `${newWidth}%`;
        
        if (!isCorrect) {
            progressBarFill.style.backgroundColor = '#F44336'; 
        } else {
            progressBarFill.style.backgroundColor = '#00ff08'; 
        }

        answerButtons.style.display = 'none';
        let feedbackHTML = `<img src="${question.image}" alt="${question.word}"><p>${question.description}</p>`;
        if (isCorrect) {
            score++;
            currentStreak++;
            let correctMessage = `<p class="correct">Correct!`;
            if (currentStreak > 1) { correctMessage += ` <span class="streak">🔥x${currentStreak}</span>`; }
            correctMessage += `</p>`;
            feedbackHTML += correctMessage;
        } else {
            if (currentStreak > bestStreak) { bestStreak = currentStreak; }
            currentStreak = 0;
            feedbackHTML += `<p class="incorrect">${selectedChoice === null ? 'Time out!' : 'Wrong!'}</p>`;
        }
        const feedbackContent = document.createElement('div');
        feedbackContent.className = 'feedback-content';
        feedbackContent.innerHTML = feedbackHTML;
        feedback.prepend(feedbackContent);
        nextQuestionButton.style.display = 'block';
    }

    function showResults() {
        const endTime = new Date();
        timeTaken = Math.round((endTime - startTime) / 1000);
        if (currentStreak > bestStreak) { bestStreak = currentStreak; }
        document.getElementById('final-score').textContent = `${score}/${questions.length}`;
        document.getElementById('final-time').textContent = `${timeTaken}s`;
        document.getElementById('final-streak').textContent = `🔥x${bestStreak}`;
        quizScreen.classList.remove('active');
        resultsScreen.classList.add('active');
        triggerConfetti();
    }

    function generateShareCard() {
        const cardTemplate = document.getElementById('share-card-template');
        document.getElementById('share-score').textContent = `${score}/${questions.length}`;
        document.getElementById('share-time').textContent = `${timeTaken}s`;
        document.getElementById('share-streak').textContent = `🔥x${bestStreak}`;
        shareButton.textContent = 'Generating...';
        shareButton.disabled = true;
        cardTemplate.style.display = 'block';
        htmlToImage.toPng(cardTemplate.firstElementChild, { 
            quality: 1.0, 
            pixelRatio: 2,
            fontEmbedCSS: "@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap' );"
        })
        .then(function (dataUrl) {
            const link = document.createElement('a');
            link.download = 'ikea-or-swedish-results.png';
            link.href = dataUrl;
            link.click();
        })
        .catch(function (error) {
            console.error('Oops, something went wrong!', error);
            shareButton.textContent = 'Error! Try again';
        })
        .finally(function () {
            cardTemplate.style.display = 'none';
            if (!shareButton.textContent.includes('Error')) {
                shareButton.textContent = 'Share Results';
            }
            shareButton.disabled = false;
        });
    }

    // LISTENERS
    startButton.addEventListener('click', startGame);
    restartButton.addEventListener('click', startGame);
    nextQuestionButton.addEventListener('click', () => {
        currentQuestionIndex++;
        showQuestion();
    });
    answerButtons.addEventListener('click', (e) => {
        if (e.target.classList.contains('choice-btn')) {
            checkAnswer(e.target.dataset.choice);
        }
    });
    shareButton.addEventListener('click', generateShareCard);
});