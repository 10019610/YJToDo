function TodoItem(props) {
  const todos = props.todo;
  console.log(todos);
  return <div>{todos.content}</div>;
}
export default TodoItem;
