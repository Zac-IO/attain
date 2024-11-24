import { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, FlatList } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import  Ionicons from '@expo/vector-icons/Ionicons';
import ItemDisplay from "@/ui/ItemDisplay";
import ProductCard, { ProductCardProps } from "@/ui/ProductCard";
import CartView from "@/ui/CartView";

export default function Index() {
  const [searchText, setSearchText] = useState("");
  const [cart, setCart] = useState<ProductCardProps[]>([]); 
  const filterItems = () => {
    setSearchText(searchText)
  }
  const addItemToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const totalAmount: number = cart.reduce((total, item) => total + item.price, 0);

  return (
    <ScrollView
      style={
        styles.container
      }
    >
      <View style={
          styles.banner
        }
      >
      <h1 >  Order Book</h1>
      
      <View style = {styles.search_bar}>
      <Ionicons name="search" style = {styles.searchIcon} />
      <TextInput style = {styles.input} value={searchText} onChangeText={setSearchText} onSubmitEditing={filterItems} /> 
      </View>
      </View>
    <span></span>
      <ItemDisplay filter={searchText} addToCart={addItemToCart}></ItemDisplay>
      <CartView cart={cart} totalAmount={totalAmount}>
      </CartView>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  cart : {

  },

  searchIcon : {
    padding: 10
  },

  container : {
    fontFamily : 'sans-serif'
  },

  banner : {
    backgroundColor : '#7096B5',
    color: "#FFFFFF",
    fontSize : 16,
    height: 170,
    flexDirection : 'column',
    textAlign : 'left',
    paddingLeft : 12
  },

  input : {
    flex : 1,
    color: "#000000",
  },

  search_bar : {
    flexDirection: "row", 
    alignItems: "center", 
    backgroundColor: "#FFFFFF", 
    borderRadius: 50, 
    height: 50, 
    paddingHorizontal: 15, 
    borderWidth: 1, 
    borderColor: "#ccc", 
    shadowColor: "#000", 
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3, 
  }

})
