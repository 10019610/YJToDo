import TodoCreate from "./TodoCreate";
import TodoList from "./TodoList";

function TodoTemplate(props) {
  return (
    <section>
      <TodoCreate />
      <h2>Todo!</h2>
      <TodoList todos={props.todos} />
    </section>
  );
}

export default TodoTemplate;
