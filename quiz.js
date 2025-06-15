//Defining the function
function checkAnswer() {
    const correctAnswer = "4";
    // Get the users selected radio
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    //Check if any option was selected
    if (!selectedOption){
        document.getElementById("feedback").textContent ="Please select and answer.";
        return;
    }

    const userAnswer = selectedOption.value
    //complaring answers
    if (userAnswer === correctAnswer){
        document.getElementById("feedback").textContent="Correct! Well done.";
    
    } else {
        document.getElementById("feedback").textContent="That's incorrect. Try again!";
    }
}

//Attach event listener to the button
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);