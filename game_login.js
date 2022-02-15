function addUser(){
    var p1 = document.getElementById("p_1_name").value;
    var p2 = document.getElementById("p_2_name").value;
    localStorage.setItem("player1" ,p1);
    localStorage.setItem("player2" ,p2);
    window.location = "game_page.html";
}
