import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

export interface ProductCardProps {
  id: number;
  oos: string;
  qoh: string;
  name: string;
  size: string;
  upc1: string;
  upc2: string;
  image: string;
  price: number;
  metadata: string;
  supplier: string;
  unit_size: string;
  created_at: string;
  nacs_category: string;
  discounted_price: string;
  nacs_subcategory: string;
  update_cart?: (info: ProductCardProps) => void;
}

const ProductCard: React.FC<ProductCardProps> = (props) => {
  const screenWidth = Dimensions.get("window").width;
  const itemWidth = screenWidth / 2 - 30;
  return (
    <View style={[styles.card, { width: itemWidth }]}>
      <Image
        source={{ uri: props.image }}
        style={styles.image}
        resizeMode="contain"
      />
      <TouchableOpacity style={styles.add_to_cart} onPress={() => props.update_cart?.(props)}>
        <AntDesign name="pluscircle" size={30} color="#7096B5" />
      </TouchableOpacity>

      <Text style={styles.name}>{props.name}</Text>
      <Text
        style={[styles.price, props.discounted_price && styles.crossed_out]}
      >
        ${props.price}
      </Text>
      <Text style={styles.supplier}>Supplier: {props.supplier}</Text>
      {props.discounted_price && (
        <Text style={styles.discountedPrice}>
          Discounted: ${props.discounted_price}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  add_to_cart: {
    justifyContent: "center",
    alignItems: "center",
    transform: [{ translateX: 40 }, { translateY: -20 }],
  },
  crossed_out: {
    textDecorationLine: "line-through",
    color: "#FF0000",
  },
  card: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    margin: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    width: "50%",
    borderColor : 'transparent'
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "left",
  },
  price: {
    fontSize: 14,
    color: "green",
    marginTop: 5,
  },
  supplier: {
    fontSize: 12,
    color: "#555",
    marginTop: 5,
  },
  discountedPrice: {
    fontSize: 14,
    color: "green",
    marginTop: 5,
  },
});

export default ProductCard;
