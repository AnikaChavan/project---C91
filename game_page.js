var p1Name = localStorage.getItem("player1");
var p2Name = localStorage.getItem("player2");

var p1Score = 0;
var p2Score = 0;

var q_turn = "player1";
var a_turn = "player2";

document.getElementById("player1Name").innerHTML = p1Name + ":";
document.getElementById("player2Name").innerHTML = p2Name + ":";

document.getElementById("player1Score").innerHTML = p1Score;
document.getElementById("player2Score").innerHTML = p2Score;

document.getElementById("playerQTurn").innerHTML = "Question Turn : " + p1Name;
document.getElementById("playerAnsTurn").innerHTML = "Answer Turn : " + p2Name;

function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
	console.log(number1 + "x" + number2);
    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn-btn-info' onclick='check()'> Check </button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

