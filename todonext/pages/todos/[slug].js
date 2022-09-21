import TodoContent from "../../components/todos/todo-detail/todo-content";
import { getTodoData, getTodosFiles } from "../../lib/todos-util";

function TodoDetailPage(props) {
  return <TodoContent todo={props.todo} />;
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const todoData = getTodoData(slug);

  return {
    props: {
      todo: todoData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const todoFilenames = getTodosFiles();

  const slugs = todoFilenames.map((fileName) => fileName.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default TodoDetailPage;
