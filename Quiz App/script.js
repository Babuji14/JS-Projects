document.addEventListener("DOMContentLoaded", () => {
    let questionCount = document.getElementById("quesion-count");
    let questionContainer = document.getElementById("questions-container");
    const nextButton = document.getElementById("next-button");
    const timeLeft=document.getElementById("time-left");
    let timer=document.getElementById("timer");
    let watch=document.querySelector(".fa-stopwatch");
    let time=10;
    let timerInterval;

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
        },
        {
          "id": 3,
          "question": "What is the tallest mountain in the world?",
          "options": ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
          "correct": "Mount Everest"
        },
        {
          "id": 4,
          "question": "Which country hosted the 2022 FIFA World Cup?",
          "options": ["Qatar", "Saudi Arabia", "United Arab Emirates", "Kuwait"],
          "correct": "Qatar"
        },
        {
          "id": 5,
          "question": "What is the largest country in the world by land area?",
          "options": ["Russia", "Canada", "China", "United States"],
          "correct": "Russia"
        },
        {
          "id": 6,
          "question": "Which river is the longest in the world?",
          "options": ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
          "correct": "Nile River"
        },
        {
          "id": 7,
          "question": "What is the capital of Australia?",
          "options": ["Sydney", "Melbourne", "Canberra", "Brisbane"],
          "correct": "Canberra"
        },
        {
          "id": 8,
          "question": "Which animal is the national animal of India?",
          "options": ["Tiger", "Lion", "Elephant", "Peacock"],
          "correct": "Tiger"
        },
        {
          "id": 9,
          "question": "Who painted the Mona Lisa?",
          "options": ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
          "correct": "Leonardo da Vinci"
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
    
    function startTime(){
      time=10;
      timeLeft.innerHTML=`${time}s`;
      timerInterval=setInterval(()=>{
        time--;
        timeLeft.innerHTML=`${time}s`;
        if(time<=3){
          timer.style.backgroundColor="#ff3030";
          timer.style.color="#fff";
          timer.style.transform="scale(1.13)";
          timer.style.animation = "timerBlink 1s 3"; 
        }else{
          timer.style.backgroundColor="";
          timer.style.color="";
          timer.style.transform="scale(1)";
          timer.style.animation = ""; 
        }
        if(time<=0){
          clearInterval(timerInterval);
        }
      },1000);

    }
    function stopTimer(){
      clearInterval(timerInterval);
    }

    function questionCreation(){
        // Clear the container
        questionContainer.innerHTML = "";

        // Reset the Timer property
        timer.style.backgroundColor="";
        timer.style.color="";
          timer.style.transform="scale(1)";

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
        startTime();
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
        options.forEach(button=>{
          button.style.transform="scale(1)";
          button.disabled=true;
        });
        selectedOption.style.transform="scale(1.1)";
        stopTimer();
    }

    //Next button
    nextButton.addEventListener("click", () => {
      // Only move to the next question if it's not the last question
      if (currentIndexQuestion < quizArray.length - 1) {
          currentIndexQuestion++;
          stopTimer();
          questionCreation();
      } else if (currentIndexQuestion === quizArray.length - 1) {
          // On the last question, don't stop the timer until an answer is chosen
          const options = document.querySelectorAll(".option_button");
          let answerChosen = false;
  
          options.forEach(option => {
              if (option.disabled) {
                  answerChosen = true; // Check if any answer is already selected
              }
          });
  
          if (!answerChosen) {
              alert("Please select an answer before finishing the quiz!");
          } else {
              // If an answer is selected, stop the timer and finish the quiz
              stopTimer();
              questionContainer.innerHTML = "<p>Quiz Completed! 🎉</p>";
              questionCount.innerHTML = `You answered all ${quizArray.length} questions!`;
              nextButton.style.display = "none"; // Hide the next button
          }
      }
  });
  
questionCreation();
});
