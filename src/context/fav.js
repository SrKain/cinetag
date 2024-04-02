import { createContext, useContext, useState } from "react";

export const FavContext = createContext();
FavContext.displayName = "Favoritos";

export default function FavProvider({ children }) {
  const [fav, setFav] = useState([]);
  return (
    <FavContext.Provider value={{ fav, setFav }}>
      {children}
    </FavContext.Provider>
  );
}

export function useFavContext() {
  const { fav, setFav } = useContext(FavContext);

  function adicionarFav(newFav) {
    const favRepeat = fav.some((item) => item.id === newFav.id);
    let novaLista = [...fav];
    if (!favRepeat) {
      novaLista.push(newFav);
      return setFav(novaLista);
    }
    novaLista.splice(novaLista.indexOf(newFav), 1);
    return setFav(novaLista);
  }

  return{fav, adicionarFav}
}
