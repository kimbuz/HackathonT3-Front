import "./Card.css";
import { Link } from "react-router-dom";

export const Card = (props) => {
  return (
    <div className="movie">
      <Link to={`/detail/${props._id}`}>
        <div className="card">
          <img src={props.info.image_url} alt={props.title} />
        </div>
      </Link>
    </div>
  );
};
