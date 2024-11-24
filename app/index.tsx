import { useState } from "react";
import { Text, View, StyleSheet, Image, FlatList } from "react-native";
import { ScrollView, TextInput } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import ItemDisplay from "@/ui/ItemDisplay";
import { ProductCardProps } from "@/ui/ProductCard";
import CartView from "@/ui/CartView";
import { LogBox } from "react-native";

LogBox.ignoreAllLogs(true);

export default function Index() {
  // initialize state
  const [searchText, setSearchText] = useState("");
  const [cart, setCart] = useState<ProductCardProps[]>([]);
  const filterItems = () => {
    setSearchText(searchText);
  };

  // write callbacks
  const addItemToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const totalAmount: number = cart.reduce(
    (total, item) => Number(total) + Number(item.price),
    0
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.title}>Order Book</Text>
        <View style={styles.search_bar}>
          <Ionicons name="search" style={styles.searchIcon} />
          <TextInput
            style={styles.input}
            value={searchText}
            onChangeText={setSearchText}
            onSubmitEditing={filterItems}
          />
        </View>
      </View>
      <View style={styles.contentWrapper}>
        <ItemDisplay
          filter={searchText}
          addToCart={addItemToCart}
        ></ItemDisplay>
      </View>
      <CartView cart={cart} totalAmount={totalAmount}></CartView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentWrapper: {
    marginTop: 200,
  },

  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
    alignContent: "flex-start",
    marginTop: 10,
    color: "white",
    transform: [{ translateY: -10 }],
  },

  searchIcon: {
    padding: 10,
  },

  container: {
    fontFamily: "sans-serif",
    flex: 1,
  },

  banner: {
    backgroundColor: "#356b82",
    color: "#FFFFFF",
    fontSize: 16,
    height: 200,
    flexDirection: "column",
    textAlign: "left",
    paddingLeft: 12,
    position: "absolute",
    paddingTop: 100,
    zIndex: 1,
    top: 0,
    left: 0,
    right: 0,
  },

  input: {
    flex: 1,
    color: "#000000",
  },

  search_bar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    height: 30,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
});
