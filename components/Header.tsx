// React
import React, { useState, useEffect, useRef } from "react";
// React Native
import {
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
// Expo
import { MaterialIcons } from "@expo/vector-icons";
// Components
import { Text, View } from "./Themed";
// Hooks
import { useAsyncStorage, useGlobalContext } from "../hooks";
import { useLocalSearchParams } from "expo-router";

interface HeaderProps {
  title?: string;
  canGoBack?: boolean;
  canSearch?: boolean;
  canFavorite?: boolean;
}

/**
 * Functional component that render a header
 *
 * @return React.ReactNode <Header/>
 */
export const Header = ({
  canGoBack,
  canSearch,
  canFavorite,
  title,
}: HeaderProps) => {
  const navigation = useNavigation();
  const params = useLocalSearchParams();
  const { setFilters } = useGlobalContext();
  const { favorites, setFavorite, deleteFavorite } = useAsyncStorage();
  const [display, setDisplay] = useState<"default" | "search">("default");
  const [searchText, setSearchText] = useState("");
  const [canAddFavorite, setCanAddFavorite] = useState(false);
  const searchInputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (display === "search" && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [display]);

  useEffect(() => {
    if (favorites.find((favorite) => favorite === params?.id)) {
      setCanAddFavorite(true);
    }
  }, [favorites]);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleSearchPress = () => {
    setDisplay("search");
  };

  const handleSearchSubmitPress = () => {
    setDisplay("default");
    if (searchText) setFilters({ search: searchText });
  };

  const handleSearchInputPress = (search: string) => {
    setSearchText(search);
  };

  const handleFavoritePress = () => {
    if (canAddFavorite) {
      deleteFavorite(params?.id as string);
      setCanAddFavorite(false);
    } else {
      setFavorite(params?.id as string);
      setCanAddFavorite(true);
    }
  };

  const renderDefaultTitle = () => <Text style={styles.title}>{title}</Text>;

  const renderCoin = () => (
    <View style={styles.coinContainer}>
      <Image
        style={styles.coinImage}
        source={{ uri: params?.image as string }}
      />
      <Text style={styles.title}>{params?.symbol}</Text>
    </View>
  );

  return (
    <View style={styles.header}>
      {display === "default" && (
        <>
          {canGoBack && (
            <TouchableOpacity onPress={handleBackPress}>
              <MaterialIcons name="arrow-back-ios" size={24} color="white" />
            </TouchableOpacity>
          )}
          {params?.symbol ? renderCoin() : renderDefaultTitle()}
          <View style={styles.iconsContainer}>
            {canSearch && (
              <TouchableOpacity style={styles.icon} onPress={handleSearchPress}>
                <MaterialIcons name="search" size={24} color="white" />
              </TouchableOpacity>
            )}
            {canFavorite && (
              <TouchableOpacity
                style={styles.icon}
                onPress={handleFavoritePress}
              >
                <MaterialIcons
                  name={canAddFavorite ? "star" : "star-border"}
                  size={24}
                  color="white"
                />
              </TouchableOpacity>
            )}
          </View>
        </>
      )}
      {display === "search" && (
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            value={searchText}
            onChangeText={(value) => handleSearchInputPress(value)}
            ref={searchInputRef}
          />
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={handleSearchSubmitPress}
          >
            <Text style={styles.cancelButtonText}>
              {searchText ? "Search" : "Cancel"}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 16,
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginLeft: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: windowWidth - 32,
  },
  searchInput: {
    flex: 3,
    height: 32,
    backgroundColor: "#323546",
    color: "#FFFFFF",
    fontSize: 12,
    borderRadius: 24,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  cancelButton: {
    flex: 1,
    paddingVertical: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  cancelButtonText: {
    color: "white",
    fontSize: 12,
    fontWeight: "700",
  },
  coinContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  coinImage: {
    width: "24px",
    height: "24px",
    borderRadius: 24,
  },
});
