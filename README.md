# TODO_APP

The application is a to-do list developed using the React library. It's designed to allow users to manage a list of pending tasks. The main functionality is divided into various components and files for an organized structure:

Context and State: A React context (TodoProvider) is used to manage the application's state. This includes tracking the task list, the number of completed tasks, task search, and opening or closing a modal. The state is shared with child components through this context.

Data Persistence: A custom hook (useLocalStorage) is used to manage local storage of the task list data. This ensures that data is preserved between user sessions.

Task Functionality: The application offers functions to add new tasks to the list, mark tasks as completed, and delete existing tasks.

User Interface: The user interface (UI) is designed to display the task list, allow searches, and show statistics such as the total number of tasks and completed tasks.

Entry Point: The primary entry point of the application utilizes React's "concurrent rendering" approach to optimize the rendering process and provide a smoother user experience.

Altogether, this React to-do list application employs a modular approach to handle state, persistence, and application functionality. It provides an intuitive user interface to manage pending tasks, maintains data through local storage, and leverages React's efficient rendering capabilities.

# Screenshot
![Captura](https://github.com/AndresF-SanchezG/TODOS_APP/assets/113924667/05fdca1d-48db-4e58-bbbf-d736c17f1d02)

# Targets

- Create custom hooks for event handling and storage
- Build your first major project with React.js.
- Manage local states with React Hooks and global states with React Context.

# Links

- Live Site URL: [Vercel deployed app](https://todos-app-orcin.vercel.app/)

# Author

- Tutor - Juan Castro [@fjuandc](https://twitter.com/fjuandc)
- School - [Platzi](https://www.platzi.com)
- Curse - [Curso de React.js](https://platzi.com/cursos/react/)
- Github - [@AndresF-SanchezG](https://github.com/AndresF-SanchezG)

