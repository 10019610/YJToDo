import TodoTemplate from "../../components/todos/TodoTemplate";
import { getAllTodos } from "../../lib/todos-util";

function YjTodo(props) {
  return (
    <div>
      <h1>YjTodo</h1>
      <TodoTemplate todos={props.todos}></TodoTemplate>
    </div>
  );
}
export function getStaticProps() {
  const allTodos = getAllTodos();

  return {
    props: {
      todos: allTodos,
    },
  };
}

export default YjTodo;
