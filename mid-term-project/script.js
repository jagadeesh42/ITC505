const story = {
    start: {
        text: "You stand at a crossroads under a golden sunrise. To your left lies a mysterious forest, and to your right, the calm whisper of waves on the beach. Where will your adventure begin?",
        choices: [
            { text: "Head into the forest", next: "forest" },
            { text: "Walk toward the beach", next: "beach" }
        ],
        image: "forest and beach.png"
    },
    forest: {
        text: "The forest is dense and alive with sounds. In a small clearing, you spot a glowing treasure chest—and a wolf guarding it. What will you do?",
        choices: [
            { text: "Approach the wolf", next: "wolf" },
            { text: "Try to open the treasure chest", next: "treasure" }
        ],
        image: "wolf tresure.png"
    },
    beach: {
        text: "The soft sand welcomes your steps. Ahead, a lone stranger gazes out at the ocean, while a dark cave opening yawns nearby. What catches your curiosity?",
        choices: [
            { text: "Talk to the stranger", next: "stranger" },
            { text: "Explore the hidden cave", next: "cave" }
        ],
        image: "stranger.png"
    },
    wolf: {
        text: "The wolf’s eyes gleam as it growls softly. Do you face the danger or retreat to safety?",
        choices: [
            { text: "Run away quickly", next: "runAway" },
            { text: "Stand your ground and fight", next: "fight" }
        ],
        image: "aggressive.png"
    },
    treasure: {
        text: "You carefully lift the lid of the chest—inside, gold and jewels glimmer in the dim light. You have found unimaginable riches and a lifetime of comfort!",
        choices: [],
        image: "tresure.png"
    },
    stranger: {
        text: "The stranger turns to you with a kind smile. Yet something about their calm demeanor feels off. Will you trust them or stay cautious?",
        choices: [
            { text: "Make a new friend", next: "friend" },
            { text: "Get deceived and robbed", next: "robbed" }
        ],
        image: "strangers.png"
    },
    cave: {
        text: "You step inside the cave. The air grows cold and echoes with mystery. Suddenly, the path splits—one tunnel glows faintly, the other is pitch dark. What will you do?",
        choices: [
            { text: "Follow the glowing tunnel", next: "secret" },
            { text: "Venture into the darkness", next: "trapped" }
        ],
        image: "caves.png"
    },
    runAway: {
        text: "You sprint away through the trees, heart pounding. You’re safe—but the mystery of the forest remains unsolved.",
        choices: [],
        image: "runaway.png"
    },
    fight: {
        text: "You grab a branch and face the wolf. After a tense struggle, you defeat it but carry a scar as a reminder of your bravery.",
        choices: [],
        image: "fight.jpeg"
    },
    friend: {
        text: "The stranger turns out to be a wise traveler. You share stories by the sea, beginning a lifelong friendship built on trust and adventure.",
        choices: [],
        image: "friends.png"
    },
    robbed: {
        text: "Before you realize it, the stranger disappears—along with your belongings. You’re left alone, wiser and more cautious than before.",
        choices: [],
        image: "robbed.png"
    },
    secret: {
        text: "You follow the glowing tunnel and discover ancient markings on the wall. You’ve uncovered a long-lost secret of a forgotten civilization!",
        choices: [],
        image: "secret.png"
    },
    trapped: {
        text: "You step into the darkness and the ground collapses beneath you! Hours later, rescuers find you shaken but alive. You’ll never forget the lesson of caution.",
        choices: [],
        image: "trapped.png"
    }
};

function startGame() {
    currentStage = 'start';
    updatePage();
}

function updatePage() {
    const stage = story[currentStage];
    document.getElementById('story').innerText = stage.text;
    const choicesDiv = document.getElementById('choices');
    choicesDiv.innerHTML = '';
    stage.choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.addEventListener('click', () => {
            currentStage = choice.next;
            updatePage();
        });
        choicesDiv.appendChild(button);
    });
    document.getElementById('image').innerHTML = `<img src="${stage.image}" alt="${currentStage}">`;
    if (stage.choices.length === 0) {
        document.getElementById('restart').style.display = 'block';
    } else {
        document.getElementById('restart').style.display = 'none';
    }
}

let currentStage = 'start';
document.getElementById('restart').addEventListener('click', startGame);
startGame();
