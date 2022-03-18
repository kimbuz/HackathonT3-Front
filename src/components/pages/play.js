import { useParams } from "react-router-dom";
import Iframe from "react-iframe";
import { Link } from "react-router-dom";

import "./play.css";

export const Play = () => {
  const { URLvideo } = useParams();
  console.log(URLvideo);
  return (
    <div>
      <div className="playerMenu">
        <Link to={`/`}>
          <div id="buttonboxback">
          </div>
        </Link>
      </div>
      <div className="playerName">
        <Iframe
          url={`https://www.youtube.com/embed/${URLvideo}`}
          width="100%"
          height="100%"
          id="myId"
          className="playerEngine"
          display="initial"
          position="relative"
          allowFullScreen
          allow="autoplay"
        />
      </div>
    </div>
  );
};
