import React from 'react'
import { WebView } from 'react-native'

const Product = ({ navigation }) => {
    const selectedProductsUrl = navigation.state.params.selectedProduct.url
    return <WebView source={{uri: selectedProductsUrl}}/> 
}

Product.navigationOptions = ({ navigation }) => {
    const headerTitle = navigation.state.params.selectedProduct.title
    return {
        title: headerTitle
    }
}

export default Product