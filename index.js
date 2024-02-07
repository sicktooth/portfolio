var myName = ("Samuel");
var yourName = prompt ("What is your name?");
if (yourName == "" || yourName == null) {
    yourName = "Friend";
} else {
    yourName = yourName;
}
var CapFName = yourName.slice(0,1);
CapFName = CapFName.toUpperCase();
var RestName = yourName.slice(1, yourName.length);
RestName = RestName.toLowerCase();
var YourName = CapFName + RestName;
alert ("My name is " + myName + ", welcome to my world " + YourName + " 😃");