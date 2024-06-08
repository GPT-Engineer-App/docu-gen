# docu-gen

Use this project as a starting point: https://github.com/codeacme17/examor

Build a simplified web application for document-based question generation. The application should have the following features:

1. **Document Upload:**
   - Allow users to upload documents in various formats (e.g., PDF, DOCX, TXT).
   - Extract the text content from the uploaded documents.

2. **Question Generation:**
   - Use a language model to generate relevant multiple choice questions based on the extracted text.
   - Focus on generating insightful and thought-provoking questions that encourage deeper understanding of the document's content.

3. **Question Display:**
   - Present the generated questions to the user in a clear and organized format.

4. **Optional Enhancements:**
   - Consider allowing users to select the number of questions to generate.

**Technical Requirements:**

- Use Python as the backend language.
- Use FastAPI for building the API.
- Use a suitable database (e.g., MySQL, PostgreSQL) for storing documents and generated questions.
- Utilize a language model API (e.g., OpenAI) for question generation.
- Use LangChain or a similar framework to simplify interactions with the language model.

**Additional Considerations:**

- Implement error handling to manage invalid file uploads and other potential issues.
- Consider security measures to protect against malicious file uploads.
- Implement basic frontend components (e.g., HTML, CSS, JavaScript) to interact with the backend API.
- Focus on a clean and modular code structure for maintainability.

Please generate the code for this project.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/docu-gen.git
cd docu-gen
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
