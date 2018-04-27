$(document).ready(function () {

    //targeting the html span in which the timer will be displayed
    var timerSpan = $("#timerSpan");

    var winSpan = $("#winSpan");
    var lossSpan = $("#lossSpan");

    //targeting the html span that the question is to be displayed
    var questionSpan = $("#questionSpan");

    //the starting value of the timer
    timerSpan = 30;



    //record wins and loses
    //creating lossCounter and setting its value to 0
    var lossCounter = 0;

    //setting the winCounter at 0
    var winCounter = 0;

    // setting a repeating function and passing its current state at 1 second interval 
    var breakInterval = setInterval(countDown, 1000);

    //execute the countdown function 
    function countDown() {

        //set time and decuction
        timerSpan--;
        //target displays html element and updates its value
        $("#timerSpan").text(timerSpan);

        //setting a stop to the interval via an if conditional
        if (timerSpan === 0) {
            //stop the counter
            console.log("breakInterval ID = ", breakInterval);
            //break interval for function countDown 
            clearInterval(breakInterval);
            //trigger loss condition
            alert("Time is up, check your results below!");

        }

    }

    // run countDown() with a varibale that can be cleared upon conditional
    breakInterval;

    //populate the layout to show a question
    //establishing a question and the means to view it   
    var question = $("#questionSpan");

    //setting the function for radioClick() to record win/loss
    var radioClickF = function () {
        console.log("I've been activated");
        lossCounter++;
        console.log(lossCounter);
        //setting lossCounter to be displayed in the lossSpan as text
        $("#lossSpan").html(lossCounter);
    };

    var radioClickT = function () {
        console.log("I've been activated");
        winCounter++;
        console.log(winCounter);
        //setting lossCounter to be displayed in the lossSpan as text
        $("#winSpan").text(winCounter);

    };

    //onlick event to select record right/wrong guesses
    $("input:radio[value=incorrect]").on("click", radioClickF);
    $("input:radio[value=correct]").on("click", radioClickT);




    //create a hidden display that unhides upon timer exhaustion

    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function () {
        modal.style.display = "block";
        clearInterval(breakInterval);
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }



});