import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

export function FavoritesContextProvider({ children }) {
  const [favoritesMeetups, setFavoritesMeetups] = useState([]);

  const addFavorite = (favoriteMeetup) => {
    console.log("favoriteMeetup", favoriteMeetup);
    setFavoritesMeetups([...favoritesMeetups, favoriteMeetup]);
  };

  const removeFavorite = (meetupId) => {
    const filteredMeetups = favoritesMeetups.filter(
      (meetup) => meetup.id !== meetupId
    );
    setFavoritesMeetups(filteredMeetups);
  };

  const itemIsFavorite = (meetupId) => {
    return favoritesMeetups.some((meetup) => meetup.id === meetupId);
  };

  const context = {
    favorites: favoritesMeetups,
    totalFavorites: favoritesMeetups.length,
    addFavorite,
    removeFavorite,
    itemIsFavorite,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
