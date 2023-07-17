// React
import React, { useState, useEffect, useRef, useContext } from "react";
// React Native
import { TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
// Expo
import { MaterialIcons } from "@expo/vector-icons";
// Components
import { Text, View } from "./Themed";
// Hooks
import { useGlobalContext } from "../hooks";

interface HeaderProps {
  title?: string;
  canGoBack?: boolean;
}

export const Header = ({ canGoBack, title }: HeaderProps) => {
  const navigation = useNavigation();
  const { setFilters } = useGlobalContext();
  const [display, setDisplay] = useState<"default" | "search">("default");
  const [searchText, setSearchText] = useState("");
  const searchInputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (display === "search" && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [display]);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleSearchPress = () => {
    setDisplay("search");
  };

  const handleCancelPress = () => {
    setDisplay("default");
    setSearchText("");
    setFilters({ search: "" });
  };

  const handleSearchInputPress = (search: string) => {
    setSearchText(search);
    setFilters({ search });
  };

  return (
    <View style={styles.header}>
      {display === "default" && (
        <>
          {canGoBack && (
            <TouchableOpacity onPress={handleBackPress}>
              <MaterialIcons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
          )}
          <Text style={styles.title}>{title}</Text>
          <View style={styles.iconsContainer}>
            <TouchableOpacity style={styles.icon} onPress={handleSearchPress}>
              <MaterialIcons name="search" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
              <MaterialIcons name="lightbulb" size={24} color="white" />
            </TouchableOpacity>
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
            onPress={handleCancelPress}
          >
            <Text style={styles.cancelButtonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

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
  },
  searchInput: {
    flex: 3,
    height: 32,
    backgroundColor: "#323546",
    color: "#646b80",
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
  },
});
