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
            word: 'Bok',
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
        {
            word: 'Fjäril',
            image: 'images/word/fjaril.jpg',
            description: 'Butterflies are winged insects from the lepidopteran superfamily Papilionoidea, characterized by large, often brightly coloured wings that often fold together when at rest, and a conspicuous, fluttering flight.',
            type: 'swedish'
        },
        {
            word: 'gryning',
            image: 'images/word/gryning.jpg',
            description: 'Dawn is the time that marks the beginning of twilight before sunrise. It is recognized by the appearance of indirect sunlight being scattered in Earth\'s atmosphere, when the centre of the Sun\'s disc has reached 18° below the observer\'s horizon.',
            type: 'swedish'
        },
        {
            word: 'Smörgås',
            image: 'images/word/smorgas.jpg',
            description: 'A sandwich is a dish typically consisting variously of meat, cheese, sauces, and vegetables used as a filling between slices of bread, or placed atop a slice of bread; or, more generally, any dish in which bread serves as a container or wrapper for another food type.',
            type: 'swedish'
        },
        {
            word: 'Ljus',
            image: 'images/word/ljus.jpg',
            description: 'Light, visible light, or visible radiation is electromagnetic radiation that can be perceived by the human eye.',
            type: 'swedish'
        },
        {
            word: 'Skugga',
            image: 'images/word/skugga.jpg',
            description: 'A shadow is a dark area on a surface where light from a light source is blocked by an object. In contrast, shade occupies the three-dimensional volume behind an object with light in front of it.',
            type: 'swedish'
        },
        {
            word: 'Dröm',
            image: 'images/word/drom.jpg',
            description: 'A dream is a succession of images, ideas, emotions, and sensations that usually occur involuntarily in the mind during certain stages of sleep.',
            type: 'swedish'
        },
        {
            word: 'Vinter',
            image: 'images/word/vinter.jpg',
            description: 'Winter is the coldest and darkest season of the year in temperate and polar climates. It occurs after autumn and before spring. The tilt of Earth\'s axis causes seasons; winter occurs when a hemisphere is oriented away from the Sun.',
            type: 'swedish'
        },
        {
            word: 'Skog',
            image: 'images/word/skog.jpg',
            description: 'A forest is an ecosystem characterized by a dense community of trees.',
            type: 'swedish'
        },
        {
            word: 'Snöre',
            image: 'images/word/snore.jpeg',
            description: 'Lace is a delicate fabric made of yarn or thread in an open weblike pattern, made by machine or by hand. Generally, lace is split into two main categories, needlelace and bobbin lace.',
            type: 'swedish'
        },
        {
            word: 'Morgon',
            image: 'images/word/morgon.jpg',
            description: 'Morning is either the period from sunrise to noon, or the period from midnight to noon. In the first definition it is preceded by the twilight period of dawn, and there are no exact times for when morning begins.',
            type: 'swedish'
        },
        {
            word: 'Kudde',
            image: 'images/word/kudde.jpg',
            description: 'A pillow is a support of the body at rest for comfort, therapy, or decoration. Pillows are used in different variations by many species, including humans. Some types of pillows include throw pillows, body pillows, decorative pillows, and many more.',
            type: 'swedish'
        },
        {
            word: 'Fönster',
            image: 'images/word/fonster.jpg',
            description: 'A window is an opening in a wall, door, roof, or vehicle that allows the exchange of light and may also allow the passage of sound and sometimes air.',
            type: 'swedish'
        },
        {
            word: 'Regn',
            image: 'images/word/regn.jpg',
            description: 'Rain is a form of precipitation where water droplets that have condensed from atmospheric water vapor fall under gravity. Rain is a major component of the water cycle and is responsible for depositing most of the fresh water on the Earth.',
            type: 'swedish'
        },
        {
            word: 'Hjärta',
            image: 'images/word/hjarta.png',
            description: 'The heart is a muscular organ found in humans and other animals. This organ pumps blood through the blood vessels. The heart and blood vessels together make the circulatory system.',
            type: 'swedish'
        },
        {
            word: 'Sorg',
            image: 'images/word/Sorrow.webp',
            description: 'Sorrow is an emotion, feeling, or sentiment. Sorrow is more "intense" than sadness, implies a long-term state and suggests — unlike unhappiness — a degree of resignation.',
            type: 'swedish'
        },
        {
            word: 'Nyckel',
            image: 'images/word/nyckel.jpg',
            description: 'KEY /// A lock is a mechanical or electronic fastening device that is released by a physical object (such as a key, keycard, fingerprint, RFID card, security token or coin), by supplying secret information (such as a number or letter permutation or password), by a combination thereof, or it may only be able to be opened from one side, such as a door chain.',
            type: 'swedish'
        },
        {
            word: 'Väg',
            image: 'images/word/vag.jpg',
            description: 'A trail, also known as a path or track, is an unpaved lane or a small paved road (though it can also be a route along a navigable waterways) generally not intended for usage by motorized vehicles, usually passing through a natural area.',
            type: 'swedish'
        },
        {
            word: 'Dimma',
            image: 'images/word/dimma.jpg',
            description: 'Fog is a visible aerosol consisting of tiny water droplets or ice crystals suspended in the air at or near the Earth\'s surface. Fog can be considered a type of low-lying cloud usually resembling stratus and is heavily influenced by nearby bodies of water, topography, and wind conditions.',
            type: 'swedish'
        },
        {
            word: 'Blomma',
            image: 'images/word/blomma.jpeg',
            description: 'Flowers, also known as blooms and blossoms, are the reproductive structures of flowering plants. Typically, they are structured in four circular levels around the end of a stalk. These include: sepals, which are modified leaves that support the flower',
            type: 'swedish'
        },
        {
            word: 'Trappa',
            image: 'images/word/trappa.jpg',
            description: 'A stairwell or stair room is a room in a building where a stair is located, and is used to connect walkways between floors so that one can move in height.[1] Collectively, a set of stairs and a stairwell is referred to as a staircase or stairway.',
            type: 'swedish'
        },
        {
            word: 'Låda',
            image: 'images/word/lada.jpg',
            description: 'A box (plural: boxes) is a container with rigid sides used for the storage or transportation of its contents. Most boxes have flat, parallel, rectangular sides (typically rectangular prisms). Boxes can be very small (like a matchbox) or very large (like a shipping box for furniture) and can be used for a variety of purposes, from functional to decorative.',
            type: 'swedish'
        },
        {
            word: 'Doft',
            image: 'images/word/doft.jpg',
            description: 'fragrance // An aroma compound, also known as an odorant, aroma, fragrance, flavoring or flavor, is a chemical compound that has a smell or odor.',
            type: 'swedish'
        },
        {
            word: 'Natt',
            image: 'images/word/natt.jpg',
            description: 'Night, or nighttime, is the period of darkness when the Sun is below the horizon. Daylight illuminates one side of the Earth, leaving the other in darkness. The opposite of nighttime is daytime.',
            type: 'swedish'
        },
        {
            word: 'Sked',
            image: 'images/word/sked.jpg',
            description: 'A spoon is a utensil consisting of a shallow bowl (also known as a head), oval or round, at the end of a handle. A type of cutlery (sometimes called flatware in the United States), especially as part of a place setting, it is used primarily for transferring food to the mouth (eating)',
            type: 'swedish'
        },
        {
            word: 'Våg',
            image: 'images/word/vag2.jpg',
            description: 'In physics, mathematics, engineering, and related fields, a wave is a propagating dynamic disturbance (change from equilibrium) of one or more quantities. Periodic waves oscillate repeatedly about an equilibrium (resting) value at some frequency.',
            type: 'swedish'
        },
        {
            word: 'Tårta',
            image: 'images/word/tarta.jpeg',
            description: 'Cake is a flour confection usually made from flour, sugar, and other ingredients and is usually baked. In their oldest forms, cakes were modifications of bread, but cakes now cover a wide range of preparations that can be simple or elaborate and which share features with desserts such as pastries, meringues, custards, and pies.',
            type: 'swedish'
        },
       {
            word: 'Lack',
            image: 'images/ikea/lack.jpeg',
            description: 'This sleek wall shelf gets the job done in a discreet and almost invisible way. The hidden suspension brackets make it blend into the wall – highlighting your favorite items.',
            type: 'ikea'
        },
       {
            word: 'Malm',
            image: 'images/ikea/malm.jpeg',
            description: 'A clean design that’s just as beautiful on all sides – place the bed freestanding or with the headboard against a wall. You also get spacious storage boxes that roll out smoothly on castors.',
            type: 'ikea'
        },
       {
            word: 'Hemnes',
            image: 'images/ikea/hemnes.jpeg',
            description: 'This bookcase, made of solid wood, is perfect for storing your books and will bring a warm feeling to your home. If you like the style, you can combine it with other furniture in the HEMNES series.',
            type: 'ikea'
        },
       {
            word: 'Färgrik',
            image: 'images/ikea/fargrik.jpeg',
            description: 'Whether dressing your table up or down, the simple, functional design is easy to coordinate with other shapes and colors. FÄRGRIK series is a perfect base for all types of meals and every occasion.',
            type: 'ikea'
        },
       {
            word: 'Råskog',
            image: 'images/ikea/raskog.jpeg',
            description: 'Space-wise trolley that fits in the smallest of spaces and can be moved to wherever you need extra storage for kitchen utensils, desk accessories, keys and chargers. Lockable castors ensure stability.',
            type: 'ikea'
        },
       {
            word: 'Nordli',
            image: 'images/ikea/nordli.jpeg',
            description: 'There’s plenty of space in the drawers for clothes, extra duvets and sweet dreams – and you can position the headboard’s box and shelf so your favorite book is easy to reach. A perfect combination!',
            type: 'ikea'
        },
       {
            word: 'Innerlig',
            image: 'images/ikea/innerlig.jpeg',
            description: 'Most of this 12 cm thick and 3-part mattress comprises of flexible springs protected by soft foam, and it can easily be extended as both your child and the extendable bed grow.',
            type: 'ikea'
        },
       {
            word: 'Knodd',
            image: 'images/ikea/knodd.jpeg',
            description: 'This decorative gray bin can be used for things like waste, toilet paper rolls or magazines. It has sturdy handles and a clever hook under the lid that allows you to hang it on the edge of the bin.',
            type: 'ikea'
        },
       {
            word: 'Smågöra',
            image: 'images/ikea/smagoera.jpeg',
            description: 'This timeless shelf grows up with your child from the changing table to their first den. Place it on the floor or hang it on the wall, vertically or horizontally – and fill it with diapers, toys or books.',
            type: 'ikea'
        },
       {
            word: 'Tjena',
            image: 'images/ikea/tjena.jpeg',
            description: 'This box is ideal for media- or hobby items and fits perfectly in a KALLAX shelving unit. The graphic pattern is created by Ingela Håkansson-Lamm, a designer from the group called 10 Swedish Designers.',
            type: 'ikea'
        },
       {
            word: 'Fejka',
            image: 'images/ikea/fejka.jpeg',
            description: 'FEJKA artificial potted plants don’t require a green thumb. Perfect when you have better things to do than water plants and pick up dead leaves. You’ll have everyone fooled because they look so lifelike.',
            type: 'ikea'
        },
       {
            word: 'Brimnes',
            image: 'images/ikea/brimnes.jpeg',
            description: 'A bed frame with hidden storage in several places – perfect if you live in a small space. The BRIMNES series has several smart solutions that help you save space.',
            type: 'ikea'
        },
       {
            word: 'Vittsjö',
            image: 'images/ikea/vittsjo.jpeg',
            description: 'The simple and honest design of VITTSJÖ nest tables creates an open and airy expression. You can always choose to use them individually, together or slide the lower one under the higher table.',
            type: 'ikea'
        },
       {
            word: 'Odger',
            image: 'images/ikea/odger.jpeg',
            description: 'The chair’s moulded shell gives a comfortable, flexy feel that is yours to enjoy after a simple 3-click assembly. For strength and beauty, the wood is mixed into the ivory nude plastic, looking like decorative sprinkles.',
            type: 'ikea'
        },
       {
            word: 'Skubb',
            image: 'images/ikea/skubb.jpeg',
            description: 'These small boxes bring order to your chaos helping you to sort socks, lingerie, and accessories. Use one or a few in each drawer depending on your needs. You can use them in the bathroom too.',
            type: 'ikea'
        },
       {
            word: 'Kungsfors',
            image: 'images/ikea/kungsfors.jpeg',
            description: 'Inspired by professionals, but adapted for you. Just like in a restaurant kitchen, we’ve focused on durable materials and smart wall storage that provides the space needed for all creative home cooks.',
            type: 'ikea'
        },
       {
            word: 'Friheten',
            image: 'images/ikea/friheten.jpeg',
            description: 'After a good night’s sleep, you can effortlessly convert your bedroom or guest room into a living room again. The built-in storage is easy to access and spacious enough to store bedding, books and PJs.',
            type: 'ikea'
        },
       {
            word: 'Variera',
            image: 'images/ikea/variera.jpeg',
            description: 'Just when you thought you were running out of space inside your cabinets, this shelf insert comes to the rescue. Simply add one or more inserts for that wonderful extra storage space.',
            type: 'ikea'
        },
       {
            word: 'Trofast',
            image: 'images/ikea/trofast.jpeg',
            description: 'Children need good and spacious storage for their things. The TROFAST series has wooden frames, mesh boxes and plastic boxes and trays (min. 50% recycled). Easy to pull out, carry and put back in again.',
            type: 'ikea'
        },
       {
            word: 'Nyfors',
            image: 'images/ikea/nyfors.jpeg',
            description: 'High or low? This floor lamp can be adjusted in height and spreads a soft light through the white textile shade on top. And the heavy lamp base is both sturdy and decorative.',
            type: 'ikea'
        },
       {
            word: 'Kvistbro',
            image: 'images/ikea/kvistbro.jpeg',
            description: 'Store things like throws, cushions or yarn in the basket or leave it empty to let the design stand out and to create a spacious feeling. Easy to lift and move from the sofa to your favorite armchair.',
            type: 'ikea'
        },
       {
            word: 'Lagkapten',
            image: 'images/ikea/lagkapten.jpeg',
            description: 'Limited space doesn’t mean you have to say no to studying or working from home. This desk takes up little floor space yet still has two drawer units where you can store papers and other items.',
            type: 'ikea'
        },
       {
            word: 'Varmblix',
            image: 'images/ikea/varmblix.jpeg',
            description: 'When the light passes through the lamp’s orange glass, the soft donut-like shape shines with a warm glow. A magical sight that’s an eye-catcher, regardless if it’s on a table or hanging on a wall.',
            type: 'ikea'
        },
       {
            word: 'Nämmarö',
            image: 'images/ikea/nammaro.jpeg',
            description: 'Create a comfy living room feel outdoors with NÄMMARÖ series. With everything you need for chill moments, long dinners and cheerful summer parties, no matter if you have a balcony, terrace or garden.',
            type: 'ikea'
        },
       {
            word: 'Storklinta',
            image: 'images/ikea/storklinta.jpeg',
            description: 'The STORKLINTA series has a modern, simple design that is easy to live with. The chest of drawers comes with Anchor and Unlock that helps to reduce the tip-over risk when combined with wall-anchoring.',
            type: 'ikea'
        },
       {
            word: 'Fado',
            image: 'images/ikea/fado.jpeg',
            description: 'Looking for a table lamp with clean lines that can spread soft and cozy mood lighting when darkness falls? This large decorative globe in white glass is a perfect choice.',
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
        const baseScore = score * 100;
        const streakBonus = bestStreak * 50;
        const maxTime = questions.length * QUESTION_TIME;
        const timeBonus = Math.max(0, (maxTime - timeTaken) * 2);
        const performanceScore = baseScore + streakBonus + timeBonus;
        document.getElementById('performance-score').textContent = performanceScore;
        document.getElementById('final-score').textContent = `${score}/${questions.length}`;
        document.getElementById('final-time').textContent = `${timeTaken}s`;
        document.getElementById('final-streak').textContent = `🔥x${bestStreak}`;
        quizScreen.classList.remove('active');
        resultsScreen.classList.add('active');
        triggerConfetti();
    }

    function generateShareCard() {
        const cardTemplate = document.getElementById('share-card-template');
            const baseScore = score * 100;
            const streakBonus = bestStreak * 50;
            const maxTime = questions.length * QUESTION_TIME;
            const timeBonus = Math.max(0, (maxTime - timeTaken) * 2);
            const performanceScore = baseScore + streakBonus + timeBonus;
        document.getElementById('share-score').textContent = `${score}/${questions.length}`;
        document.getElementById('share-time').textContent = `${timeTaken}s`;
        document.getElementById('share-streak').textContent = `🔥x${bestStreak}`;
        document.getElementById('share-performance-score').textContent = performanceScore;
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