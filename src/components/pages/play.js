import { useParams } from "react-router-dom";
import Iframe from "react-iframe";
import { Link } from "react-router-dom";

export const Play = () => {
  const { URLvideo } = useParams();
  console.log(URLvideo);
  return (
    <div>
      <Link to={`/`}>
        <button>Salir</button>
      </Link>
      <Iframe
        url={`https://www.youtube.com/embed/${URLvideo}`}
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
      />
    </div>
  );
};
