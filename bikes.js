// Interactive Quiz Functionality with Selection Highlight
const quizQuestions = [
    {
        question: "What type of bike is best for off-road trails?",
        choices: ["Mountain Bike", "Road Bike", "Hybrid Bike"],
        answer: "Mountain Bike"
    },
    {
        question: "Which bike type is designed for speed on paved roads?",
        choices: ["Mountain Bike", "Road Bike", "Hybrid Bike"],
        answer: "Road Bike"
    },
    {
        question: "Which bike is a good combination for both city and trail use?",
        choices: ["Mountain Bike", "Road Bike", "Hybrid Bike"],
        answer: "Hybrid Bike"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedChoice = null;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");
    const currentQuestion = quizQuestions[currentQuestionIndex];

    questionElement.innerText = currentQuestion.question;
    choicesElement.innerHTML = "";
    selectedChoice = null;

    currentQuestion.choices.forEach((choice, index) => {
        const choiceButton = document.createElement("button");
        choiceButton.innerText = choice;
        choiceButton.onclick = () => selectAnswer(choiceButton, choice);
        choicesElement.appendChild(choiceButton);
    });
}

function selectAnswer(choiceButton, choice) {
    if (selectedChoice) {
        selectedChoice.classList.remove("selected");
    }
    choiceButton.classList.add("selected");
    selectedChoice = choiceButton;
    selectedChoice.value = choice;
}

function submitAnswer() {
    if (!selectedChoice) {
        alert("Please select an answer.");
        return;
    }
    const currentQuestion = quizQuestions[currentQuestionIndex];
    if (selectedChoice.value === currentQuestion.answer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz-result").innerText = `Quiz completed! Your score is ${score}/${quizQuestions.length}.`;
    }
}

loadQuestion();

// Bike Order Form Submission
function submitOrder(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const bikeType = document.getElementById("bike-type").value;
    const quantity = document.getElementById("quantity").value;

    document.getElementById("order-confirmation").innerText = `Thank you, ${name}! You have successfully ordered ${quantity} ${bikeType}(s). A confirmation email has been sent to ${email}.`;
}

// Fetch Joke from Joke API
async function fetchJoke() {
    try {
        const response = await fetch("https://icanhazdadjoke.com/", {
            headers: { "Accept": "application/json" }
        });
        const data = await response.json();
        document.getElementById("joke-info").innerText = data.joke;
    } catch (error) {
        document.getElementById("joke-info").innerText = "Failed to fetch a joke.";
    }
}
