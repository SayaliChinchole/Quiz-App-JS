const quizData = [
    {
        question: '1. Which type of JavaScript language is ?',
        a:"Object-Oriented",    
        b:"Object-Based",
        c:"Assembly-language",
        d:"High-level",
        correct: "b",
    },
    {
        question: '2. Which of the following function of Array object removes the first element from an array and returns that element?',
        a:"reverse()",    
        b:"shift()",
        c:"slice()",
        d:"some()",
        correct: "b",
    },
    {
        question: '3. Which one of the following also known as Conditional Expression:',
        a:"Alternative to if-else",    
        b:"Switch statement",
        c:"If-then-else statement",
        d:"immediate if",
        correct: "d",
    },
    {
        question: '4. In JavaScript, what is a block of statement?',
        a:"Conditional block",    
        b:"block that combines a number of statements into a single compound statement",      
        c:"both conditional block and a single statement",
        d:"block that contains a single statement",        
        correct: "b",
    },
    {
        question: '5. When interpreter encounters an empty statements, what it will do?',
        a:"Shows a warning",    
        b:"Prompts to complete the statemented",
        c:"Throws an error",
        d:"Ignores the statements",
        correct: "d",
    },

];

const quiz = document.getElementById("quiz");
const answersEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let answer = undefined;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    //to check if any radio button is checked
    
    let answer = undefined;

    answersEls.forEach(answerEl => {
        if(answerEl.checked){
            console.log(answerEl.id);
            answer = answerEl.id;
            console.log("answer in checked ",answer)
            //will return the checked answer id
        }
    });
   return answer;
}

function deselectAnswers(){
    answersEls.forEach(answerEl => {
        if(answerEl.checked){
            answerEl.checked = false;
        }
    });
}

submitBtn.addEventListener("click", () => {
    //check to see answer
    const answer =  getSelected();
    console.log(answer);
    if(answer) {
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;
         
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else {
            //to do: show results 
            quiz.innerHTML = `<h2>You answered 
            correctly at ${score}/${quizData.
                length} questions.</h2>
                <button onclick="location.reload()">Reload</button>`;
            //alert("You Finished !")
        }
    }
   
} );