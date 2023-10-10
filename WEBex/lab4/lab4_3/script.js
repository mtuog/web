document.addEventListener("DOMContentLoaded", function() {
    const greetings = [
        "Hello !",
        "Chào bạn!",
        "HI!",
        "Welcome!"

    ];

    const randomIndex = Math.floor(Math.random() * greetings.length);
    const randomGreeting = greetings[randomIndex];

    const greetingElement = document.getElementById("greeting");
    greetingElement.textContent = randomGreeting;
});
