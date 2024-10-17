//Modify the greet function to have a default argument of "Guest" for the name parameter. This means that if no name is provided, 
//the function should return "Hello, Guest!".


function greet(name = "Guest") {
    return ("Hello, " + name + "!");
}
console.log(greet()); 
