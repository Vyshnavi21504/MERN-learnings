//example 1
document.getElementById("changeTextButton").addEventListener("click",function(){
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = 'the paragraph is changed';
});

//example 2
document.getElementById("highlightFirstCity").addEvenetListener("click",function(){
    let cities = document.getElementById("citiesList")
    cities.firstElementChild.classList.add("highlight");
});

//example 3
document.getElementById("changeOrder").addEventListener("click",function(){
    let coffeeType = document.getElementById("coffeeType");
    coffeeType.textContent = "Espresso";
    coffeeType.style.backgroundColor = "brown";
    coffeeType.style.padding = "5px";
});
//example 6
document.getElementById("clickMeButton").addEventListener("mouseover",function(){
    alert("chaicode");
});
//example 7
document.getElementById("teaList").addEventListener("click",function(event){
    if(event.target && event.target.maches(".teaItem")){
        alert("You selected" + ErrorEvent.target.textContent);
    }
});

//example 8(form handling)
document.getElementById("feedbackForm").addEventListener("submit", function(event){
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback);
    document.getElementById("feedbackDisplay").textContent = `Feedback is ${feedback}`
});
//example 9
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("domStatus").textContentt = "DOM fully Loaded";
});
//example 10 
document.getElementById("toggleHighligh").addEventListener("clcik",function(){
    let des = document.getElementById("descriptionText");
    des.classList.toggle("highlight");
});