// Function to generate responses for the ELIZA chatbot.
function getElizaResponse(input) {
    input = input.toLowerCase(); 
    if (input.includes("hello") || input.includes("hi")) {
        return "Hello! How are you feeling today?";
    } else if (input.includes("mother") || input.includes("father")) {
        return "Tell me more about your family.";
    } else if (input.includes("i feel")) {
        return "Why do you feel that way?";
    } else {
        return "Can you elaborate on that?";
    }
}
