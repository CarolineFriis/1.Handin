//Mandatory:

//String
//Number
//Array
//Object
//Callback functions
//Functions
//7 EVENTLISTENERS: CLICK, MOUSEOVER, MOUSEOUT, DOUBLE CLICK, KEY DOWN, KEY UP, KEYPRESS
//

let phoneinput = document.querySelector("#phonenumber");
let image = document.querySelector("#katImg");
let button = document.querySelector("#button-id"); 
let body = document.querySelector("body")
let mouseOverButton = document.querySelector("#buttonMouseOverId")
let input = document.querySelector("#input")
let submit = document.querySelector("#submitButton")
let keypress = document.querySelector("#keypress")
let faves = document.querySelector("#faves")
let keydown = document.querySelector("#keypressdown")


//Eventlistener - KeyDown + Call back function
//Tilføj farver i stylesheet
//Virker
phoneinput.addEventListener("keydown", function(){
 
     if(phoneinput.value.length <=6){
          phoneinput.classList.add("bg-red")
     } else {
         phoneinput.classList.remove("bg-red")
         phoneinput.classList.add("if-green")
     }
 })

 //Mouseover event
 //Virker
mouseOverButton.addEventListener("mouseover", function(){
    //alert("Lets do a mouseover")
    body.classList.add("bg-red")
})

// Mouseout event
//Virker
mouseOverButton.addEventListener("mouseout", function(){
    body.classList.remove("bg-red")
})

//Click eventlistener
//Virker
button.addEventListener("click", function(){
    alert("you clicked!")
})

//Double click eventlistener
//virker
image.addEventListener("dblclick", function(){
    alert("you clicked the image twice")
});

//Keypress
//virker
keypress.addEventListener("keypress", function(){
    alert("You pressed pressed a key, congrats!")
});

//Object + array + string + number
let favesobject ={
    color: "green", 
    num: 7,
    animal: "elephant",
    books: ["Palmtrees in the snow", "Half of a yellow sun", "Americanah"],
    movie: "Palmtrees in the snow",
    person: "Dunja <3"
}

faves.addEventListener("click", function(){
        favesobject.books.forEach((element)=>{
            alert("One of my favorite books are: " + element);
    }); 
});

//KEYDOWN
keydown.addEventListener("keydown", function(keydownfunction){
    keydown.classList.add("bg-red");
});

//KEYUP
keydown.addEventListener("keyup", function(keyupfunction){
    keydown.classList.remove("bg-red");
});