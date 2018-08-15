var modal1 = document.getElementById('project_1_modal');

var btn = document.getElementById("project_1_btn");

var span = document.getElementsByClassName("close_modal")[0];

btn.onclick = function() {
    modal1.style.display = "block";
}

span.onclick = function() {
    modal1.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal1 || event.target === modal2 || event.target === modal3 || event.target === modal4 ) {
        modal1.style.display = "none";
        modal2.style.display = "none";
        modal3.style.display = "none";
        modal4.style.display = "none";
    }
}

var modal2 = document.getElementById('project_2_modal');

var btn2 = document.getElementById("project_2_btn");

var span2 = document.getElementsByClassName("close_modal")[1];

btn2.onclick = function() {
    modal2.style.display = "block";
}

span2.onclick = function() {
    modal2.style.display = "none";
    
}

var modal3 = document.getElementById('project_3_modal');

var btn3 = document.getElementById("project_3_btn");

var span3 = document.getElementsByClassName("close_modal")[2];

btn3.onclick = function() {
    modal3.style.display = "block";
}

span3.onclick = function() {
    modal3.style.display = "none";
    
}

var modal4 = document.getElementById('project_4_modal');

var btn4 = document.getElementById("project_4_btn");

var span4 = document.getElementsByClassName("close_modal")[3];

btn4.onclick = function() {
    modal4.style.display = "block";
}

span4.onclick = function() {
    modal4.style.display = "none";
    
}

