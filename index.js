// Greeting
const greetingElement = document.getElementById("greeting");
const currentHour = new Date().getHours();
let greetingText = "Hello!";

if (currentHour < 6) {
  greetingText = "You're up early! (or are you up very late...)";
} else if (currentHour < 12) {
  greetingText = "Good morning!";
} else if (currentHour <= 17) {
  greetingText = "Good afternoon!";
} else if (currentHour <= 22) {
  greetingText = "Good evening!";
} else {
  greetingText = "Still awake?";
}

greetingElement.textContent = greetingText;
