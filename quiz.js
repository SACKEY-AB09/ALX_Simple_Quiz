function checkAnswer(){
    const correctAnswer='4';
    let Answer=document.querySelector('input[name="quiz"]:checked');
    let userAnswer=Answer ? Answer.value:null;

    if (userAnswer===correctAnswer){
        const feedback=document.getElementById('feedback');
        feedback.innerText="Correct! well done";
    }
    else{
        const feedback=document.getElementById('feedback');
        feedback.innerText="That's incorrect! Try again";
    }
    
}

const submitAns=document.getElementById("submit-answer");
submitAns.addEventListener("click", checkAnswer);