import TodoItem from "./TodoItem";
import classes from "./Todo.module.css";

function TodoList(props) {
  const todos = props.todos;
  const removeTodo = props.removeTodo;

  return (
    <div className={classes.todoGrid}>
      {todos.map((todo, index) => (
        <TodoItem todo={todo} key={index} removeTodo={removeTodo} />
      ))}
    </div>
  );
}
export default TodoList;
