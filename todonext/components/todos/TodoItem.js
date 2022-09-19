import Link from "next/link";
import Image from "next/image";

function TodoItem(props) {
  const { title, content, image, date, slug } = props.item;

  const formDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/todos/${slug}/${image}`;
  const linkPath = `/todos/${slug}`;

  return (
    <li>
      <Link href={linkPath}>
        <a>
          <div>
            <Image src={imagePath} alt={title} width={300} height={200} />
          </div>
          <div>
            <h3>{title}</h3>
            <div>{content}</div>
            <time>{formDate}</time>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default TodoItem;
