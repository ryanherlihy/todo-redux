import {List} from 'immutable';

export default function(state = List(), action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat({
        text: action.text,
        completed: false
      })
    case 'COMPLETE_TODO':
      return state.update(action.id, (todo) => {
        return {text: todo.text, completed: !todo.completed}
      })
  }
  return state;
}
