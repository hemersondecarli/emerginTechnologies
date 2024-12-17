// eliza.js

document.getElementById("sendButton").addEventListener("click", handleUserInput);

function handleUserInput() {
    const userInput = document.getElementById("userInput").value.trim();
    if (userInput) {
        addMessage("You: " + userInput);
        const response = getElizaResponse(userInput); // Call the external function
        addMessage("ELIZA: " + response);
        document.getElementById("userInput").value = "";
    }
}

function addMessage(message) {
    const conversation = document.getElementById("conversation");
    const messageElement = document.createElement("div");
    messageElement.textContent = message;
    conversation.appendChild(messageElement);
    conversation.scrollTop = conversation.scrollHeight;
}
