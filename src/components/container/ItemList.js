import { RecipeReviewCard } from "../card/Card";
import { Spinner } from "../spinner/Spinner";

export const ItemList = ( { coleccion } ) => {

  return (
      <div className="container">
        <section className="movie-container">
          <div className="movie-section">
            {coleccion ? (
              coleccion.map((item) => <RecipeReviewCard {...item} />)
            ) : (
              <Spinner/>
            )}
          </div>
        </section>
      </div> 
  );
}