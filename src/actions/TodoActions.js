export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    text
  }
}

export function completeTodo(id) {
  return {
    type: 'COMPLETE_TODO',
    id
  }
}
