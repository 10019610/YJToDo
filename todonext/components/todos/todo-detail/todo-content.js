import ReactMarkdown from "react-markdown";

import TodoHeader from "./todo-header";

function TodoContent(props) {
  const { todo } = props;
  const imagePath = `/images/todos/${todo.slug}/${todo.image}`;

  const customRenderers = {
    image(image) {
      return (
        <Image
          src={`/images/todos/${todo.slug}/${image.src}`}
          alt={image.alt}
          width={100}
          height={150}
        />
      );
    },
  };

  return (
    <article>
      <TodoHeader title={todo.title} image={imagePath} />
      <ReactMarkdown renderers={customRenderers}>{todo.content}</ReactMarkdown>
    </article>
  );
}
export default TodoContent;
