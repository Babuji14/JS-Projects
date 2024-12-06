document.addEventListener("DOMContentLoaded", () => {
    let questionCount = document.getElementById("quesion-count");
    let questionContainer = document.getElementById("questions-container");
    const nextButton = document.getElementById("next-button");

    const quizArray = [
        {
            "id": 0,
            "question": "What is the capital of France?",
            "options": ["Paris", "London", "Berlin", "Madrid"],
            "correct": "Paris"
        },
        {
            "id": 1,
            "question": "What is the largest planet in our solar system?",
            "options": ["Earth", "Mars", "Saturn", "Jupiter"],
            "correct": "Jupiter"
        },
        {
            "id": 2,
            "question": "What is the chemical formula for water?",
            "options": ["H2O2", "CO2", "H2O", "NaCl"],
            "correct": "H2O"
        }
    ];

    let currentIndexQuestion=0;

    //Generate Random Options 
    quizArray.sort(()=>Math.random()-0.5);
    /*For example:
    If Math.random() generates 0.8:
    0.8 - 0.5 = 0.3 (positive result → keep the current order).
    If Math.random() generates 0.3:
    0.3 - 0.5 = -0.2 (negative result → swap the order).
    This approach ensures a randomized order of elements in the array. */
    quizArray.forEach(q=>{
        q.options.sort(() => Math.random()-0.5);
    });

    function questionCreation(){
        // Clear the container
        questionContainer.innerHTML = "";
        //update count
        questionCount.innerHTML=`${currentIndexQuestion+1} of ${quizArray.length} Questions`;

        //current question
        const currentQuestion=quizArray[currentIndexQuestion];

        //create question in question-container
        const quizQuestion=document.createElement("p");
        quizQuestion.classList.add("questions");
        quizQuestion.innerHTML=currentQuestion.question;
        questionContainer.appendChild(quizQuestion);

        //Generate random Options
        currentQuestion.options.forEach(option =>{
            const answer_button=document.createElement("button");
            answer_button.classList.add("option_button");
            answer_button.innerHTML=option;
            questionContainer.appendChild(answer_button);

            answer_button.onclick = () => checker(answer_button, currentQuestion.correct); // Pass the correct answer
        });
    }

    //Checking Options
    function checker(selectedOption, correctAnswer) {
        if (selectedOption.innerHTML === correctAnswer) {
            selectedOption.style.backgroundColor = "green";
            selectedOption.style.color = "#fff";
        } else {
            selectedOption.style.backgroundColor = "red";
            selectedOption.style.color = "#fff";
        }
        // Disable all buttons after selection
        const options = document.querySelectorAll(".option_button");
        options.forEach(button => (button.disabled = true));
    }

    //Next button
    nextButton.addEventListener("click",()=>{
        currentIndexQuestion++;
        if(currentIndexQuestion < quizArray.length){
            questionCreation();
        }
    });
questionCreation();
});
