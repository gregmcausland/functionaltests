export function createApplicationStore(reducer, state = {}) {
  const subscriptions = [];
  const actionHistory = [];
  const initialState = state;

  let currentState = state;

  return { update, getState, subscribe }

  function update(action) {
    currentState = reducer(currentState, action);
    actionHistory.push(action);

    subscriptions
      .filter(item => (typeof item) === 'function')
      .forEach(item => item(currentState));

    return currentState;
  }

  function getState() {
    return currentState;
  }

  function subscribe(subscription) {
    subscriptions.push(subscription);
    return subscriptions;
  }
}