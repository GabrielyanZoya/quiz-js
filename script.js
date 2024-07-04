const questions = [
    {
        "question": "Երբ է տեղի ունեցել առանձին հայկական կորպուսի ստեղծումը ?",
        "answer1": "1917 թվականի մարտի 3-ին",
        "answer1Total": "0",
        "answer2": "1918 թվականի մարտի 1-ին",
        "answer2Total": "2",
        "answer3": "Չգիտեմ",
        "answer3Total": "0"
    },
    {
        "question": "Որ թվականին է քրիստոնեությունը Հայաստանում ընդունվել որպես պետական կրոն?",
        "answer1": "303 թվականին ",
        "answer1Total": "2",
        "answer2": "301 թվականին",
        "answer2Total": "0",
        "answer3": "371 թվականին",
        "answer3Total": "0"
    },
    {
        "question":
            "Ովքեր էին հայոց ցեղասպանության գլխավոր կազմակերպիչները?",
        "answer1": "Իսմայիլ Էնվեր փաշա, Ջևդեթ Սունայ, Թալեաթ փաշա  ",
        "answer1Total": "2",
        "answer2": "Թալեաթ փաշա, Ջեմալ փաշա, Իսմայիլ Էնվեր փաշա",
        "answer2Total": "3",
        "answer3": "Զեքի փաշա, Թալեաթ փաշա",
        "answer3Total": "1"
    },
    {
        "question": "Որ ճակատամարտերն են տեղի ունեցել մայիսյան հերոսամարտերի ընթացքում ?",
        "answer1": "Սարդարապատի ճակատամարտ, Ձիրավի ճակատամարտ ",
        "answer1Total": "1",
        "answer2": "Ձիրավի ճակատամարտ, Անիի ճակատամարտ",
        "answer2Total": "0",
        "answer3":
            " Ղարաքիլիսայի ճակատամարտ, Բաշ-Ապարանի ճակատամարտ  ",
        "answer3Total": "2"
    },
    {
        "question": " Երբ է կնքվել Բրեստ-Լիտովսկի հաշտության պայմանագիրը ?",
        "answer1": "1918 թվականի մարտի 3-ին",
        "answer1Total": "2",
        "answer2": "1916 թվականի  մայիսի 3-ին",
        "answer2Total": "0",
        "answer3": "1918 թվականի նոյեմբերի 13-ին",
        "answer3Total": "0"
    },
    {
        "question":
            "Երբ է հիմնադրվել Հայաստանի առաջին հանրապետությունը?",
        "answer1":
            "1917 թվականի մայիսի 28-ին",
        "answer1Total": "0",
        "answer2": "1902 թվականի մարտի 28-ին",
        "answer2Total": "0",
        "answer3": "1918 թվականի մայիսի 28-ին",
        "answer3Total": "2"
    },
    {
        "question": "Երբ է տեղի ունեցել Ավարայրի ճակատամարտը?",
        "answer1": "Չգիտեմ",
        "answer1Total": "0",
        "answer2": "451 թվականի մայիսի 26-ին",
        "answer2Total": "2",
        "answer3": "403 թվականի մարտի 26-ին",
        "answer3Total": "0"
    }
]


    let currentQuestion = 0;
    let score=[]
    const totalQuestions = questions.length

    const container = document.querySelector('.quiz-container');
    const  questionElement = document.querySelector('.question');
    const option1 = document.querySelector('.option1');
    const option2 = document.querySelector('.option2');
    const option3 = document.querySelector('.option3');
    const previousButton= document.querySelector('.previous');
    const nextButton= document.querySelector('.next');
    const result = document.querySelector('.result');

    function generateQuestion(index){
        const question = questions [index];
        const option1Total= questions[index].answer1Total;
        const option2Total= questions[index].answer2Total;
        const option3Total= questions[index].answer3Total;
        console.log(question)
        questionElement.innerHTML=`${question.question}`
        option1.setAttribute('data-total', `${option1Total}`)
        option2.setAttribute('data-total', `${option2Total}`)       
        option3.setAttribute('data-total', `${option3Total}`)
        option1.innerHTML=`${question.answer1}`
        option2.innerHTML=`${question.answer2}`
        option3.innerHTML=`${question.answer3}`

    }



function loadNextQuestion (){
    const selectedOption = document.querySelector('input[type="radio"]:checked')
    if(!selectedOption){
        alert("Ընտրի՛ր տարբերակներից մեկը:)")
        return;
    }
    const hashivy = Number(selectedOption.nextElementSibling.getAttribute('data-total'));

    score.push(hashivy)

    const verjnakanHashiv = score.reduce((total, currentNum)=> total +currentNum)

    currentQuestion++

    selectedOption.checked = false;

    if(currentQuestion == totalQuestions-1){
        nextButton.textContent = "Finish"
    }
       
    if (currentQuestion == totalQuestions) {
            container.style.display = 'none';
            result.innerHTML =
            `<h1 class="final-score">Your score: ${verjnakanHashiv}</h1>
            <div class="summary">
            <h1>Summary</h1>
            <p>Possible - Knowledge of history, see below for a summary based on your results:</p>
            <p>10 - 15- Amazing</p>
            <p>5 - 10 - Good</p>
            <p>3 - 5 - Normal </p>
            <p>0 - 3 Are You Even Real</p>
            </div>
            <button class="restart">Restart Quiz</button>
            `;
            return;
            

        }


    generateQuestion(currentQuestion)


}

function loadPreviousButton (){
    if(currentQuestion == 0){
        alert ("cheq karox het gnal")
        return;

    }
    currentQuestion--
    score.pop()
    generateQuestion(currentQuestion)

}




function restartQuiz (e){
    if(e.target.matches('button')){
     currentQuestion = 0
    score = []
    location.reload()

    }
}


generateQuestion(currentQuestion)
result.addEventListener('click', restartQuiz)

nextButton.addEventListener('click', loadNextQuestion)

previousButton.addEventListener('click', loadPreviousButton)


