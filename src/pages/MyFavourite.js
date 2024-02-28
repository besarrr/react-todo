import { useContext } from "react";
import FavoritesContext from "../store/favourites-context";
import MeetUpList from "../components/MeetUpList/MeetUpList";

const MyFavourite = () => {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          color: "hsl(261, 95%, 8%)",
          padding: "20px 0",
          fontSize: "50px",
        }}
      >
        My Favourite
      </h1>
      <MeetUpList allMeetups={favoritesCtx.favorites} />
      {favoritesCtx.totalFavorites === 0 && (
        <p style={{ textAlign: "center", fontSize: "24px" }}>
          No favorites meetups!
        </p>
      )}
    </>
  );
};

export default MyFavourite;
