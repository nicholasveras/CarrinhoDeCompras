import { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';

import { Feather } from '@expo/vector-icons'
import Product from '../../components/Product'
import {useNavigation} from '@react-navigation/native'

export default function Home() {

  const navigation = useNavigation();
  const [products, setProducts] = useState([
    {
      id: '1',
      name: "Coca cola",
      price: 9.90
    },
    {
      id: '2',
      name: "Chocolate",
      price: 6.50
    },
    {
      id: '3',
      name: "Queijo 500gr",
      price: 15.75
    },
    {
      id: '4',
      name: "Batata frita congelada",
      price: 17.90
    },
    {
      id: '5',
      name: "Cerveja Heineken",
      price: 6.90
    },
    {
      id: '6',
      name: "Guarana lata",
      price: 4.90
    },
    {
      id: '7',
      name: "Salgadinho Doritos",
      price: 9.90
    },
    {
      id: '8',
      name: "Picanha 1kg",
      price: 79.90
    },
  ])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cartContent}>
        <Text style={styles.title}>Lista de produtos</Text>

        <TouchableOpacity 
        style={styles.cartButton}
        onPress={() => navigation.navigate("Cart")}
        >
          <View style={styles.dot}>
            <Text style={styles.dotText}>3</Text>
          </View>
          <Feather name='shopping-cart' size={30} color='black' />
        </TouchableOpacity>
      </View>

      <FlatList
      style={styles.list}
      data={products}
      keyExtractor={(item) => String(item.id)}
      renderItem={({item}) => <Product data={item}/> }
      />



    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    paddingEnd: 14,
    paddingStart: 14,
  },
  cartContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  dot: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#168fff',
    width: 20,
    height: 20,
    borderRadius: 12,
    position: 'absolute',
    zIndex: 99,
    bottom: -2,
    left: -5,
  },
  dotText: {
    fontSize: 12
  }
})