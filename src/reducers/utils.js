export default {
  createTodo(title, done, id) {
    return {
      title,
      done,
      editing: false,
      id
    };
  }
};
