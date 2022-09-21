import Link from "next/link";
import Image from "next/image";

function TodoItem(props) {
  // const { title, content, image, date, slug } = props.item;
  // const { title, content } = props.todos;
  console.log(props.todos);

  // const formDate = new Date(date).toLocaleDateString("en-US", {
  //   day: "numeric",
  //   month: "long",
  //   year: "numeric",
  // });

  // const imagePath = `/images/todos/${slug}/${image}`;
  // const linkPath = `/todos/${slug}`;

  return (
    <div>
      {props.todos.map((item, index) => {
        return (
          <div key={index}>
            {item.title} - {item.content}
          </div>
        );
      })}
    </div>
    // <li>
    //   <Link href={linkPath}>
    //     <a>
    //       <div>
    //         <Image src={imagePath} alt={title} width={300} height={200} />
    //       </div>
    //       <div>
    //         <h3>{title}</h3>
    //         <div>{content}</div>
    //         <time>{formDate}</time>
    //       </div>
    //     </a>
    //   </Link>
    // </li>
  );
}

export default TodoItem;
