import axios from "axios";
import { useEffect, useState } from "react";
import MainDashBoardForm from "../../mainDashBoard/MainDashBoardForm";
import MainDashBoardList from "../../mainDashBoard/MainDashBoardList";

const MainDashBoardPage = (props) => {
  const [items, setItems] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const search = async () => {
    setIsLoading(true);
    const response = await axios.get("http://localhost:8090/mainDashBoard/list")
    setItems(response.data);
    setIsLoading(false);
  }

  useEffect(() => {
    search();
  }, [])

  if (isLoading) {
    return (
      <section className="isLoading">
        <p>Loading...</p>
        <h2>Loaindg</h2>
      </section >
    )
  }

  return (
    <div>
      <h1>DashBoard</h1>
      <MainDashBoardForm onSearch={search}></MainDashBoardForm>
      <MainDashBoardList items={items} onSearch={search} onShowUpdateModal={props.onShowUpdateModal}></MainDashBoardList>
    </div>
  );
};

export default MainDashBoardPage;
