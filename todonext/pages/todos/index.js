import TodoTemplate from "../../components/todos/TodoTemplate";

const DUMMY_TODOS = [
  {
    title: "dummy title1",
    content: "dummy content1",
    image: "apple.jpg",
    date: "2022-09-19",
    slug: "test-Data1",
  },
  {
    title: "dummy title2",
    content: "dummy content2",
    image: "apple.jpg",
    date: "2022-09-19",
    slug: "test-Data2",
  },
  {
    title: "dummy title3",
    content: "dummy content3",
    image: "apple.jpg",
    date: "2022-09-19",
    slug: "test-Data3",
  },
  {
    title: "dummy title4",
    content: "dummy content4",
    image: "apple.jpg",
    date: "2022-09-19",
    slug: "test-Data4",
  },
];

function YjTodo() {
  return (
    <div>
      <h1>YjTodo</h1>
      <TodoTemplate todos={DUMMY_TODOS}></TodoTemplate>
    </div>
  );
}

export default YjTodo;
