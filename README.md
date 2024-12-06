# README
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

- Explanation of the recommended reverse chronological release ordering.

## [0.0.1] - 28/10/2024
### Added
- added README.md
- added gitignore
- added and completed Task 1

## [0.0.2] - 29/10/2024
### Added
- added and completed Task 2

### Task 1: Third-order Letter Approximation Model
- Creating a third-order letter approximation model from five English texts sourced from Project Gutenberg. texts will be processed by:
- Removing unnecessary content (preamble, postamble).
- Retaining only ASCII letters, full stops, and spaces.
- Converting all letters to uppercase.
- Count the occurrences of each trigram (a sequence of three characters) to build a model of the English language based on these texts.

### Task 2: Text Generation Using Trigram Model
- Initialize Generation: Start with the seed "TH".
- Generate Text: Use the last two characters as a prefix to find matching trigrams. Randomly select the next character based on the frequency (weight) of each trigram.
- Completion: Generate a total of 10,000 characters or stop if no matching trigrams are found.
- Output: Display the first 500 characters of the generated text as a sample.

### Task 3: Analyze your model
- Load English Words: Use the provided words.txt file containing a list of valid English words.
- Extract Words: Split the generated 10,000-character text into individual words and normalize them for comparison.
- Compare Words: Check each word from the generated text against the list of valid English words.
- Calculate Percentage: Compute the percentage of valid English words out of the total words in the generated text.
- Output: Display the total word count, valid word count, and percentage of valid English words.

### Task 4: Export Trigram Model as JSON
- Export Format: Saved the trigram model as a JSON file to allow easy sharing and reuse.
- Output File: trigrams.json contains the trigram model with:
Trigrams as keys.
Their occurrence counts as values.
- Export Process:
Used Python’s built-in json library.
Ensured the JSON file is formatted with indentation for readability.
- Usage:
The exported JSON file can be loaded into other applications or projects for further analysis or visualization.

### LICENSE
- This project uses publicly available texts from Project Gutenberg and follows their terms of use.