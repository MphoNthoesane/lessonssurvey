document.getElementById("today").innerHTML = new Date();
let name
let grade
let subject
let topic
let objectives
let enjoyment
let struggles
let show_button
let info_learner

document.getElementById("submit").onclick = function(){
    name = document.getElementById("name").value
    grade = document.getElementById("grade").value
    topic = document.getElementById("topic").value
    objectives = document.getElementById("objectives").value
    enjoyment = document.getElementById("enjoyment").value
    struggles = document.getElementById("struggles").value
    if(document.getElementById("mathematics").checked){
        subject = "Mathematics"
    }
    else if(document.getElementById("physics").checked){
        subject = "Physical Sciences"
    }

    document.getElementById("name-given").innerHTML = name
    document.getElementById("grade-given").innerHTML = grade
    document.getElementById("subject-given").innerHTML = subject
    document.getElementById("topic-given").innerHTML = topic
    document.getElementById("objectives-given").innerHTML = objectives
    document.getElementById("enjoyment-given").innerHTML = enjoyment
    document.getElementById("struggles-given").innerHTML = struggles

    show_button = document.getElementById("screenshot")
    info_learner = document.getElementById("all")
    show_button.style.visibility = "visible"
    info_learner.style.visibility = "hidden"
    
}