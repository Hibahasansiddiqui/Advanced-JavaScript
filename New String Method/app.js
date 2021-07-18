/* NEW STRING METHODS
    - repeat
    - startswith
    - endswith
    - includes*/

//Repeat String Method
window.onload = function() {

    let str = " Goodbye "
    console.log (str.repeat(99))
    
}

//StartsWith String method
window.onload = function() {

    let x = "Goodbye"
    console.log (x.startsWith("bye")) //false
    console.log (x.startsWith("bye", 4)) //true
    console.log (x.startsWith("good")) //false
    console.log (x.startsWith("Good")) //true

}

//EndsWith String Method
window.onload = function() {

    let ends = "Goodmorning"
    console.log (ends.endsWith("Good")) //false
    console.log (ends.endsWith("Good", ends.length - 7)) //true
    console.log (ends.endsWith("morning")) //true
    console.log (ends.endsWith("g")) //true

}

//To check startsWith method with "If" Statements
window.onload = function() {
    var youSay = "Goodbye"
    if (youSay.startsWith("Goodbye")) {
        var iSay = "See you on the other side"
    }

    console.log(`You say: ${youSay}, I say: ${iSay}`)
}

//To check include method
window.onload = function() {
    let example = "My name is Hiba and i'm not a terrorist"
    console.log(example.includes("Hiba"))//true
    console.log(example.includes("are"))//false
    console.log(example.includes("is a"))//false
    console.log(example.includes("Terrorist")) //false
    console.log(example.includes("i'm not")) //true

}
