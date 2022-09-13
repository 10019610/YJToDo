import path from "path";
import fs from "fs/promises";
import Link from "next/link";
import YjBoardList from "../../components/yjBoard/YjBoardList";

function YjBoard(props) {
  const { boardData } = props;
  return (
    <div>
      <h1>YjBoard Page</h1>
      <YjBoardList></YjBoardList>
      {/* <ul>
        {boardData.map((board) => (
          <li key={board.id}>
            <div>{board.title}</div>
            <Link href={`/yjBoard/${board.id}`}>{board.content}</Link>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export async function getStaticProps(context) {
  const filePath = path.join(process.cwd(), "data", "dummy-data.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }

  if (data.boardData.length === 0) {
    return { notFound: true };
  }

  return {
    props: {
      boardData: data.boardData,
    },
    revalidate: 10,
  };
}

export default YjBoard;
