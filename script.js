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
            description: 'Un fauteuil en bois flexible et confortable.',
            type: 'ikea'
        }
    ];

    // ÉLÉMENTS DU DOM
        // ÉLÉMENTS DU DOM
    const startScreen = document.getElementById('start-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const resultsScreen = document.getElementById('results-screen');
    const startButton = document.getElementById('start-button');
    const restartButton = document.getElementById('restart-button');
    const progressBarFill = document.getElementById('progress-bar-fill'); // MODIFIÉ : On cible le remplissage
    const wordDisplay = document.getElementById('word-display');
    const answerButtons = document.getElementById('answer-buttons');
    const feedback = document.getElementById('feedback');
    const nextQuestionButton = document.getElementById('next-question-button');
    const finalScore = document.getElementById('final-score');
    const totalTime = document.getElementById('total-time');
    const bestStreakDisplay = document.createElement('p');
    resultsScreen.insertBefore(bestStreakDisplay, restartButton);
    const timerDisplay = document.createElement('div');
    timerDisplay.id = 'timer';
    quizScreen.insertBefore(timerDisplay, answerButtons);

    // VARIABLES DU JEU
    let currentQuestionIndex = 0;
    let score = 0;
    let startTime;
    let questions = [];
    const QUESTION_TIME = 15;
    let questionTimer;
    let timeLeft = QUESTION_TIME;
    let currentStreak = 0;
    let bestStreak = 0;

    // FONCTIONS DU JEU

    function triggerConfetti() {
        // CORRECTION : Ce code utilise `confetti()` directement, qui vient de la bibliothèque que vous avez dans votre HTML.
var end = Date.now() + (15 * 1000);

// go Buckeyes!
var colors = ['#FBD913', '#FF00C5'];

(function frame() {
  confetti({
    particleCount: 2,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
    colors: colors
  });
  confetti({
    particleCount: 2,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
    colors: colors
  });

  if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
}());
    }

     function setupQuestions() {
        questions = [...gameData].sort(() => 0.5 - Math.random()).slice(0, 15);
    }

    function startGame() {
        setupQuestions();
        currentQuestionIndex = 0;
        score = 0;
        currentStreak = 0;
        bestStreak = 0;
        startTime = new Date();
        
        // MODIFIÉ : Réinitialiser la barre de progression
        progressBarFill.style.width = '0%';
        progressBarFill.classList.remove('correct', 'incorrect');

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
        if (timeLeft <= 0) {
            checkAnswer(null);
        }
    }

function checkAnswer(selectedChoice) {
    clearInterval(questionTimer);
    quizScreen.classList.add('feedback-mode');
    const question = questions[currentQuestionIndex];
    const isCorrect = selectedChoice !== null && selectedChoice === question.type;

    const newWidth = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBarFill.style.width = `${newWidth}%`;
    progressBarFill.classList.remove('correct', 'incorrect');
    progressBarFill.classList.add(isCorrect ? 'correct' : 'incorrect');

    answerButtons.style.display = 'none';
    
    let feedbackHTML = '';
    if (isCorrect) {
        score++;
        currentStreak++;
        feedbackHTML += `<p class="correct">Correct !</p>`;
    } else {
        if (currentStreak > bestStreak) { bestStreak = currentStreak; }
        currentStreak = 0;
        feedbackHTML += `<p class="incorrect">${selectedChoice === null ? 'Time elapsed !' : 'False !'}</p>`;
    }
    if (currentStreak > 1) { feedbackHTML += `<p>🔥Streak of ${currentStreak} correct answers🔥</p>`; }

    // La ligne qui générait la phrase de confirmation a été supprimée d'ici.
    
    // On ajoute directement l'image et la description
    feedbackHTML += `<img src="${question.image}" alt="${question.word}"><p>${question.description}</p>`;
    
    const feedbackContent = document.createElement('div');
    feedbackContent.className = 'feedback-content';
    feedbackContent.innerHTML = feedbackHTML;
    feedback.prepend(feedbackContent);

    nextQuestionButton.style.display = 'block';
}

    function showResults() {
        const endTime = new Date();
        const timeTaken = Math.round((endTime - startTime) / 1000);
        if (currentStreak > bestStreak) { bestStreak = currentStreak; }
        quizScreen.classList.remove('active');
        resultsScreen.classList.add('active');
        finalScore.textContent = score;
        totalTime.textContent = timeTaken;
        bestStreakDisplay.innerHTML = `Meilleure série de bonnes réponses : <strong>${bestStreak}</strong>`;
        triggerConfetti();
    }

    // ÉCOUTEURS D'ÉVÉNEMENTS
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
});