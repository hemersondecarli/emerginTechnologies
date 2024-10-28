# README
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

- Explanation of the recommended reverse chronological release ordering.

## [0.0.1] - 28/10/2024
### Added
- added README.md
- added gitignore

### Third-order Letter Approximation Model
- Creating a third-order letter approximation model from five English texts sourced from Project Gutenberg. texts will be processed by:
- Removing unnecessary content (preamble, postamble).
- Retaining only ASCII letters, full stops, and spaces.
- Converting all letters to uppercase.
- Count the occurrences of each trigram (a sequence of three characters) to build a model of the English language based on these texts.

