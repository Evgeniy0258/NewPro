import { bigWrapper, wrapperRow, deleteAllButton, addTodoTextField, addTodoButton } from "./components"
import { getTodo, createTodo, deleteAll } from "./function"

const root = document.getElementById('root')

wrapperRow.append(deleteAllButton, addTodoTextField, addTodoButton)


bigWrapper.append(wrapperRow)
root.append(bigWrapper)

addTodoButton.addEventListener('click', createTodo)

deleteAllButton.addEventListener('click', deleteAll)


// ----------------- Render section -----------------

// let todos = TodoController.generateTodos(2);
