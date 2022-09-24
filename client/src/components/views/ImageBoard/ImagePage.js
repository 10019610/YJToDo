import { Link } from "react-router-dom";
import ImageList from "../../ImageBoard/ImageList";

const ImagePage = () => {
  return (
    <div>
      <Link to="/image/create">
        <button>이미지 추가</button>
      </Link>

      <ImageList />
    </div>
  );
};
export default ImagePage;
