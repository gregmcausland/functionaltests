import { createVDOMNode, hJSX } from './vdom';
import { createApplicationStore } from './applicationstore';
import { addTodo } from './actions';
import createDelegator from 'dom-delegator';

import applicationReducer from './applicationReducer';

/** @jsx hJSX */

const { update, subscribe, getState } = createApplicationStore(applicationReducer);
const delegate = createDelegator();

function renderTodoList(todos = []) {
  const labels = todos.map(todo => <li className="js-todo">{todo}</li>);
  return (
    <div>
      <h1>Todos</h1>
      <form>
        <input type="text" className="js-new-todo-input" />
        <button className="js-new-todo">Add todo</button>
      </form>
      <ul>{labels}</ul>
    </div>
  );
}

function createTodoListApp(targetSelector) {
  const appNode       = document.querySelector(targetSelector);
  const todosDOM      = createVDOMNode(appNode);

  todosDOM.render(renderTodoList());
  subscribe(state => todosDOM.render(renderTodoList(state.todos)));

  function handleNewTodo(evt) {
    evt.preventDefault();
    const newTodoInput  = document.querySelector('.js-new-todo-input');
    const todoText      = newTodoInput.value;

    update(addTodo(todoText));
    newTodoInput.value = "";
  }
}

window.todoListApp = createTodoListApp('#todosApp');