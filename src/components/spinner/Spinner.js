import "./Spinner.css";
import { CircularProgress } from '@material-ui/core';

export const Spinner= () => {

  return (
    <div className="spinner-container">
        <CircularProgress color="primary" size={70}/>
    </div>
  );
}
