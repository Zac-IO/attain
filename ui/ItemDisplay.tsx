import {useEffect, useState} from 'react'
import { FlatList, View, StyleSheet, SafeAreaView} from 'react-native';
import ProductCard, { ProductCardProps } from './ProductCard';


export default function ItemDisplay(props : {filter: String, addToCart : Function}){
    const [itemsURL, setItemsURL] = useState("https://retoolapi.dev/f0ee0v/items")
    const [data, setData] = useState<ProductCardProps[]>([]);
    const [filteredData, setFilteredData] = useState<ProductCardProps[]>([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(itemsURL); 
          const json: ProductCardProps[] = await response.json(); 
          setData(json); 
          setFilteredData(json);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false); 
        }
      };
  
      fetchData();
    }, []); 

    useEffect(() => {
      const filtered = data.filter((item) =>
        item.name?.toLowerCase().includes(props.filter.toLowerCase())
      );
      setFilteredData(filtered);
    }, [props.filter, data]);
  
    if (loading) {
      return (
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      );
    }

         
    return (
      <SafeAreaView style={styles.safeArea}>
      <FlatList
        style={styles.container}
        data={filteredData}
        keyExtractor={(item: ProductCardProps) => item.id.toString()} // Ensure `id` is unique
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
            update_cart= {props.addToCart}
          />
        )
      }
      numColumns={2}
      
        contentContainerStyle={styles.list}
      />
      </SafeAreaView>
    )
  }

    const styles = StyleSheet.create({
      safeArea : {
        width: '100%'
      },
      container: {
        width: '100%',
        padding: 16,
        backgroundColor: "#b8e2f2",
        alignSelf: 'flex-start',
      },
      item: {
        marginBottom: 16,
        padding: 16,
        backgroundColor: "#fff",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
      },
      title: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 8,
      },
    });