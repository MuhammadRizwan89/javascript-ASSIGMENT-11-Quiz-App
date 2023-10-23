document.addEventListener("DOMContentLoaded", function () {
    // Getting all required elements
    const start_btn = document.querySelector(".start_btn button");
    const info_box = document.querySelector(".info_box");
    const exit_btn = info_box.querySelector(".buttons .quit");
    const continue_btn = info_box.querySelector(".buttons .restart");
    const quiz_box = document.querySelector(".quiz_box");
    const timeLine = document.querySelector("header .timer_line");
    const timeCount = quiz_box.querySelector(".timer .timer_sec");
    const timeOff = document.querySelector("header .timer_text");
    const options_list = document.querySelector(".option_list");

    // If Start Quiz Button Clicked
    start_btn.onclick = () => {
        info_box.classList.add("activeInfo"); // Show the info box
    }

    // If Exit Button Clicked
    exit_btn.onclick = () => {
        info_box.classList.remove("activeInfo"); // Hide the info box (modified 'remove' typo)
    }

    // If Continue Button Clicked
    continue_btn.onclick = () => {
        info_box.classList.remove("activeInfo"); // Hide the info box
        quiz_box.classList.add("activeQuiz"); // Show the quiz box
        showQuestions(0);
        queCounter(1);
        startTimer(60);
        startTimerLine(0);
    }

    let que_count = 0;
    let que_numb = 1;
    let counter;
    let counterLine;
    let timeValue = 60;
    let widthValue = 0;
    let userScore = 0;

    const next_btn = quiz_box.querySelector(".next_btn");
    const result_box = document.querySelector(".result_box");
    const restart_quiz = result_box.querySelector(".buttons .restart");
    const quit_quiz = result_box.querySelector(".buttons .quit");

    restart_quiz.onclick = () => {
        quiz_box.classList.add("activeQuiz");
        result_box.classList.remove("activeResult");
        que_count = 0;
        que_numb = 1;
        timeValue = 60;
        widthValue = 0;
        userScore = 0;
        showQuestions(que_count);
        queCounter(que_numb);
        clearInterval(counter);
        startTimer(timeValue);
        clearInterval(counterLine);
        startTimerLine(widthValue);
        next_btn.style.display = "none";
        timeOff.textContent = "Time Left";
    }

    quit_quiz.onclick = () => {
        window.location.reload();
    }

    // If Next Button Clicked
    next_btn.onclick = () => {
        if (que_count < questions.length - 1) {
            que_count++;
            que_numb++;
            showQuestions(que_count);
            queCounter(que_numb);
            clearInterval(counter);
            startTimer(timeValue);
            clearInterval(counterLine);
            startTimerLine(widthValue);
            next_btn.style.display = "none";
            timeOff.textContent = "Time Left";
        } else {
            clearInterval(counter);
            clearInterval(counterLine);
            console.log("Questions completed");
            showResultBox();
        }
    }

    // Getting questions and options from array
    function showQuestions(index) {
        const que_text = document.querySelector(".que_text");
        const options_list = document.querySelector(".option_list");
        let que_tag = `<span>` + questions[index].numb + ". " + questions[index].question + `</span>`;
        let option_tag = `<div class="option">` + questions[index].options[0] + `<span></span></div>` +
            `<div class="option">` + questions[index].options[1] + `<span></span></div>` +
            `<div class="option">` + questions[index].options[2] + `<span></span></div>` +
            `<div class="option">` + questions[index].options[3] + `<span></span></div>`;
        que_text.innerHTML = que_tag;
        options_list.innerHTML = option_tag;

        const option = options_list.querySelectorAll(".option");
        option.forEach((option) => {
            option.addEventListener("click", function () {
                optionSelected(this);
            });
        });
    }

    let tickIcon = `<div class="icon tick"><i class="fa-regular fa-circle-check"></i></div>`;
    let CrossIcon = `<div class="icon cross"><i class="fa-regular fa-circle-xmark"></i></div>`;

    function optionSelected(answer) {
        clearInterval(counter);
        clearInterval(counterLine);
        let userAns = answer.textContent;
        let correctAns = questions[que_count].answer;
        let allOptions = options_list.children.length;
        if (userAns === correctAns) { // Changed == to === for strict comparison
            userScore += 1;
            console.log(userScore);
            answer.classList.add("correct");
            console.log("Answer is Correct");
            answer.insertAdjacentHTML("beforeend", tickIcon);
        } else {
            answer.classList.add("incorrect");
            console.log("Answer is wrong");
            answer.insertAdjacentHTML("beforeend", CrossIcon);

            // If the answer is incorrect, then automatically select the correct answer.
            for (let i = 0; i < allOptions; i++) {
                if (options_list.children[i].textContent == correctAns) {
                    options_list.children[i].setAttribute("class", "option correct");
                    options_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
                }
            }
        }

        // Once user selected, disable all options
        for (let i = 0; i < allOptions; i++) {
            options_list.children[i].classList.add("disabled");
        }
        next_btn.style.display = "block";
    }

    function showResultBox() {
        info_box.classList.remove("activeInfo"); // Hide the info box
        quiz_box.classList.remove("activeQuiz"); // Hide the quiz box
        result_box.classList.add("activeResult"); // Show the result box
        const scoreText = result_box.querySelector(".score_text");
        if (userScore > 25) {
            let scoreTag = `<span>and congrats! You got only <p>` + userScore + `</p> Out of <p>` + questions.length + `</p></span>`
            scoreText.innerHTML = scoreTag;
        } else if (userScore > 21) {
            let scoreTag = `<span>and nice, You got only <p>` + userScore + `</p> Out of <p>` + questions.length + `</p></span>`
            scoreText.innerHTML = scoreTag;
        } else {
            let scoreTag = `<span>and sorry, You got only <p>` + userScore + `</p> Out of <p>` + questions.length + `</p></span>`
            scoreText.innerHTML = scoreTag;
        }
    }

    function startTimer(time) {
        counter = setInterval(timer, 1000);
        function timer() {
            timeCount.textContent = time;
            time--;
            if (time < 9) {
                let addZero = timeCount.textContent;
                timeCount.textContent = "0" + addZero;
            }
            if (time < 0) {
                clearInterval(counter);
                timeCount.textContent = "00";
                timeOff.textContent = "Time off";

                let correctAns = questions[que_count].answer;
                let allOptions = options_list.children.length;

                for (let i = 0; i < allOptions; i++) {
                    if (options_list.children[i].textContent == correctAns) {
                        options_list.children[i].setAttribute("class", "option correct");
                        options_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
                    }
                }
                for (let i = 0; i < allOptions; i++) {
                    options_list.children[i].classList.add("disabled");
                }
                next_btn.style.display = "block";
            }
        }
    }

    function startTimerLine(time) {
        counterLine = setInterval(timer, 116);
        function timer() {
            time += 1;
            timeLine.style.width = time + "px";
            if (time > 549) {
                clearInterval(counterLine);
            }
        }
    }

    function queCounter(index) {
        const bottom_ques_counter = quiz_box.querySelector(".total_que");
        let totalQuesCountTag = `<span><p>` + que_count + `</p>of<p>` + questions.length + `</p>Question</span>`;
        bottom_ques_counter.innerHTML = totalQuesCountTag;
    }
});
