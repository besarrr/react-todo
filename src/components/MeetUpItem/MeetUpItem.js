import { useContext, useState, useEffect } from "react";
import styles from "./MeetUpItem.module.css";
import FavoritesContext from "../../store/favourites-context";

const MeetUpItem = (props) => {
  const favoriteContext = useContext(FavoritesContext);

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(favoriteContext.itemIsFavorite(props.itemData.id));
  }, [favoriteContext, props.itemData.id]);

  const handleAddToFavourites = () => {
    if (isFavorite) {
      favoriteContext.removeFavorite(props.itemData.id);
    } else {
      favoriteContext.addFavorite(props.itemData);
    }
  };

  return (
    <div className={styles.container}>
      <img
        className={styles.cardImage}
        height={300}
        width={500}
        src={props.itemData.image}
        alt={props.itemData.title}
      />

      <h1>{props.itemData.title}</h1>
      <p>{props.itemData.address}</p>
      <p>{props.itemData.description}</p>

      <button onClick={handleAddToFavourites}>
        {isFavorite ? "Remove from Favorites" : "To Favorites"}
      </button>
    </div>
  );
};

export default MeetUpItem;
