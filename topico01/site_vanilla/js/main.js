const content = mockedProducts.reverse().map(product=>card(product))
console.log(content);


const container = document.querySelector(".products_grid_container");

setTimeout(()=>
  container.innerHTML = content.join('')
,1000);