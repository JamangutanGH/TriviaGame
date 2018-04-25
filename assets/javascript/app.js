$(document).ready(function () {
    /*You'll create a trivia form with multiple choice or true/false options (your choice).
The player will have a limited amount of time to finish the quiz. 
The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.
Don't let the player pick more than one answer per question.
Don't forget to include a countdown timer.*/

    //targeting the html span in which the timer will be displayed
    var timerSpan = $("#timerSpan");
    //targeting the html span that the question is to be displayed
    var questionSpan = $("#questionSpan");
    //the starting value of the timer
    timerSpan = 30;

    //generate a timer condition
    // execute the countdown function 
    function countDown() {
        console.log();
        //set time and decuction
        timerSpan--;
        //target displays html element and updates its value
        $("#timerSpan").html(timerSpan);

        //setting a stop to the interval via an if conditional
        if (timerSpan === 0) {
            //stop the counter
            clearInterval(timerSpan);
            //trigger loss condition
        }

    }

    // setting a repeating function and passing its current state at 1 second interval 
    setInterval(countDown, 100);

    //populate the layout to show a question
    //establishing a question and the means to view it   
    var question = $("#questionSpan");

    //generate questions and answers
    //an array to store questions
    var questionArray = [
        "Where was the Statue of Liberty originally inteded to go?",
        //Egypt!, Russia, Spain, England
        "How long do elephants carry their pregnancies?",
        //1 year, 1.5 years, 2 years!, 2.5 years
        "Flowers grow faster if they are exposed to what?",
        //Movement, Music!, Moonlight, Television
        "The largest snail in the world is how big?",
        //Over 90 cm!, Over 100 cm, Over 80 cm, Over 60 cm
        "Before the invention of the eraser what was used to remove pencil?",
        //Bread!, Water, Wool, Lard
        "What is a group of Ferrets called?",
        //Business!, Troop, Gang, Pack
        "Where is the oldest bookshop in the world?",
        //Portugal!, England, Egypt, Italy
        "What are baby bunnies called?",
        //Kittens!, Pups, Buds, Chicks
        "The Beatles' first band name was?",
        //The Quarrymen!, Johnny and the Moondogs, The Bandits, The Pixies
        "Nintendo was originally what kind of company?"
        //Trading Card!, Comic Book, Clothing, Music
    ]

    //answer buttons with display
    var ansBtn1 = $("#answerSpan1");
    var ansBtn2 = $("#answerSpan2");
    var ansBtn3 = $("#answerSpan3");
    var ansBtn4 = $("#answerSpan4");

    //onlick event to select a a single answer

    //generate a win condition 

    //record wins and loses

});