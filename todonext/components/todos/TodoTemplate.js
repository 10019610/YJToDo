import TodoCreate from "./TodoCreate";
import TodoList from "./TodoList";
import Link from "next/link";

function TodoTemplate(props) {
  return (
    <section>
      <h2>Todo!</h2>
      <button>
        <Link href="/todos/create">작성</Link>
      </button>
      <TodoList todos={props.todos} />
    </section>
  );
}

export default TodoTemplate;
