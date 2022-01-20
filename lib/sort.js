const compareByTitle = (itemA, itemB) => {
  let titleA = itemA.title.toLowerCase();
  let titleB = itemB.title.toLowerCase();

  if (titleA < titleB) {
    return -1;
  } else if (titleA > titleB) {
    return 1;
  } else {
    return 0;
  }
}

module.exports = {

  sortTodos(list) {
    let undone = list.todos.filter(todo => !todo.isDone());
    let done = list.todos.filter(todo => todo.isDone());
  
    undone.sort(compareByTitle);
    done.sort(compareByTitle);
  
    return [].concat(undone, done);
  },
  
  sortTodoLists(lists) {
    let undone = lists.filter(todoList => !todoList.isDone());
    let done = lists.filter(todoList => todoList.isDone());
  
    undone.sort(compareByTitle);
    done.sort(compareByTitle);
  
    return [].concat(undone, done);
  },

};