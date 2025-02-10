# React To-Do List

A simple to-do list application built with React. This project demonstrates how to use React's `useState` hook and controlled components to manage and display a list of tasks.

## Features

- **Add Tasks**: Type a task into the input field and click the "Add" button to append it to your list.
- **Clear Input**: The input field is automatically cleared after adding a task.
- **Display List**: All tasks are rendered in an organized list.

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- **Node.js** (version 12 or higher recommended)
- **npm** (or **yarn** as an alternative)

### Installation

   ```bash
   git clone https://github.com/yourusername/react-todo-list.git
   cd react-todo-list
   npm i
```
### Running the project
```bash
  npm run dev
```
Open your browser and navigate to http://localhost:3000 to see the application in action.
   
## Project stracture
react-todo-list/
├── public/
│   └── index.html
└── src/
    ├── components/
    │   ├── Add.js         # Component for adding a new task
    │   ├── Heading.js     # Component for displaying the title/heading
    │   └── List.js        # Component for displaying the list of tasks
    ├── App.js             # Main application component that manages state
    └── index.js           # Entry point of the React application

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments
[React Documentation](https://react.dev/)
Tutorials and community examples that helped shaping this project

Feel free to adjust the content as needed for your project details or add any additional sections such as contributing guidelines or more advanced usage instructions.
