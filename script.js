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


let currentQuestion = 0;


function init() {
    document.getElementById('number-all-questions').innerHTML = questions.length;

    showQuestion();
}


function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('question-text').innerHTML = question['question'];

    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}


function answer(selection) {
    let question = questions[currentQuestion];
    console.log('Selected answer is', selection);
    let selectedQuestionNumber = selection.slice(-1);
    console.log('selectedQuestionNumber is', selectedQuestionNumber);
    console.log('Current question is', question['right_answer']);

    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');    
    }
}