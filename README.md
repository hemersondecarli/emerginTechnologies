# **Project: Trigram-Based Text Generation and Analysis**

This project focuses on building a trigram-based text generation model, analyzing its output, and exporting the model for reuse. The generated text is created using third-order letter approximation and evaluated for quality using a dictionary of valid English words.

## **Changelog**
This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html) and follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

### **Added**
- Initial README.md file.
- `.gitignore` file for project organization.
- Completed implementation of:
  - **Task 1**: Building the trigram model.
  - **Task 2**: Text generation using the model.
  - **Task 3**: Analyzing the generated text for valid English words.
  - **Task 4**: Exporting the model as JSON.

---

## **Tasks Overview**

### **Task 1: Third-Order Letter Approximation Model**
- **Objective**: Create a trigram model based on five English texts sourced from Project Gutenberg.
- **Steps**:
  1. **Text Preprocessing**:
     - Remove unnecessary content (preamble, postamble).
     - Retain only ASCII letters, full stops, and spaces.
     - Convert all letters to uppercase.
  2. **Trigram Model Creation**:
     - Count the occurrences of each trigram (a sequence of three characters).
     - Store the trigram counts in a dictionary to model the English language.

---

### **Task 2: Text Generation Using Trigram Model**
- **Objective**: Generate a 10,000-character string based on the trigram model.
- **Steps**:
  1. **Initialize**: Start with the seed `"TH"`.
  2. **Generate**: Use the last two characters as a prefix to find matching trigrams.
  3. **Weighted Selection**: Randomly select the next character based on trigram frequencies.
  4. **Complete**: Generate a total of 10,000 characters or stop if no matching trigrams are found.
  5. **Output**: Display the first 500 characters of the generated text as a sample.

---

### **Task 3: Analyze Your Model**
- **Objective**: Evaluate the quality of the generated text by calculating the percentage of valid English words.
- **Steps**:
  1. **Load English Words**: Use the `words.txt` file containing a list of valid English words.
  2. **Extract Words**: Split the generated text into individual words and normalize them for comparison.
  3. **Validate Words**: Check each word against the list of valid English words.
  4. **Calculate**: Compute the percentage of valid English words out of the total words in the generated text.
  5. **Output**: Display the total word count, valid word count, and percentage of valid English words.

---

### **Task 4: Export Trigram Model as JSON**
- **Objective**: Save the trigram model as a JSON file for reuse.
- **Steps**:
  1. **Export Format**: Save the trigram model as `trigrams.json` with:
     - Trigrams as keys.
     - Their occurrence counts as values.
  2. **Process**:
     - Use Python’s built-in `json` library to export the dictionary.
     - Format the JSON file with indentation for readability.
  3. **Output**: The JSON file can be loaded into other applications or projects for further analysis or visualization.

---

### **Eliza Chatbot**
- **Objective**: Build a simple chatbot that mimics conversations using pattern matching.
- **Features**:
  1. **Interactive Interface**:
     - user-friendly layout using HTML and CSS.
     - Text input box and chat window to display the conversation history.
  2. **Conversational Logic**:
     - Implemented in plain JavaScript (`eliza-functions.js`).
     - Responds to keywords like "hello", "mother".
     - Includes randomized responses for dynamic interaction.
  3. **Deployment**:
     - Hosted via GitHub Pages for public access.

- **Live Demo**:
  [Eliza Chatbot](https://hemersondecarli.github.io/emerginTechnologies/)

---

## **License**
This project uses publicly available texts from Project Gutenberg and adheres to their terms of use.


