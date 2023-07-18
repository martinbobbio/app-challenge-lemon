import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

/**
 * Hook that facility global contexts calls.
 *
 * @return useAsyncStorageResponse
 */
const useAsyncStorage = () => {
  const [favorites, _setFavorites] = useState<string[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener("state", () => {
      getFavorites().then((v: string[]) => _setFavorites(v));
    });

    return () => {
      unsubscribe();
    };
  }, [navigation]);

  const setFavorite = async (value: string) => {
    try {
      const favorites = await AsyncStorage.getItem("favorites");
      const arrayFavorites: string[] = favorites ? JSON.parse(favorites) : [];
      arrayFavorites.push(value);
      await AsyncStorage.setItem("favorites", JSON.stringify(arrayFavorites));
    } catch (error) {
      throw error;
    }
  };

  const deleteFavorite = async (id: string) => {
    try {
      const favorites = await AsyncStorage.getItem("favorites");
      const arrayFavorites: string[] = favorites ? JSON.parse(favorites) : [];
      const arrayWithoutId = arrayFavorites.filter((value) => value !== id);
      await AsyncStorage.setItem("favorites", JSON.stringify(arrayWithoutId));
    } catch (error) {
      throw error;
    }
  };

  const getFavorites = async () => {
    try {
      const favorites = await AsyncStorage.getItem("favorites");
      return favorites ? JSON.parse(favorites) : [];
    } catch (error) {
      throw error;
    }
  };

  return { favorites, setFavorite, deleteFavorite, getFavorites };
};

export default useAsyncStorage;
