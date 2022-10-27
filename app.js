// get DOM Elements
const promptSection = document.getElementById('prompt');
const fortuneSection = document.getElementById('fortune');
const submitBtn = document.getElementById('submit');
const answerP = document.getElementById('answer');
const resetBtn = document.getElementById('reset');

// initialize array of answers
const answers = [
    'Yes, definitely',
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'You may rely on it',
    'As I see it, yes',
    'Most Likely',
    'Outlook good',
    'Signs point to yes',
    'Reply hazy, try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Don’t count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful',
];

// events

function toggleSelections() {
    promptSection.classList.toggle('hide');
    fortuneSection.classList.toggle('hide');
}

// button click
submitBtn.addEventListener('click', () => {
    toggleSelections();

    // get random answer
    let getRandomAnswer = answers[Math.floor(Math.random() * answers.length)];

    // display random answer
    answerP.textContent = getRandomAnswer;
});
