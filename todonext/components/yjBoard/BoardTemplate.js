import Link from "next/link";
import classes from "./Board.module.css";
import BoardList from "./BoardList";

function BoardTemplate() {
  return (
    <div className={classes.grid}>
      <section>
        <h2>YJ Board!</h2>
        <button>
          <Link href="/yjBoard/Create">글 작성</Link>
        </button>
        <BoardList />
      </section>
    </div>
  );
}

export default BoardTemplate;
