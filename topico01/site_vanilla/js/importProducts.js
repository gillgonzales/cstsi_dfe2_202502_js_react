function fetchProducts(){
   return mockedProducts.reverse().map(product => card(product))
}