import TodoItem from "./TodoItem";
import classes from "./Todo.module.css";

function TodoList(props) {
  const todos = props.todos;

  return (
    <div className={classes.todoGrid}>
      {todos.map((todo, index) => (
        <TodoItem todo={todo} key={index} />
      ))}
    </div>
  );
}
export default TodoList;
