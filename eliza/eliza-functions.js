
function getElizaResponse(input) {
    input = input.toLowerCase();
    
    // Greeting 
    if (input.includes("hello") || input.includes("hi")) {
        return getRandomResponse([
            "Hello! How are you feeling today?",
            "Hi there! What's on your mind?",
            "Greetings! How can I help you today?"
        ]);
    }

    // Family-related responses
    if (input.includes("mother") || input.includes("father")) {
        return getRandomResponse([
            "Tell me more about your family.",
            "How do you feel about your parents?",
            "Are your parents supportive of you?"
        ]);
    }

    // Emotional 
    if (input.includes("i feel")) {
        return getRandomResponse([
            "Why do you feel that way?",
            "What do you think is causing those feelings?",
            "How long have you been feeling this way?"
        ]);
    }

    // Personal 
    if (input.includes("i am") || input.includes("i'm")) {
        return getRandomResponse([
            "Why do you say that about yourself?",
            "How does that make you feel?",
            "Can you elaborate on that?"
        ]);
    }

    // Responses to questions
    if (input.includes("why")) {
        return getRandomResponse([
            "Why do you think that is?",
            "That's an interesting question. What do you think?",
            "Sometimes there isn't a clear answer. What do you feel about it?"
        ]);
    }

    if (input.includes("what")) {
        return getRandomResponse([
            "What do you think?",
            "Can you tell me more about that?",
            "Why is that important to you?"
        ]);
    }

    // Memory-related inputs
    if (input.includes("remember")) {
        return getRandomResponse([
            "I am here to listen. What would you like me to remember?",
            "What memory are you thinking about right now?",
            "How does that memory make you feel?"
        ]);
    }

    // fallback
    return getRandomResponse([
        "Can you elaborate on that?",
        "That's interesting. Tell me more.",
        "Why do you think so?",
        "I'm not sure I understand. Could you explain further?",
        "Let's explore that a bit more. What else comes to mind?"
    ]);
}

// Helper function to select a random response from an array
function getRandomResponse(responses) {
    const index = Math.floor(Math.random() * responses.length);
    return responses[index];
}
