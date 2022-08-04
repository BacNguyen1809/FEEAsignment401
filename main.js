var question = [
    {
        question: "question 1",
        answer: [
            'a. cau  1',
            'a. answer 2',
            'a. answer 3',
            'a. answer 4'
        ]
    },
    {
        question: "question 2",
        answer: [
            'a. answer 1',
            'a. cau 2',
            'a. answer 3',
            'a. answer 4'
        ]
    },
    {
        question: "question 3",
        answer: [
            'a. answer 1',
            'a. answer 2',
            'a. cau 3',
            'a. answer 4'
        ]
    }
]

var prevBtn = document.querySelector("#btn1");
var nextBtn = document.querySelector("#btn3")
var information = document.querySelector('#btnDiv p');
var submitBtn = document.querySelector("#btn2");

var index = 0;
initialValue(index)
function initialValue(index) {
    addQuestion(index);
    var text = (index + 1) + ' out of ' + question.length;
    information.textContent = text;
    fixDisplay();

}

prevBtn.addEventListener("click", pressPrv);
nextBtn.addEventListener("click", pressNext);


function addQuestion(index) {
    document.querySelector("#formDiv p").textContent = question[index].question;

    var questionArray = question[index].answer;
    for (var i = 0; i < questionArray.length; i++) {
        let bien = "#" + `lb${i + 1}`;

        document.querySelector(bien).textContent = questionArray[i];
    }


}
function pressNext() {

    if (index < (question.length - 1)) {
        index++;
        console.log(index);
        addQuestion(index);
        var text = (index + 1) + ' out of ' + question.length;
        information.textContent = text;
        fixDisplay();
    }

}

function pressPrv() {

    if (index < (question.length) && index > 0) {
        index--;
        console.log(index);
        addQuestion(index);
        var text = (index + 1) + ' out of ' + question.length;
        information.textContent = text;
        fixDisplay();
    }

}

function fixDisplay() {
    var buttonA = document.querySelectorAll('button');
    buttonA.forEach(a => {
        a.style.display = "inline";
    })
    if (index == 0) {
        prevBtn.style.display = 'none';
    }
    if (index == question.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'inline';
    }
    else{
        submitBtn.style.display = 'none';
    }
}

