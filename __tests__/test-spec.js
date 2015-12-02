jest.dontMock('../src/actions.js');
jest.dontMock('../src/applicationReducer.js');

const addTodo = require('../src/actions.js').addTodo;
const todos = require('../src/applicationReducer.js').todos;

describe('Action to add a new todo item', () => {
    const todoText = 'Unique text';
    const todoAction = addTodo(todoText);
    it('should have an object type of ADD_TODO', () => {
        expect(todoAction.type).toBe('ADD_TODO');
    });
    it('should have a todo property to match the argument', () => {
        expect(todoAction.todo).toBe(todoText);
    });
});

describe('The todos reducer', () => {
    const state = ['asdqwe', 'asdzxc', 'zxcqwe']
    const savedOriginalState = state;
    const newItem = 'New item';
    const updatedState = todos(state, addTodo(newItem));

    it('should successfully add the new todo to the retured array', () => {
        expect(updatedState.length).toBe(4);
        expect(updatedState.reduce((a, b) => (a === newItem || b === newItem))).toBe(true);
    });

    it('should not mutate the old state', () => {
        // Compare arrays.
        const matchedItems = savedOriginalState.filter((item, index) => item === state[index]).length;
        const equalLength = (state.length === savedOriginalState.length);
        expect(equalLength).toBe(true);
        expect(matchedItems).toBe(3);
    });
});