import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ProductType } from '@/types/type'
import { Colors } from '@/constants/Colors'
import { Link, Stack } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Productitem from '@/assets/components/Productitem'
import ProductList from '@/assets/components/ProductList'
import Categories from '@/assets/components/Categories'


type Props = {}

// const Header = (props: Props) => {
//     const insets= useSafeAreaInsets();
// }

const HomeScreen = (props: Props) => {
  const [products, setProducts]=useState<ProductType[]>([]);
  const[categories, setCategories] = useState <CategoryType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const insets= useSafeAreaInsets();


  useEffect(() => {
      getProducts();
      getCategories();
  },[]);
  
  const getProducts =async() => {
    const URL = 'http://localhost:8000/products';
        const response= await axios.get(URL);

        //console.log(response.data);
        setProducts(response.data);
        setIsLoading (false);
  };
  
  const getCategories =async() => {
    const URL = 'http://localhost:8000/categories';
        const response= await axios.get(URL);

        console.log(response.data);
        setCategories(response.data);
        setIsLoading (false);
  };
  
  return (
    <>
    <View style={[styles.container, {paddingTop:insets.top}]}>
      <Text style={styles.logo}>SX</Text>
      <Link href={'/explore'} asChild>
      <TouchableOpacity style={styles.searchBar}>
            <Text style={styles. searchTxt}>Search</Text>
            <Ionicons name="search-outline" size={20} color={Colors.gray} />
      </TouchableOpacity>
      </Link>
    </View>
    <Categories categories={categories}/>
    <ProductList products={products} />
    </>
  );
};

export default HomeScreen

const styles = StyleSheet.create({
  container1: {
    marginHorizontal: 20
  },

  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
    backgroundColor: Colors.white, 
    paddingHorizontal: 20, 
    paddingBottom:10,
    gap:15
},

logo: {
    fontSize:24,
    fontWeight:'700',
    color: Colors.primary
},
searchBar: {
    flex: 1, 
    backgroundColor: Colors.background,
    borderRadius: 5,
    paddingVertical: 8, 
    paddingHorizontal: 10, 
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
searchTxt: {
    color: Colors.gray
},
productImg: {
  width:'100%',
  height:200,
  borderRadius:15,
  marginBottom:10
},
titleWrapper: {
  flexDirection: "row",
  justifyContent: "space-between",
   marginBottom: 10,
  },
  title: {
  fontSize: 14,
  fontWeight: "600",
  letterSpacing: 0.6,
  color: Colors.black},
  
  titleBtn: {
  fontSize: 14,
  fontWeight: '500',
  letterSpacing: 0.6,
  color: Colors.black,},
});