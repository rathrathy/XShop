import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Productitem from './Productitem'
import { Colors } from '@/constants/Colors'
import { ProductType } from '@/types/type'

type Props = {
    products: ProductType[]
}

const ProductList = ({products}: Props) => {
  return (
    <View style={styles.container1}>
                <View style={styles. titleWrapper}>
                    <View style={styles. titleWrapper}>
                        <Text style={styles. title}>For You</Text>
                        <TouchableOpacity>
                            <Text style={styles.titleBtn}>See All</Text>
                         </TouchableOpacity>
                    </View>
                </View>
                <FlatList 
                    data={products}
                    numColumns={2}
                    columnWrapperStyle={{justifyContent: 'space-between', marginBottom: 20 }}
                    keyExtractor={(item) => item. id. toString()} 
                    renderItem={({index, item}) => (
                      <View>
                      <Image source={{uri: item.images[0]}} style={styles.productImg} />
                      <Productitem item={item}/>
                      </View>
                    
                )}
                />
    </View>
  )
}

export default ProductList

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