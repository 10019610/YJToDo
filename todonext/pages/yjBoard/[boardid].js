function BoardIdPage(props) {
  return <h1>{props.id}</h1>;
}

export default BoardIdPage;

export async function getServerSideProps(context) {
  const { params } = context;

  const boardId = params.boardid;

  return {
    props: {
      id: "첫번째 게시글의 아이디는" + boardId + "입니다",
    },
  };
}
