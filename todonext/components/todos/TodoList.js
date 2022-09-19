import TodoItem from "./TodoItem";
import classes from "./Todo.module.css";

function TodoList(props) {
  return (
    <div className={classes.grid}>
      <ul>
        {props.todos.map((item) => (
          <TodoItem key={item.slug} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
