let questions = [
    {
        "question": "Wer hat die Auszeichnung zum Ballon D´or am häufigsten gewonnen ?",
        "answer_1": "Cristiano Ronaldo",
        "answer_2": "Lionel Messi",
        "answer_3": "Johann Cruyff",
        "answer_4": "Diego Maradona",
        "right_answer": 2
    },
    {
        "question": "Welche Nation gewann die Weltmeisterschaft am meisten ?",
        "answer_1": "Frankreich",
        "answer_2": "Deutschland",
        "answer_3": "Brasilien",
        "answer_4": "Spanien",
        "right_answer": 3
    },
    {
        "question": "Welcher Spieler hält den Rekord für die meisten offiziellen Tore im Fußball ?",
        "answer_1": "Cristiano Ronaldo",
        "answer_2": "Pele",
        "answer_3": "Robert Lewandowski",
        "answer_4": "Lionel Messi",
        "right_answer": 1
    },
    {
        "question": "Welcher Transfer gilt als der teuerste Transfer der Geschichte ?",
        "answer_1": "Neymar zu PSG",
        "answer_2": "Ronaldo zu Juventus Turin",
        "answer_3": "Mbappe zu PSG",
        "answer_4": "Dembele zum FC Barcelona",
        "right_answer": 1
    },
    {
        "question": "Welche Nation gewann die Europameisterschaft am meisten ?",
        "answer_1": "England",
        "answer_2": "Frankreich",
        "answer_3": "Deutschland und Spanien",
        "answer_4": "Italien",
        "right_answer": 3
    }
];


let rightAnswers = 0;
let currentQuestion = 0;
let AUDIO_RIGHT = new Audio('audio/right.mp3');
let AUDIO_WRONG = new Audio('audio/wrong.mp3');


function startQuiz() {
    document.getElementById('beginningscreen').style = 'display: none';
    document.getElementById('question-body').style = 'flex';
}


function init() {
    document.getElementById('number-all-questions').innerHTML = questions.length;

    showQuestion();
}


function showQuestion() {
    if (gameIsOver()) {
        showEndscreen();
    } else {
        updateProgressbar();
        updateToNextQuestion();
    }
}


function gameIsOver() {
    return currentQuestion >= questions.length;
}


function showEndscreen() {
    document.getElementById('endscreen').style = '';
    document.getElementById('question-body').style = 'display: none';

    document.getElementById('amount-of-questions').innerHTML = questions.length;
    document.getElementById('amoutn-of-right-answers').innerHTML = rightAnswers;
}


function updateProgressbar() {
    let percent = (currentQuestion) / questions.length;
    percent = Math.round(percent * 100);

    document.getElementById('progress-bar').style = `width: ${percent}%`;
}


function updateToNextQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('number-current-question').innerHTML = currentQuestion + 1;
    document.getElementById('question-text').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}


function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (rightAnswerSelected(selectedQuestionNumber)) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightAnswers++;
        AUDIO_RIGHT.play();
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_WRONG.play();
    }
    document.getElementById('next-button').disabled = false;
}


function rightAnswerSelected(selectedQuestionNumber) {
    let question = questions[currentQuestion];

    return selectedQuestionNumber == question['right_answer'];
}


function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswers();
    showQuestion();
}


function resetAnswers() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function startAgain() {
    location.reload();
}