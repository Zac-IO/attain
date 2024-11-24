import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ProductCard, { ProductCardProps } from "@/ui/ProductCard"; 

export default function CartView({ cart, totalAmount } : {cart : ProductCardProps[], totalAmount : number}) {

  return (
    <View style={styles.container}>
      <Text style={styles.cartTitle}>Your Cart</Text>

      {cart.length === 0 ? (
        <View style={styles.emptyCart}>
          <Text style={styles.emptyText}>Your cart is empty</Text>
        </View>
      ) : (
        <FlatList
          data={cart}
          renderItem={({ item }) => (
            <ProductCard 
              id={item.id}
              oos={item.oos}
              qoh={item.qoh}
              name={item.name}
              size={item.size}
              upc1={item.upc1}
              upc2={item.upc2}
              image={item.image}
              price={item.price}
              metadata={item.metadata}
              supplier={item.supplier}
              unit_size={item.unit_size}
              created_at={item.created_at}
              nacs_category={item.nacs_category}
              discounted_price={item.discounted_price}
              nacs_subcategory={item.nacs_subcategory}
            />
          )
        }
          contentContainerStyle={styles.cartList}
        />
      )}

      {cart.length > 0 && (
        <View style={styles.cartSummary}>
          <Text style={styles.cartSummaryText}>Total items: {cart.length}</Text>
          <Text style={styles.cartSummaryText}>Total Price: ${totalAmount.toFixed(2)}</Text>
        </View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf : 'center',
    padding: 20,
    backgroundColor: '#F8F8F8',
    alignItems : 'center'
  },
  cartTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginBottom: 15,
    padding: 10,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  removeButton: {
    marginLeft: 'auto',
    padding: 10,
    backgroundColor: '#FF3B30',
    borderRadius: 8,
  },
  removeText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  emptyCart: {
    alignItems: 'center',
    marginTop: 50,
  },
  emptyText: {
    fontSize: 18,
    color: '#999',
  },
  cartList: {
    paddingBottom: 20,
  },
  cartSummary: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  cartSummaryText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 5,
  },
  buttons: {
    marginTop: 20,
  },
  checkoutButton: {
    backgroundColor: '#00A1D6',
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  emptyButton: {
    backgroundColor: '#FF3B30',
    paddingVertical: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
