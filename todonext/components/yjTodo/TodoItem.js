function TodoItem(props) {
  const todos = props.todo;

  var objId = todos.id;

  return <div>{todos.content}</div>;
}
export default TodoItem;
